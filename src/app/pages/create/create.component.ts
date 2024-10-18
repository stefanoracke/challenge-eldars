import { Component } from '@angular/core';
import { FormCreateComponent } from '../../components/form-create/form-create.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormCreateComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

}
