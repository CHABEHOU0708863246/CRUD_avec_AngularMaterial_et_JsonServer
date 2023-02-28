import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/core/interfaces/students/student';
import { StudentsServiceService } from 'src/app/core/services/students/students-service.service';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponents implements OnInit {

  allStudentsSource: Student[] = []; //La variable 'allStudentSource' pour stocker les données de réponse de l’API.
  displayedCollumns: string[] = ['id','firstName', 'lastName', 'gender','age', 'email', 'profession', 'actions']; //La variable 'displayedColumns' pour enregistrer les colonnes que nous voulons afficher sur la table des matériaux. L’ordre des colonnes de la table des matériaux dépend de l’ordre dans lequel les colonnes sont enregistrées avec la variable 'displayColumns',

  constructor(private studentServices: StudentsServiceService,
              public dialog: MatDialog) {} //Injecté notre 'StudentServiceService'.


  //Le 'ngOnInit' est une méthode de cycle de vie angulaire qui s’exécute sur les rendus des composants. Donc, dans cette méthode, nous allons invoquer notre méthode 'get()'.
  ngOnInit(): void {
    this.get();
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allStudentsSource = this.allStudentsSource.filter(
          (_) => _.id !== id
        );
      }
    });
  }

  //Appel de l’appel d’API GET et de la réponse API stockés dans la variable 'allStudentsSource'
  get() {
    this.studentServices.get().subscribe((data) => {
      this.allStudentsSource = data; //AllStudentsSource est la variable qui enregistretoute les données
    })
  }


//excel button click functionality
exportAsExcelFile() {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.allStudentsSource);
  const workbook: XLSX.WorkBook = { Sheets: { 'allStudentsSource': worksheet }, SheetNames: ['allStudentsSource'] };
  XLSX.writeFile(workbook, 'allStudents.xlsx');
}


saveAsExcelFile(buffer: any, fileName: string): void {
  import("file-saver").then(FileSaver => {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  });
}

}
