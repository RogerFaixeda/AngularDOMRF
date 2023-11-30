import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-comp-roger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-roger.component.html',
  styleUrl: './comp-roger.component.css'
})
export class CompRogerComponent implements OnInit{
  constructor() {
  }
  ngOnInit() {
    this.fun1();
    this.fun2();
  }
  fun1 () {
    let titolMayus = document.getElementById('titol')!;
    titolMayus.innerHTML = titolMayus.innerHTML.toUpperCase();
  }
  fun2 (){
    return document.location.href;
  }
}
