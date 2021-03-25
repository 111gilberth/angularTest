import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Componets */
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TabComponent } from './components/tab/tab.component';
/* guard */
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo: "login"},
  {path:"login", component: LoginComponent},
  {path:"home", component: MainComponent, canActivate: [AuthGuard]}, 
  {path:"profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path:"tab", component:TabComponent, canActivate: [AuthGuard]},
  {path:"register", component:RegisterComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
