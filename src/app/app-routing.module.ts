import { AddStudentComponent } from './core/layouts/components/add-student/add-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponents } from './core/layouts/components/all-students/all-students.component';
import { EditStudentComponent } from './core/layouts/components/edit-student/edit-student.component';

const routes: Routes = [
  {path: '', component:AllStudentsComponents},
  {path: 'addStudent', component:AddStudentComponent},
  {path: 'editStudent/:id', component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
