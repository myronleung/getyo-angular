import { Component } from '@angular/core';

// import models
import { Question } from '../models/Question';

// import services
import { PollCardService } from '../poll-card-component/poll-card.service';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent{
  questions: Question[];

  constructor(private pollCardService: PollCardService){}

  ngOnInit(): void {
    this.getCardContent();
    // Macy.recalculate();
  }

  getCardContent(): void {
    this.questions=this.pollCardService.getCardContent(1)
  }

}