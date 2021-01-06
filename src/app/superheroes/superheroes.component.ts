import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  listaSuperheroes: any;
  listaAux: any;
  nombre: string
  public errorApi = false;

  constructor(private service: ServiceService) { 
    
  }

  /**
   * metodo que se encarga de filtrar los superheroes por su nombre
   */
  Search() {

    if (this.nombre != "") {

      this.listaSuperheroes = this.listaAux.filter(res => {
        return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());

      });
      
    }
      if (this.nombre == "") {
      this.ngOnInit();
      
    }  
  }

  ngOnInit(): void {
    this.service.obtenerSuperheroes(true).subscribe(resp => {
      this.listaSuperheroes = resp.data;
      this.listaAux = resp.data;
      this.errorApi = false;
    }, (error) => {
        this.errorApi = true; 
    });
    
  }

}
