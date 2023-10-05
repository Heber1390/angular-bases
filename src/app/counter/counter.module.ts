import { NgModule } from "@angular/core";
import { CounterComponet } from "./componets/counter/counter.component";



@NgModule({
declarations : [
  CounterComponet
],
exports: [
  CounterComponet
]
})
export class CounterModule {}
