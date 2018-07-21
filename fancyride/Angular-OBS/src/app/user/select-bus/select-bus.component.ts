import { Component, OnInit } from '@angular/core';
import { SelectBusService } from '../services/selectBus.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Journey_Route } from '../models/route.model';

@Component({
  selector: '.select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})
export class SelectBusComponent implements OnInit {
// ={
//   1109001:'comilla',
//   1109002:'Chittagong',
//   1109003:'Sylet',
//   1109004:'Barisal'
// }

pnumber=1;

place:Place[]=[];

  constructor(
    private BusService:SelectBusService,
    private router:Router
  ) {
   this.place[0]=new Place()
   }

  ngOnInit() {
 
  }



  SearchBus(form: NgForm) {
    let leaving_form = form.value.leaving_form;
    let destination;
   
  
    this.place.filter(iteam=>{
      if(iteam.key==form.value.going_to){
        destination=iteam.value
      }
    })

    let date = form.value.depart_date;
    let route:Journey_Route = {
      leaving_form: leaving_form,
      going_to: destination,
      date:date
    }
    localStorage.setItem("route", JSON.stringify(route))
    let routeId = form.value.going_to;
    var val = this.BusService.getRoueId(routeId);
    console.log(val);
    this.router.navigate(['search']);
  }

  leave(e){
 
    let leavingfrom=e.target.value;
    console.log(leavingfrom)
    if(leavingfrom=='Buea'){
      this.place= [
        {key:'01', value:'Douala'} ,
        {key:'02', value:'Yaounde'} ,
        {key:'04', value:'Bamenda'} ,
        {key:'05', value:'Limbe'},
        {key:'06', value:'Mamfe'} 
 
      ]
  }
  else if(leavingfrom=='Yaounde'){
   this.place= [
        {key:'01', value:'Douala'} ,
        {key:'07', value:'Buea'} ,
        {key:'04', value:'Bamenda'} ,
        {key:'05', value:'Limbe'},
        {key:'06', value:'Mamfe'} 
 
      ]
  }
   else if(leavingfrom=='Douala'){
   this.place= [
        {key:'02', value:'Yaounde'} ,
        {key:'07', value:'Buea'} ,
        {key:'04', value:'Bamenda'} ,
        {key:'05', value:'Limbe'},
        {key:'06', value:'Mamfe'} 
 
      ]
  }
   else if(leavingfrom=='Bamenda'){
   this.place= [
        {key:'01', value:'Douala'} ,
        {key:'07', value:'Buea'} ,
        {key:'02', value:'Yaounde'} ,
        {key:'05', value:'Limbe'},
        {key:'06', value:'Mamfe'} 
 
      ]
  }
   else if(leavingfrom=='Limbe'){
   this.place= [
        {key:'1109001', value:'Douala'} ,
        {key:'1109007', value:'Buea'} ,
        {key:'1109004', value:'Bamenda'} ,
        {key:'1109002', value:'Yaounde'},
        {key:'1109006', value:'Manfe'} 
 
      ]
  }
   else if(leavingfrom=='Manfe'){
   this.place= [
        {key:'1109001', value:'Douala'} ,
        {key:'1109007', value:'Buea'} ,
        {key:'1109004', value:'Bamenda'} ,
        {key:'1109005', value:'Limbe'},
        {key:'1109002', value:'Yaounde'} 
 
      ]
  }

}


}
export class Place {
  key:string;
  value:string;
}