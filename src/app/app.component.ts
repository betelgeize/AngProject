import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './service';
import {User} from './user';

interface Passenger {
	id: number,
	fullname: string,
	checkedIn: boolean,
	//checkInDate: number|null
	checkInDate?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent implements OnInit {
  title = 'AngProject';
  title2: string;
  numberOne: number = 1;  
  numberTwo: number = 2;
  name: string = "Todd";
  name2: string = "otherText";
  logo: string = './assets/svg.png';
  userName: string;
  passengers: Passenger[] = [{
	  id:1,
	  fullname: 'Stev',
	  checkedIn: true
  }, {
	id:2,
	fullname: 'Rose',
	checkedIn: false
  }, {
	id:3,
	fullname: 'Phil',
	checkedIn: true
  }];
  users: User[]=[];

  constructor(private httpService: HttpService) {
	  this.title2 = 'UltimateAng2'
  }
  ngOnInit(){
	this.httpService.getUsers().subscribe(data => {
		this.users=data;
		console.log(this.users)
	});
  }

  handleBlur(event: any) {
	  this.name = event.target.value
  }
  
  handleInput(event: any) {
	this.name = event.target.value
}

	handleChange(value: string) {
	this.name2 = value
	}
	clickButton(event: any) {
		this.name = "motto";
		// this.name = event.target.value
	}

	handleClick (value: string) {
		console.log(value);
		this.name2 = value;
	}
}
