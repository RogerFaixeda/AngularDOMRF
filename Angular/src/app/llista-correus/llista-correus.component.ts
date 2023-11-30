import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CorreuComponent} from "../correu/correu.component";

@Component({
  selector: 'app-llista-correus',
  standalone: true,
  imports: [CommonModule, CorreuComponent],
  templateUrl: './llista-correus.component.html',
  styleUrl: './llista-correus.component.css'
})
export class llistaCorreusComponent implements OnInit{
  correus: any[];
  constructor() {
    const correu1 = {
      titol: "Titol del 1",
      cos: "HolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHola",
      emisor: "emisor@gmail.com",
      receptor: "receptor@gmail.com",
      llegit: true,
    }
    const correu2 = {
      titol: "Titol del 2",
      cos: "HolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHola",
      emisor: "emisor@gmail.com",
      receptor: "receptor@gmail.com",
      llegit: false,
    }
    this.correus = [];
    this.correus.push(correu1);
    this.correus.push(correu2);
  }
  ngOnInit (){
    this.countRead()
  }
  countRead (){
    let correusLLegits = 0
    let correusNoLLegits = 0

    for (let i = 0; i < this.correus.length; i++){
      if (this.correus[i].llegit === true ) correusLLegits++
      else correusNoLLegits++
    }
    return{
      read: correusLLegits,
      unread: correusNoLLegits
    }
  }
}
