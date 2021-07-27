import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleCardComponent } from './title-card/title-card.component';

const routes: Routes = [{ path: '', component: TitleCardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
