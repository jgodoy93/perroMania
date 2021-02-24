import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perroManiaApp';
}

//Inspeccion de Rutas para decidir si renderizar o no componentes
/*

import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';

//ActivatedRoute: Nos da los parametros y la info de la ruta actual 
//NavigationEnd: (evento) nos informa cuando fue resuelta la promise del ruteo
//Router: informacion de rutas

export class AppComponent {
  title = 'perroManiaApp';
  showHeader = boolean; //Defino la propiedad showHeader
  showFooter = boolean; //OtraProp
  //Recordar que no se puede usar async y await dentro del contructor, xq este se instancia una sola vez,
  //para resolver la promesa dentro del contructor se usa Observer

  subscriptions : Subscription //objeto al cual le cargo la resolucion de la promise
  constructor(private: router: Router, activatedRoute: ActivatedRoute){

  //resuelvo la promise con un callback () => {}
    this.subscriptions = router.events.subscribe(event => {
      
      if(event instanceof NavigationEnd){

        const {showHeader = true, showFooter = true} = activatedRoute.firstChild.snapshot.data;
        this.showHeader = showHeader;
        this.showFooter = showFooter;

      }

      
      //event (promise) -> es un objeto que tiene un conjunto de elementos que definen su estado (NavigationStart,NavigationEnd, NavigationError)
      //con .subscribe() -> genero un Observable que ve los estados en los cuales se esta resolviendo la promise
      //entonces if(event instanceof NavigationEnd) == true -> esto me esta diciendo que el objeto event se creo a partir
        de la instancia NavigationEnd, por lo tanto la promesa esta resuelta con ese estado
      
      //(showHeader = true) -> dejo por defecto que el elemento header se este mostrando para no tener que repetir esta orden dentro del routing
      //activatedRoute.firstChild.snapshot.data -> entro dentro del los parametros de la ruta para poder modificarlos
      //this.showHeader = showHeader -> igualo los parametros a la variable que instancie al principio para que pueda Modificarlos

      //Dentro de Routing
      {
        path: '/rutaEjemplo' //nombre de la ruta
        loadChildren: rutaModulo //Modulo que renderizo
        data: { showHeader: false , showFooter = false } -> desde aca seteo si quiero que se renderice ese componente
        //en este caso no se rendiriza ni el footer ni el header 
      }
      
      {
        path: '/rutaEjemplo' //nombre de la ruta
        loadChildren: rutaModulo //Modulo que renderizo
        //si no digo nada, por defecto el componente se renderiza debido al (showHeader = true) que use en el ts
      }

      //Dentro del Html del Modulo
      <app-header *ngIf="showHeader"></app-header>
      <router-outlet></router-outlet>
      <app-footer *ngIf="showFooter"></app-footer>


    })

  }
}
*/