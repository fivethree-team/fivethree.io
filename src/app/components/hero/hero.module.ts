import { HeroComponent } from './hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeroComponent],
  providers: []
})
export class HeroModule {}
