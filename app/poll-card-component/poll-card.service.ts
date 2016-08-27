import { Injectable } from '@angular/core';

import { Question } from '../models/Question';

// Import mock data
import { QUESTIONS } from '../mock_files/mock-questions';

@Injectable()
export class PollCardService {
  getCardContent(id): Question[] {
    // var index = -1;
    // for(var i = 0, len = QUESTIONS.length; i < len; i++) {
    //   if (QUESTIONS[i].id === id) {
    //     index = i;
    //     break;
    //   }
    // }
    // if (index > -1){
    //   return QUESTIONS[index];
    // } else {
    //   return null;
    // }
    return QUESTIONS;
  }
}