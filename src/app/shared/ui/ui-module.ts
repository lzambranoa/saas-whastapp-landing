import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button-component/button-component';
import { CardComponent } from './card/card.component/card.component';
import { SectionComponent } from './section/section.component/section.component';
import { InputComponent } from './input/input.component/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    SectionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    CardComponent,
    SectionComponent,
  ]
})
export class UiModule { }
