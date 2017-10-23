import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user/user.service';

import { ObservableService } from '../providers';
import { TODO } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public todos: TODO[];
  public urlTodos = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private userService:UserService, private http:ObservableService) { }

  ngOnInit() {
     this.todos = [];
     this.http.getUrlServicioGet(this.urlTodos)
     .subscribe(response => {
       console.log(response);
       this.todos = response.splice(0, 20);
     });
  }

}
