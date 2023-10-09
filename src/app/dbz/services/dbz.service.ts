import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //propiedad publica
  public characters:Character[] = [{
    id            : uuid(),
    name          : 'Krillin',
    transferencia : 1000
    },{
      id            : uuid(),
      name          : 'Goku',
      transferencia : 2000
    },{
      id            : uuid(),
      name          : 'Camello',
      transferencia : 7000
    },{
      id            : uuid(),
      name          : 'Richard',
      transferencia : 2000
    }];

    //cuando hay un nuevo personaje
    addCharacter (  character: Character ): void {

      //le asigna un nuevo id al personaje creado
const newCharacter: Character = { id : uuid(), ...character }

      this.characters.push (newCharacter);
    }

    //eliminar el personaje
    // onDeleteCharacter (index: number ){
    // this.characters.splice(index, 1);
    // }

    deleteCharacterById (id: string){
   this.characters = this.characters.filter (Character => Character.id !== id);
    }


}
