import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormControlComponent} from "./form-control/form-control.component";
import {NavbarComponent} from './navbar/navbar.component';
import {PackageCreationComponent} from './package-creation/package-creation.component';
import {PackageCertificationComponent} from './package-certification/package-certification.component';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    NavbarComponent,
    PackageCreationComponent,
    PackageCertificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
