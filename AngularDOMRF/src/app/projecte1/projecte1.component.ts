import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projecte1',
  standalone: true,
  imports: [],
  templateUrl: './projecte1.component.html',
  styleUrl: './projecte1.component.css'
})
export class Projecte1Component implements OnInit{
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