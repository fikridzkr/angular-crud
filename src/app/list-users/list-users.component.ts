import { Component } from '@angular/core';
import { ELEMENT_DATA } from '../helpers/elementData';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService],
})
export class ListUsersComponent {
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'actions'];
  dataSource: UserModel[] = [];
  loading: boolean = false;
  errorMessage: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  delete() {}

  private getUsers() {
    try {
      this.loading = true;
      this.errorMessage = '';
      this.userService.getUsers().subscribe(
        (response: any) => {
          console.log('response received');
          this.dataSource = response;
        },
        (error: any) => {
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = false;
        }
      );
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  }
}
