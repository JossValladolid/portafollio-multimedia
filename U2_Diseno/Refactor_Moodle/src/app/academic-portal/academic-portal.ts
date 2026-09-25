import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CourseCategory {
  name: string;
  count: number;
}

@Component({
  selector: 'app-academic-portal',
  imports: [CommonModule, FormsModule],
  templateUrl: './academic-portal.html',
  styleUrl: './academic-portal.css',
})
export class AcademicPortal {
  username = '';
  password = '';
  submitting = false;
  errorMessage = '';

  @Output() loginSubmit = new EventEmitter<{ username: string; password: string }>();
  @Output() guestAccess = new EventEmitter<void>();

  categories: CourseCategory[] = [
    { name: 'Cooordinacion Académica', count: 18 },
    { name: 'Coordinación de Carrera', count: 14 },
    { name: 'Cursos de Titulación', count: 12 },
    { name: 'Extracurriculares', count: 9 },
    { name: 'Servicios Educativos', count: 7 },
    { name: 'Tecnólogo', count: 5 },
    { name: 'Tecnólogo', count: 9 },
    { name: 'Tecnólogo Profesional', count: 10 }
  ];

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Ingresa tu usuario y contraseña para continuar.';
      return;
    }
    this.errorMessage = '';   
    this.submitting = true;
    this.loginSubmit.emit({ username: this.username, password: this.password });
    setTimeout(()=>{
      this.submitting = false;
    }, 2000);

  }

  onGuestAccess(): void {
    this.guestAccess.emit();
  }
}
