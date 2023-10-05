import { Component } from '@angular/core';

@Component({

  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name: string = 'chincheman';
public age : number = 45 ;

//Getters y Setters
get capitalizedName(): string {
  return this.name.toUpperCase();
}

//metodo
getHeroDescription() :string {
  return `${ this.name} - ${ this.age}`;
}

//Metodo para Cambiar nombre del Heroe
changeHero ():void {
 this.name = 'LaraMan'
}

//metodo para cambiar la edad
changeAge ():void {
 this.age = 32;
}

resetForm ():void {
this.name = 'ChincheMan'
this.age = 45;
}

}
