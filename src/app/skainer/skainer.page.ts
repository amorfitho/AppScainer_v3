import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { Capacitor } from '@capacitor/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-skainer',
  templateUrl: './skainer.page.html',
  styleUrls: ['./skainer.page.scss'],
})
export class SkainerPage implements OnInit {

  segment='ska';
  qrText='';

  resultadoSka= '';


  constructor(
    private modalController: ModalController,
    private platform:Platform,
    private loadingController:LoadingController
  ) { }

  ngOnInit(): void {
      
    if(this.platform.is('capacitor')){

      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }
  }

  async stratScan() {
    const modal = await this.modalController.create({
    component: BarcodeScanningModalComponent,
    cssClass: 'barcode-scanning-modal',
    showBackdrop: false,
    componentProps: { 
      formats:[],
      LensFacing : LensFacing.Back
     }
    });
  
    await modal.present();

    const { data } = await modal.onWillDismiss();

    if(data){
      this.resultadoSka = data?.barcode?.displayValue;
    }
  }


  async readBarcodesFromImage(){
    
    const {files} = await FilePicker.pickImages({ });

    const path = files[0]?.path;

    if(!path) return;

    const { barcodes } = await BarcodeScanner.readBarcodesFromImage({
      path,
      formats: []
    })
    
    this.resultadoSka = barcodes[0].displayValue;
  }

  //guardar qr
  captureScreen(){

    const element = document.getElementById('qrImg') as HTMLElement;
    html2canvas(element).then((canvas: HTMLCanvasElement) =>{
      this.downloadImagen(canvas);
      if(this.platform.is('capacitor')) this.shareImagen(canvas);
      else this.downloadImagen(canvas);
    })
  }

  //descarar imagen en web
  downloadImagen(canvas: HTMLCanvasElement){
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr.png';
    link.click();
  }

  //descarar imagen en celu
  async shareImagen(canvas: HTMLCanvasElement){
    let base64 = canvas.toDataURL();
    let path = 'qr.png';

      const loading = await this.loadingController.create({
        spinner: 'crescent'
      });
      await loading.present();
    

    await Filesystem.writeFile({
      path,
      data: base64,
      directory: Directory.Cache,
    }).then(async (res)=>{
      let uri= res.uri
      
      

      await Share.share({
      url: 'uri'});

      await Filesystem.deleteFile({
        path,
        directory: Directory.Cache
      })


      }).finally(()=>{
        loading.dismiss();
      })
     
  }
}
