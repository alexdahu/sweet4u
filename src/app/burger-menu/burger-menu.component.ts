import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core'
import {HeaderComponent} from "../header/header.component"


@Component({
  selector: '[app-burger-menu]',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  encapsulation:ViewEncapsulation.None ,
})


export class BurgerMenuComponent implements OnInit {

  class: string ="";

  @Output() classEmitter = new EventEmitter<string>();

  onClickButtonClose() {
    this.classEmitter.emit(this.class);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

