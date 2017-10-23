import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { ObservableService } from '../../providers';
import { Persona } from '../models';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.css']
})
export class Modulo1Component implements OnInit {

  public personas: Persona[];

  public usuarios: any = [{
    id: "12",
    name:"david",
    username: "Flores",
    email: "kjnkjnkj",
  }];
  public usuario: any;

  public urlPersonas = 'https://jsonplaceholder.typicode.com/users';
  constructor(private userService: UserService, private http: ObservableService) { }
  public persons: Persona;
  ngOnInit() {
    this.personas = [];
    this.http.getUrlServicioGet(this.urlPersonas)
      .subscribe(response => {
       
        this.personas = response.splice(0, 20);
         console.log(response);
      });
      this.usuario={};
  }

  public createUsuario() {
    //console.log(this.personas);
     //console.log(this.usuario);
    this.usuarios.unshift(this.usuario);
    this.usuario = {};
  }

  public setUsuario(usuario) {
    // console.log(pais);
    this.usuario = usuario;
  }

  public editarUsuario(id) {
    //console.log(this.personas);
     //console.log(this.usuario);
    this.usuarios.unshift(this.usuario);
    this.usuario = {};
  }

   public eliminarUsuario() {
    // let i in 
    //console.log(this.personas);
    //console.log(this.usuario);
    this.usuarios.splice(this.usuario.id,1);
    this.usuario = {};
  }
}
