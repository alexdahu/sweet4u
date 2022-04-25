import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PhilosophieComponent } from './philosophie/philosophie.component';
import { FondatricesComponent } from './fondatrices/fondatrices.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ProjetPedagogiqueComponent } from './projet-pedagogique/projet-pedagogique.component';
import { NosCrechesComponent } from './nos-creches/nos-creches.component';
import { NosAteliersComponent } from './nos-ateliers/nos-ateliers.component';
import { NotreConciergerieComponent } from './notre-conciergerie/notre-conciergerie.component';
import { NotreBlogComponent } from './notre-blog/notre-blog.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { MenuMainComponent } from './menu-main/menu-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PhilosophieComponent,
    FondatricesComponent,
    HomeMenuComponent,
    ProjetPedagogiqueComponent,
    NosCrechesComponent,
    NosAteliersComponent,
    NotreConciergerieComponent,
    NotreBlogComponent,
    NousContacterComponent,
    BurgerMenuComponent,
    MenuMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
