import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';


import { Subscription } from 'rxjs';


@Component({
    selector: 'app-public',
    templateUrl: 'public.component.html'
})

export class PublicComponent{

    showHeader : boolean; 
    showFooter : boolean; 

    subscriptions : Subscription

    constructor(private router: Router, activatedRoute: ActivatedRoute) {
        this.subscriptions = router.events.subscribe(event => {
            if(event instanceof NavigationEnd){
                console.log(event);
                const {showHeader = true, showFooter = true} = activatedRoute.firstChild.snapshot.data; 
                this.showHeader = showHeader;
                this.showFooter = showFooter;
            }
        })
    }

    
}

