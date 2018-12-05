import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        TeamComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule.forChild()],
    exports: [
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        TeamComponent
    ],
    providers: [],
})
export class ComponentsModule { }
