import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../service/public.service';


@Component({
  selector: 'app-card-perros',
  templateUrl: './card-perros.component.html',
  styleUrls: ['./card-perros.component.css']
})
export class CardPerrosComponent implements OnInit {
  perros: [] = []; 
  constructor( private publicservice: PublicService) {}

  async ngOnInit() {
    //Promise Con Url Rick and Morty
    const characters: any = await this.publicservice.getAll();
    console.log(characters);

    this.perros = characters.results; 

  }

  

}
