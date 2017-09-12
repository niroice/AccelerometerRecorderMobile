import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { NetworkPage } from '../../pages/network/network';
import { LogPage } from '../../pages/log/log';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

// Description: Uses ion-tab component to provide navigation between the three screens.
//              Setups the roots (navigation) for the pages.
// Parameters:  none
// Return:      none
export class TabsPage {
    
    private home:any = HomePage;
    private network:any = NetworkPage;
    private log:any = LogPage;
    
    constructor() {
        
        // do nothing
    }
}
