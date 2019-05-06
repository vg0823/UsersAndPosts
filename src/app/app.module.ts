import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { MatTabsModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
  	RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
