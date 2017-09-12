import { Component } from '@angular/core';
import { AccelerationLogbookService } from "../../service/accelerationlogbook.service";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

// Description: Used as a popover that provides a range select for record interval time,
//              user selected time is saved to the Acceleration LogBook Service. Ranges
//              from 1 second to 60 seconds is allowed.
// Parameters:  accelerationLogBook
// Return:      none
export class SettingsPage {
    
    constructor(public accelerationLogBook : AccelerationLogbookService) {
            
        // do noting
    }
}
