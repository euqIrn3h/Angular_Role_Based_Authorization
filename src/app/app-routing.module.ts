import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSecretComponent } from './components/admin-secret/admin-secret.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserSecretComponent } from './components/user-secret/user-secret.component';
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'usersecret', component: UserSecretComponent, canActivate: [AuthGuard] },
  { path: 'adminsecret', component: AdminSecretComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
