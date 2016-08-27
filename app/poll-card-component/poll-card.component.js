"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Question_1 = require('../models/Question');
var PollCard = (function () {
    function PollCard() {
    }
    PollCard.prototype.ngOnInit = function () {
        this.imageRatio = 0.625;
    };
    PollCard.prototype.ngAfterViewInit = function () {
        var width = document.querySelector(".card").offsetWidth;
        console.log("width: " + width);
        this.height = width * this.imageRatio;
        console.log("height: " + this.height);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Question_1.Question)
    ], PollCard.prototype, "pollCard", void 0);
    PollCard = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poll-card',
            templateUrl: 'poll-card.component.html',
            styleUrls: ['poll-card.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], PollCard);
    return PollCard;
}());
exports.PollCard = PollCard;
//# sourceMappingURL=poll-card.component.js.map