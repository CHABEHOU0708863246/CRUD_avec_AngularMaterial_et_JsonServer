import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/interfaces/students/student';
import { StudentsServiceService } from 'src/app/core/services/students/students-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: 'Male',
    age: 0,
    email:'',
    profession: ''
  };
// Injecté le 'ActivatedRoute' qui se charge à partir du '@angular/routeur'
  constructor(
    private studentService: StudentsServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.studentService.getById(id).subscribe((data) => {
      this.studentForm = data;
    });
  }

  update() {
    this.studentService.update(this.studentForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
