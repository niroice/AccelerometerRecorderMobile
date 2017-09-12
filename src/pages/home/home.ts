import { Component } from '@angular/core';
import { AccelerationLogbookService } from "../../service/accelerationlogbook.service";
import { PopoverController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// Description:    Allows the user to record the phones acceleration, provide record, stop and
//                 settings to adjust the record interval. Displays the current record
//                 to the screen (time,x,y,z axis). All results are save to the 
//                 accelerationlogbookservice object.
export class HomePage {
    
    constructor(public accelerationLogbook: AccelerationLogbookService, public popoverControl: PopoverController) {
            
        // do nothing
    }
    
    // Description: Calls the accelerationlogbook service to stop recording, sets the record
    //              button to enable and stop button to disabled.
    // Parameters:  none
    // Return:      none
    private stopButtonPressed(){
        
        var recordButton = <HTMLInputElement>document.getElementById('app-record-button');
        var stopButton = <HTMLInputElement>document.getElementById('app-stop-button');
        
        // disable stop button
        stopButton.disabled = true;
        
        // enable record button
        recordButton.disabled = false;
        
        // start recording
        this.accelerationLogbook.stopRecordingAcceleration();
    }
    
    // Description: Calls the accelerationlogbook service to start recording, sets the record
    //              button to disable and stop button to enable.
    // Parameters:  none
    // Return:      none
    private recordButtonPressed(){
        
        var recordButton = <HTMLInputElement>document.getElementById('app-record-button');
        var stopButton = <HTMLInputElement>document.getElementById('app-stop-button');
        
        // enable stop button
        stopButton.disabled = false;
        
        // disable record button
        recordButton.disabled = true;
        
        // start recording
        this.accelerationLogbook.startRecordingAcceleration();
    }
    
    // Description: Calls the popover object, to load the setting component to display
    //              interval recording options. Requies event object.
    // Parameters:  myEvent
    // Return:      none
    private showPopoverSettings(myEvent){
        
        // setup pop over event
        let popoverSetting = this.popoverControl.create(SettingsPage);
        
        // present the popover
        popoverSetting.present({
           ev: myEvent 
        });
        
    }
}
