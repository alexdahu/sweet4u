import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {BurgerMenuComponent} from "../burger-menu/burger-menu.component";
export {BurgerMenuComponent} from '../burger-menu/burger-menu.component';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None ,
})

export class HeaderComponent implements OnInit {

  logoImg = "assets/images/svg/logo-site-Sweet4U.svg";
  burgerClasses = "menuBurger"

  constructor () { }
  receiveClass($event: string) {
    this.burgerClasses = $event;
  }
  onClickButtonToggle(): void{
    this.burgerClasses ="menuBurger --openned";
  }
  ngOnInit(): void {
  }



}
