import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../helpers/customErrorStateMatcher';
import { ActivatedRoute } from '@angular/router';

const emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
const nameFormControl = new FormControl('', [Validators.required]);
const phoneNumberFormControl = new FormControl('', [Validators.required]);
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css'],
})
export class EditUsersComponent {
  constructor(private route: ActivatedRoute) {}

  editUserForm = new FormGroup({
    emailFormControl: emailFormControl,
    nameFormControl: nameFormControl,
    phoneNumberFormControl: phoneNumberFormControl,
  });
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.findOne(this.route.snapshot.params['id']);
  }

  findOne(id:number) {
    console.log(id)
  }

  edit() {
    this.editUserForm.reset();
  }
}
