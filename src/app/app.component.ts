import { Component } from '@angular/core';

export class Recipe {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{recipe.name}}</h2>
    <div>
	<label>name: </label>
    	<input [(ngModel)]="recipe.name" placeholder="name">
    </div>
`,
})
export class AppComponent  
{ 
  title = 'Gios Cookbook';
  recipe: Recipe = {id: 1, name: 'Adobo Lemon Porkchops'};
}
