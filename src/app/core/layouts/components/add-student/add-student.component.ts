import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/interfaces/students/student';
import { StudentsServiceService } from 'src/app/core/services/students/students-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  // L’objet 'studentForm' sera utilisé pour notre liaison de modèle de formulaire
  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: 'Male',
    age: 0,
    email:'',
    profession: ''
  };


  // Les services 'StudentService' et 'Router' sont injectés dans notre constructeur
  constructor(
    private studentService: StudentsServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // La méthode 'create()' sera enregistrée pour l’événement de clic sur le bouton d’envoi du formulaire. Ici, nous appelons notre appel HTTP Post API. En cas de réussite de l’appel d’API, revenez à la page d’accueil
  create() {
    this.studentService.create(this.studentForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
