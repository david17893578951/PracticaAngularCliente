import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: string;
@Input() parametro:string;
  constructor(private router: Router,private aroute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Detalle");
    this.aroute.params.subscribe(params => {
      this.id = params['id'];//el + mas convierte de cadena a entero
    });
  }



}
