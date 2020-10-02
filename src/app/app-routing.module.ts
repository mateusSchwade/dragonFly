import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonListComponent } from './pages/dragon/dragon-list/dragon-list.component';
import { DragonRegisterComponent } from './pages/dragon/dragon-register/dragon-register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/utils/not-found/not-found.component';
import { AppGuardService } from './services/app-guard/app-guard.service';

const routes: Routes = [
  {
    path: 'dragon',
    canActivate: [AppGuardService],
    component: DragonListComponent
  },
  {
    path: 'dragon-register',
    canActivate: [AppGuardService],
    component: DragonRegisterComponent
  },
  {
    path: 'dragon-register/:id',
    canActivate: [AppGuardService],
    component: DragonRegisterComponent
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
