import { Component } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const emailFormControl = new FormControl('', [Validators.required, Validators.email]);
const nameFormControl = new FormControl('', [Validators.required]);
const phoneNumberFormControl = new FormControl('', [Validators.required]);


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent {
  createUserForm = new FormGroup({
    emailFormControl : emailFormControl ,
    nameFormControl : nameFormControl ,
    phoneNumberFormControl : phoneNumberFormControl 
  })
  matcher = new MyErrorStateMatcher();

  save(): void {
    console.log(this.createUserForm.value)
    this.createUserForm.reset();
  }
}
