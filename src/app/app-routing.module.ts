import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as route} from './pages/pages-routing.module';

const routes: Routes = [
  ...route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
