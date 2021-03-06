import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Department } from '../../_class/Departments/Department';

@Injectable({
  providedIn: 'root'
})
export class ProjectWorkService {

  /*START: DEPARTMENT DATA*/

  public selectedDepartment!: Department;
  public DepartmentSubject = new Subject<Department>();
  private DepartmentSubjectSource = new BehaviorSubject(this.selectedDepartment);
  currentDepartment = this.DepartmentSubjectSource.asObservable();
  changeDepartment(department: Department) {

    this.DepartmentSubjectSource.next(department);

  }


/*END: DEPARTMENT DATA*/
}
