import {Injectable} from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from "@ionic-native/device-motion";

@Injectable()

// Description: Service provides functionality to log a phones acceleration. Provides Recording,
//              stop recoding, recording interval selection and clear log functionaily. Returns 
//              a log of the results as well as the current records details such as interval time, x,y //              and z axises. 
export class AccelerationLogbookService {
    
    private subscription: any; // object that discribes to motion service, allows you to unsubscribe
    
    // logs will be store in array of objects
    private accelerationLog: any[] = [];
    
    // used to tell if there are logs in the object
    private resultsInLog:boolean = false; 
    
    private recordingTime:number = 0; // time the recoding has been going for
    public recordIntervalSeconds:number = 60; // recording interval time - default 60 seconds
    
    // stores the latest recordings information
    private latestX: number;
    private latestY: number;
    private latestZ: number;

    
    // Description: Creates the Acceleration Service. Requires Motion plugin
    // Parameters:  deviceMotion
    // Return:      none
    constructor(private deviceMotion: DeviceMotion) {
    
        // does nothing
    }
    
    // Description: Returns the latest interval time recorded
    // Parameters:  none
    // Return:      number
    public getLatestRecordTime():number{
        return this.recordingTime;
    }
    
    // Description: Returns the latest X axis value recorded
    // Parameters:  none
    // Return:      number
    public getLatestRecordX():number{
        return this.latestX;
    }
    
    // Description: Returns the latest Y axis value recorded
    // Parameters:  none
    // Return:      number
    public getLatestRecordY():number{
        return this.latestY;
    }
    
    // Description: Returns the latest Z axis value recorded
    // Parameters:  none
    // Return:      number
    public getLatestRecordZ():number{
        return this.latestZ;
    }
    
    // Description: Returns the full list of recorded axis. If not exits returns false.
    // Parameters:  none
    // Return:      any
    public getAccelerationLog():any{
    
        if (typeof this.accelerationLog != "undefined" && this.accelerationLog != null
            && this.accelerationLog.length != null && this.accelerationLog.length > 0){
        
            return this.accelerationLog; // return the log
        }
        else{
            
            return false; // return false boolean no results present
        }
        
    }
    
    // Description: Stops recording the phones acceleration
    // Parameters:  none
    // Return:      none
    public stopRecordingAcceleration(){
        
        // remove the event listener on the phone accelermeter
        this.subscription.unsubscribe();
        
    }
    
    // Description: Deletes the log of the phones acceleration, resets the
    //              recording time
    // Parameters:  none
    // Return:      none
    public deleteAccelerationLog(){
        
        // set results in log to false
        this.resultsInLog = false;
        
        // remove value for acceleration log array
        this.accelerationLog = [];
        
        // set current axis to zero
        this.latestX = 0;
        this.latestY = 0;
        this.latestZ = 0;
        
        // reset the record time
        this.recordingTime = 0;
    }
    
    
    // Description: Returns boolean value of wether there is log
    //              results currently in the object. True = yes, false = no
    // Parameters:  none
    // Return:      boolean
    public resultsInLogCheck():boolean{
        
        return this.resultsInLog;
    }
    
    // Description: Starts recording the phones acceleration. Stores the current interval time,
    //              x,y and z axis values into object that is stored in array (accelerationLog).
    //              Requires the use of MotionDevice Plugin.
    // Parameters:  none
    // Return:      none
     public startRecordingAcceleration(){

        // set interval time in milliseconds instead of seconds
        let recordIntervalMilliseconds = this.recordIntervalSeconds * 1000; 

        let _this =  this;// used to reference the class for the eventlisners
    
        // create frequency object to pass in with event listener
        let frequencyObject= {frequency: recordIntervalMilliseconds};
        
        // create event lisner to retrieve the phone acceleration on x,y,z axis, every
        // set interval of seconds and save
        this.subscription = this.deviceMotion.watchAcceleration(frequencyObject).subscribe(
        (acceleration: DeviceMotionAccelerationData) => {
            
            // increase the recorded time by the set interval time
            _this.recordingTime += _this.recordIntervalSeconds;
    
            // setting the current attributes so it displays on the homepage
            _this.latestX = acceleration.x;
            _this.latestY = acceleration.y;
            _this.latestZ = acceleration.z;
            
            // add the recording to the logbook array
            _this.accelerationLog.push({time: _this.recordingTime, x: _this.latestX, y: _this.latestY, z: _this.latestZ });
            
            if (!_this.resultsInLog){
                // set results in log to true
                _this.resultsInLog = true;
            }
        });
    }
}