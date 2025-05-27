import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { alumnos } from './mes';
import { Alumno } from '../../models/alumnos-to';

@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit{ 
  public alumnos?: Alumno[];

  ngOnInit(): void {
    this.alumnos = alumnos
}
 
}