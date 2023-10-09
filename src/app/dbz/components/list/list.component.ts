import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

/*Input: Define una propiedad que puede ser enviada desde el padre hacia el
componente hijo.*/
@Input()
public characterList: Character[] = [{
    name: 'Antonio Quinteros',
    transferencia: 8000
}]


//onDeleted = Index value : number
@Output()
public onDelete: EventEmitter<string> = new EventEmitter();


onDeleteCharacter(id?: string): void{
if (!id) return;
// console.log({id});
this.onDelete.emit (id);
}

}
