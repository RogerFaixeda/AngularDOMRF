import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './correu.component.html',
  styleUrl: './correu.component.css'
})
export class CorreuComponent implements OnInit  {
    correu: any;
    boto: number;
  constructor() {

    this.correu = {
      titol: "Titol modificat",
      cos: "cdsbd svibw aiaoc qwjknc wkeqjbkj",
      emisor: "roger.faixeda@institutvidreres.cat",
      destinatar: "roger.faixeda@institutvidreres.cat",
    }
    this.boto = this.correu.titol.length;
  }
  ngOnInit() {
  }

  sumatitol() {
    return this.boto++;
  }
}
