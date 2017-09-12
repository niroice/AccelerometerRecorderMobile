import { Component } from '@angular/core';
import { AccelerationLogbookService } from "../../service/accelerationlogbook.service";

@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})

// Description: Displays all the log results in the accelerationLogbookservice, if
//              no result are present, it displays a message saying no results. Provides a button
//              to clear the logbook results from the logbook service and clear the screen of results.
export class LogPage {

    constructor(private accelerationLogbook: AccelerationLogbookService) {
        
        // do nothing
    }
}
