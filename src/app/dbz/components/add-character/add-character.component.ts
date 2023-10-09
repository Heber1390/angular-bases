import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {
//Instancia de un emisor de eventos
@Output()
public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {
    name         : '',
    transferencia: 0
  };

  //Metodo para mandar el caracter
  emitCharacter (): void {

//debugger; //detiene la app para poder ver y depurar la app

    console.log(this.character);
//validamos si esta vacio
if ( this.character.name.length === 0 ) return;

//en caso de que no este vacio, se manda el objeto
this.onNewCharacter.emit(this.character);

// metodo para limpiar el caracter
this.character = {name: '', transferencia:0};
  }

}
