import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ingresadoGuard} from './ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'regis',
    loadChildren: () => import('./regis/regis.module').then( m => m.RegisPageModule)
    
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'recu',
    loadChildren: () => import('./recu/recu.module').then( m => m.RecuPageModule)
     
  },
  {
    path: 'ini',
    loadChildren: () => import('./ini/ini.module').then( m => m.IniPageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
    
  },
  {
    path: 'lista',
    loadChildren: () => import('./crud-lista/crud-lista.module').then( m => m.CrudListaPageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: 'crud-modi',
    loadChildren: () => import('./crud-modi/crud-modi.module').then( m => m.CrudModiPageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: 'skainer',
    loadChildren: () => import('./skainer/skainer.module').then( m => m.SkainerPageModule),
    canActivate: [ingresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
