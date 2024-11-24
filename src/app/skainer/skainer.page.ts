import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { Capacitor } from '@capacitor/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';

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
    private platform:Platform
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


  async rearbarcodefromimage(){
    
      const {files} = await FilePicker.pickImages({ });

      const path = files[0]?.path
      
    
  }
}
