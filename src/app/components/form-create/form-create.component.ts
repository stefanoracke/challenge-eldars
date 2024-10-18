import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { PostI } from '../../models/post.interface';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [Button, ReactiveFormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.scss'
})
export class FormCreateComponent implements OnInit {
  fb = inject(FormBuilder)
  messageService = inject(MessageService)
  apiService = inject(ApiService)
  blogForm!: FormGroup
  @Input() post?: PostI
  @Input() label:string = "Crear"
  @Input() titleForm:string = "Creación"

  constructor() {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    })
  }

  get title() {
    return this.blogForm.get('title');
  }
  get body() {
    return this.blogForm.get('body');
  }

  ngOnInit(): void {
    if(this.post){
      this.blogForm.setValue(
        {
          title: [this.post.title],
          body: [this.post.body]
        }
      )
    }
  }

  create() {
    if (this.blogForm.valid) {
      const formToSend = { userId: 1, ...this.blogForm.value };
      
      if (this.post) { // Suponiendo que this.post es el post existente
        this.apiService.putData(formToSend, this.post.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Actualización exitosa',
              detail: 'El post ha sido actualizado correctamente.'
            });
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error al actualizar',
              detail: 'No se pudo actualizar el post. Intenta nuevamente.'
            });
          }
        });
      } else {
        this.apiService.postData(formToSend).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Publicación exitosa',
              detail: 'El post ha sido creado correctamente.'
            });
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error al crear',
              detail: 'No se pudo crear el post. Intenta nuevamente.'
            });
          }
        });
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Formulario inválido',
        detail: 'Por favor, completa todos los campos requeridos.'
      });
    }
  }

}
