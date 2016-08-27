import { Component, Input } from '@angular/core';

// import service
import { PollCardService } from '../poll-card-component/poll-card.service';
import { Question } from '../models/Question';

@Component({
  moduleId: module.id,
  selector: 'poll-card',
  templateUrl: 'poll-card.component.html',
  styleUrls: ['poll-card.component.css'],
})
export class PollCard{
  
  @Input() pollCard: Question;
  // questionTitle = "Django, Ruby On Rails, or NodeJS?";
  // author = "First Last";
  // votes = 15;
  // comments= 38;
  imageRatio
  height

  ngOnInit(){
    this.imageRatio = 0.625;
  }
  ngAfterViewInit(){
     var width = document.querySelector(".card").offsetWidth
     console.log("width: "+width);
     this.height = width*this.imageRatio
     console.log("height: "+this.height)
  }
}