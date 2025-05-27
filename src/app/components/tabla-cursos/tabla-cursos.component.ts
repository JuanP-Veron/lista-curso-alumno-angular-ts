import { Component, OnInit } from '@angular/core';
import { cursos } from './mes';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/cursos-to';

@Component({
  selector: 'app-tabla-cursos',
  imports: [CommonModule],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit{ 
  public cursos?: Curso[];

  ngOnInit(): void {
    this.cursos = cursos
}
 
}