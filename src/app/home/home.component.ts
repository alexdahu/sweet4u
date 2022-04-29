import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {

  @Input() titreEntree:string = "";

  titreEntreeEnfant1= "Un cocon  ";
  titreEntreeEnfant2 = "de bienveillance pour";
  titreEntreeEnfant3 = " les enfant";

  titreEntreeAdulte1 = "Une source ";
  titreEntreeAdulte2 = "de quiétude pour";
  titreEntreeAdulte3 = " les parents";

  constructor() { }

  ngOnInit(): void {
  }

}
