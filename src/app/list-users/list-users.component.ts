import {Component} from '@angular/core';
import { ELEMENT_DATA } from '../helpers/elementData';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'actions'];
  dataSource = ELEMENT_DATA;

  delete(){
    
  }
}
