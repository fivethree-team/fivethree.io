import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { FivethreeCoreModule } from '@fivethree/core';

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
        TranslateModule.forChild(),
        FivethreeCoreModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        TeamComponent,
        FivethreeCoreModule
    ],
    providers: [],
})
export class ComponentsModule { }
