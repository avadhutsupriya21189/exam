import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PreviewComponent } from './preview/preview.component';
import { OrderHistoryComponent } from './order-history/order-history.component';


@NgModule({
  declarations: [PreviewComponent, OrderHistoryComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
