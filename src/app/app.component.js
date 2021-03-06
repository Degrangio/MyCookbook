"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Recipe = (function () {
    function Recipe() {
    }
    return Recipe;
}());
exports.Recipe = Recipe;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Gios Cookbook';
        this.recipe = { id: 1, name: 'Adobo Lemon Porkchops' };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>{{recipe.name}}</h2>\n    <div>\n\t<label>name: </label>\n    \t<input [(ngModel)]=\"recipe.name\" placeholder=\"name\">\n    </div>\n",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map