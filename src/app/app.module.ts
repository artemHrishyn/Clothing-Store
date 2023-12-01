import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionModule } from './services/firebase/connections/connection.module';
import { HttpClientModule } from '@angular/common/http';
import { MainBlockModule } from './components/main-block/main-block.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConnectionModule,
    MainBlockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
