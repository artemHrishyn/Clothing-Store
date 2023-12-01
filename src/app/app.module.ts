import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionModule } from './services/firebase/connections/connection.module';
import { HttpClientModule } from '@angular/common/http';
import { MainBlockModule } from './components/main-block/main-block.module';
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ConnectionModule,
    MainBlockModule,
    ServicesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
