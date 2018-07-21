import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bus } from "../models/bus.model";
import {BehaviorSubject} from 'rxjs'

@Injectable()

export class SelectBusService {
    //private Root_url = "https://bdbusticket.firebaseio.com/";
    private Root_url = "http://localhost/busreserver/api/web/v1/journeys/root";

    private routeId= new BehaviorSubject <string> (''); 
    castId=this.routeId.asObservable();
    
    constructor(
        private http: HttpClient,
    ) { }

    getBus(routeId) {
       return this.http.get(this.Root_url);
       
    }
    
    getData() {
       return this.http.get(this.Root_url + 'buses/');
    }

    getRoueId(routeId){
        this.routeId.next(routeId);
    }


    getFillupseat(key,busID){
        
       return this.http.get(this.Root_url);
        //console.log(this.Root_url+'booking/'+key+'/'+busID+'.json');
    }

    getRoute(key){
        return  this.http.get(this.Root_url+'routes/'+key+'.json');
    }
}
