import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'calendar1',
    loadChildren: () => import('./calendar1/calendar1.module').then( m => m.Calendar1PageModule)
  },
  {
    path: 'comunicacion-api',
    loadChildren: () => import('./comunicacion-api/comunicacion-api.module').then( m => m.ComunicacionApiPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'formula',
    loadChildren: () => import('./formula/formula.module').then( m => m.FormulaPageModule)
  },
  {
    path: 'data-fisio',
    loadChildren: () => import('./data-fisio/data-fisio.module').then( m => m.DataFisioPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
