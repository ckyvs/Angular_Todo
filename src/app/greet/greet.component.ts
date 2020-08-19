import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  name=''
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('authenticated user');
    console.log(this.name)
  }

}
