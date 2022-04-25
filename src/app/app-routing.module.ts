import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { FondatricesComponent } from './fondatrices/fondatrices.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { NosAteliersComponent } from './nos-ateliers/nos-ateliers.component';
import { NosCrechesComponent } from './nos-creches/nos-creches.component';
import { NotreBlogComponent } from './notre-blog/notre-blog.component';
import { NotreConciergerieComponent } from './notre-conciergerie/notre-conciergerie.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { PhilosophieComponent } from './philosophie/philosophie.component';
import { ProjetPedagogiqueComponent } from './projet-pedagogique/projet-pedagogique.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  {path:'burger-menu', component: BurgerMenuComponent},
  {path:'menu-main',component:MenuMainComponent},
  { path: 'home', component: HomeComponent },
  { path: 'philosophie', component: PhilosophieComponent },
  {path:'fondatrices', component:FondatricesComponent},
  { path: 'homeMenu', component:HomeComponent},
  { path: 'projet-pedagogique', component:ProjetPedagogiqueComponent},
  {path: 'nos-creches', component:NosCrechesComponent},
  {path: 'nos-ateliers', component:NosAteliersComponent},
  {path: 'notre-conciergerie', component:NotreConciergerieComponent},
  {path: 'notre-blog', component:NotreBlogComponent},
  {path: 'nous-contacter', component:NousContacterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
