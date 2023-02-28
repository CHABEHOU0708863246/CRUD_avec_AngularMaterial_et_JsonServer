import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsServiceService } from '../../../services/students/students-service.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentsServiceService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
   this.studentService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
