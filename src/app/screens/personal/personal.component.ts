import { Component } from '@angular/core';
import { PersonalService } from 'src/app/services/personal/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  constructor(private personal : PersonalService){}
  dataPersonal : any={}

  ngOnInit(){
    this.personal.getPersonal().subscribe(personal=>{
      this.dataPersonal=personal
    })
  }
}
