import {Component} from '@angular/core';
import { UserModel } from '../models/user.model';



const ELEMENT_DATA: UserModel[] = [
  {name: 'Hydrogen', email: 'mantap@mantap.com', phoneNumber: '0899123456'},
];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'actions'];
  dataSource = ELEMENT_DATA;
}
