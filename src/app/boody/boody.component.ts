import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-boody',
  templateUrl: './boody.component.html',
  styleUrls: ['./boody.component.css']
})

export class BoodyComponent implements OnInit {

  public groupStar: Array<any> = new Array();

	public url:string;

  public comprimento: number = 0;

  getStar(nome: string){

    this.comprimento = 0;

    this.groupStar.splice(0, this.groupStar.length);

    this.url = "https://swapi.co/api/people/?search=" + nome;

    this.starService.buscarStar(this.url).subscribe( dados => {
      
      dados = dados.results.map( star => {

        if(this.comprimento <= 6){
          
          let opt: any = star.url.replace( /[^0-9]/g , "")
          
          let starWars = {    
            nome: star.name,
            url: opt,
            genero: star.gender,
            corCabelo: star.hair_color,           
            corOlho: star.eye_color
          }

           this.groupStar.push(starWars);
           this.comprimento++;   
        }
      })
    })  
  }

  constructor(private starService: ApiServiceService) {
    
  }

  ngOnInit() {

  }
  
}
