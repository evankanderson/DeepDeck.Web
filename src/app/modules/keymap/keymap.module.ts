import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeymapRoutingModule } from './keymap.rounting';
import { KeymapComponent } from './pages/keymap.component';
import { SettingComponent } from './pages/setting/setting.component'; 
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    KeymapRoutingModule,
    SharedModule
  ],
  declarations: [
    KeymapComponent,
    SettingComponent
  ],
  providers: [
  ],
})
export class KeymapModule { }
