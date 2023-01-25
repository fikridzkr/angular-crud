import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../helpers/customErrorStateMatcher';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

const emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
const nameFormControl = new FormControl('', [Validators.required]);
const phoneNumberFormControl = new FormControl('', [Validators.required]);
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
  providers: [UserService],
})
export class CreateUsersComponent {
  createUserForm = new FormGroup({
    emailFormControl: emailFormControl,
    nameFormControl: nameFormControl,
    phoneNumberFormControl: phoneNumberFormControl,
  });
  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, private router: Router) {}

  save(): void {
    const { emailFormControl, nameFormControl, phoneNumberFormControl } =
      this.createUserForm.value;
    const data = {
      id: Date.now(),
      name: nameFormControl!,
      email: emailFormControl!,
      phoneNumber: phoneNumberFormControl!,
    };
    this.userService.saveUsers(data).subscribe(
      (response: any) => {
        console.log('response received', response);
      },
      (error: any) => {
        console.error('Request failed with error', error);
      }
    );
    this.router.navigate(['/']);
    console.log(this.createUserForm.value);
    this.createUserForm.reset();
  }
}
