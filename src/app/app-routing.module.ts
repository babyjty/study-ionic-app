import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  }, 
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'external-register',
    loadChildren: () => import('./external-register/external-register.module').then( m => m.ExternalRegisterPageModule)
  },
  {
<<<<<<< HEAD
    path: 'spot-details/:place_id',
    loadChildren: () => import('./spot-details/spot-details.module').then((m) => m.SpotDetailsPageModule),
  },
=======
    path: 'jio-details',
    loadChildren: () => import('./jio-details/jio-details.module').then( m => m.JioDetailsPageModule)
  },
  {
    path: 'jio-list',
    loadChildren: () => import('./jio-list/jio-list.module').then( m => m.JioListPageModule)
  },
  {
    path: 'jio-form',
    loadChildren: () => import('./jio-form/jio-form.module').then( m => m.JioFormPageModule)
  },
  {
    path: 'jio-details-accept',
    loadChildren: () => import('./jio-details-accept/jio-details-accept.module').then( m => m.JioDetailsAcceptPageModule)
  },
  {
    path: 'jio-history',
    loadChildren: () => import('./jio-history/jio-history.module').then( m => m.JioHistoryPageModule)
  },
  {
    path: 'jio-details-pending',
    loadChildren: () => import('./jio-details-pending/jio-details-pending.module').then( m => m.JioDetailsPendingPageModule)
  },
  {
    path: 'create-jio',
    loadChildren: () => import('./create-jio/create-jio.module').then( m => m.CreateJioPageModule)
  }
  // {
  //   path: 'jio-create',
  //   loadChildren: () => import('./jio-create/jio-create.module').then( m => m.JioCreatePageModule)
  // }

>>>>>>> 6fa50275b1bda67dffa1163ca8b54f2c1c1780f8
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
