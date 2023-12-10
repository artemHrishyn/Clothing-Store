import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { DataCollectionsService } from './data-collections.service';
import { ConnectionModule } from './connections/connection.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ConnectionModule,
    ApiService,
    DataCollectionsService,
    DataService
  ]
})
export class FirebaseModule { }
