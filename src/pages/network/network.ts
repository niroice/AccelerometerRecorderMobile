import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})

// Description: Displays the phones current network status to the screen, updates
//              automatically when the service changes. Uses cordova network plugin.
export class NetworkPage {
 
    private networkSubscription: any; // networks subscription details are stored here
    private currentNetwork:string = ""; // current network status is stored here
    
    // used to compare network code from "Network" object and displayed desired text on
    // the screen
    private networkTypes:any[] = [
                                    {id:"wifi", text:"Wifi"},
                                    {id:"2g", text:"2G"},
                                    {id:"3g", text:"3G"},
                                    {id:"4g", text:"4G"},
                                    {id:"cellular", text:"Cellular"},
                                    {id:"none", text:"No Connection"},
                                    {id:"unknown", text:"Unknown"},
                                 ];

    // Description: Gets the phones current network status and displays on screen.
    //              Creates an eventlistener for network status change and calls
    //              function to update the screen. Uses cordova network plugin.
    // Parameters:  Network
    // Return:      none
    constructor(private network: Network) {
        
        // used as reference to the class, as scope of this changes on subscribe
        // as its an event listener
        let _this = this; 
        
        // get the current network type and display on the screen
        this.currentNetwork = network.type;
        
        // create an eventlisener for when network status changes and update screen
        this.networkSubscription = this.network.onchange().subscribe(data => { 
            
            _this.displayNetworkStatus(network.type, _this);
        },
            // write an error to console if problem found       
            error => console.error("error disconnected"));
    }
    
    
    // Description: Loops through brought in network code and looks for a match,
    //              when found displays message to the screen. Requires reference
    //              to the class due to being called by eventlisner.
    // Parameters:  networkType, _this
    // Return:      none
    private displayNetworkStatus(networkType:string, _this:any){

        // loop through network types and find a match
        for (let i:number = 0; i < this.networkTypes.length; i++){
            
            // if network status code matches write to message to screen
            if (networkType == this.networkTypes[i].id){
                
                _this.currentNetwork = this.networkTypes[i].text;
                
                // manually adding to inner html -> one-way binding not working
                // only updates on page refresh.
                document.getElementById("app-networkstatus-container").innerHTML =
                    _this.currentNetwork;
                
                break;
            }
        }
    }
}
