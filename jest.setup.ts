import 'jest-preset-angular';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import '@testing-library/jest-dom';
import { configure } from '@testing-library/angular';
import { AppRoutingModule } from './src/app/app-routing.module';
import { MaterialModule } from './src/app/material.module';

@NgModule({
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
  ],
})
export class TestingModule {}


configure({
  defaultImports: [TestingModule, AppRoutingModule, MaterialModule],
});

