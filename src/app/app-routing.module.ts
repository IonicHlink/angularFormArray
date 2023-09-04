import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { PatchFormComponent } from './patch-form/patch-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'create',
    pathMatch:'full'
  },
  {
    path:'create',
    component:CreateFormComponent
  },
  {
    path:'patch',
    component:PatchFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
