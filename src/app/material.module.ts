import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [MatButtonModule, MatIconModule, MatToolbarModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
