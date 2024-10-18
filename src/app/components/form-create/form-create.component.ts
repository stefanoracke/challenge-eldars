import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.scss'
})
export class FormCreateComponent implements OnInit {
  fb = inject(FormBuilder)
  blogForm!:FormGroup

  constructor(){
    this.blogForm = this.fb.group({
      
    })
  }

  ngOnInit(): void {
      
  }

}
