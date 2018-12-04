import { Component } from '@angular/core';
import { Student } from 'src/shared/models/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VuelingForm';

  hobbiesCheckboxes = [
    { name: 'Correr', checked: false },
    { name: 'Leer', checked: false },
    { name: 'Cine', checked: false },
    { name: 'Bicicleta', checked: false }
   ];

  student = new Student('Pepe', '', '', '', '', []);

  public add() {
    console.log('Entra en el modo add');

    this.hobbiesCheckboxes.forEach(element => {
      if (element.checked) {
        this.student.hobbies.push(element.name);
      }
    });

    alert('Add alumno: \nnombre: ' + this.student.nombre +
    ' \napellidos:' + this.student.apellidos +
    ' \ndni: ' + this.student.dni +
    ' \npoblacion: ' + this.student.poblacion +
    ' \nsexo: ' + this.student.sexo +
    ' \nhobbies: ' + this.student.hobbies);

    this.student.hobbies = [] ;
  }
}
