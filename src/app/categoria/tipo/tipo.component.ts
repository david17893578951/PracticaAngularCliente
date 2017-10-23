import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})

export class TipoComponent implements OnInit {
@Input() parametro:any;

  constructor() { }

  ngOnInit() {
    console.log(this.parametro);
    
  }

}
