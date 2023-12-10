import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { PagesModule } from './pages/pages.module';
import { MainBlockModule } from './components/main-block/main-block.module';
import { PipesModule } from './pipe/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    MainBlockModule,
    PagesModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
