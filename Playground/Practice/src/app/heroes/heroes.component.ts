import { Component } from '@angular/core';
import { Heroes } from '../models/heroes';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Heroes = {
    id: 101,
    name: "Bosdu"
  };
}
