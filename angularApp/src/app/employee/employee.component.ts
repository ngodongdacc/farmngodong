import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../employeeService/employee.service';
import { Employee } from '../employeeService/employee.model';
declare var M : any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployee();
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }

    this.employeeService.selectedEmployee = {
      _id : "",
      name: "",
      position: "",
      office: "",
      saraly: null
    }      
  }

  onSubmit(form: NgForm){
    if(form.value._id == ""){
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.refreshEmployee();
        this.resetForm(form);
        M.toast({html: 'create successfully', classes: 'rounded'});
      } );
    }else{
      this.employeeService.putEmployee(form.value).subscribe((res)=>{
        this.refreshEmployee();
        this.resetForm(form);
        M.toast({html: 'Update successfully', classes: 'rounded'});
      });
    }
    
  }

  refreshEmployee(){
    this.employeeService.getEmployee().subscribe( (res) =>{
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee){
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(emp: Employee){
    if( confirm('bạn có chắc chắn muốn xóa ') == true){
     
      this.employeeService.deleteEmployee(emp).subscribe( (res)=>{
        this.refreshEmployee();
        M.toast({html: 'Delete successfully', classes: 'rounded'});
      });
    }
    
  }
}
