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
}