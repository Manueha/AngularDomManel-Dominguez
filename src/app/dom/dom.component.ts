import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import {yellowsubmarine} from "./Funcion.js";
//@ts-ignore
import {changeSize} from "./Funcion.js";
//@ts-ignore
import {countWord } from "./Funcion.js";
//@ts-ignore
import {imagen} from "./Funcion.js";

@Component({
  selector: 'app-dom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dom.component.html',
  styleUrl: './dom.component.css'
})
export class DomComponent implements OnInit{
  comptador: any;
  constructor() {
  }

  ngOnInit(){
    let body = document.getElementById("majuscules")!;
    body.innerHTML = body.innerHTML.toUpperCase()
    yellowsubmarine();
      changeSize();
      countWord();
      this.comptador = countWord();
      imagen();
    }


  protected readonly document = document;
}
