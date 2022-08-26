import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TransactionComponent } from './transaction/transaction.component';
import { Routes } from '@angular/router';
import appRoutes from './routerConfig';
import { LoginComponent } from './login/login.component';
import { SuccessFileComponent } from './success-file/success-file.component';

const routes: Routes=[
  {path: 'login',component: LoginComponent},
  {path: 'sender', component:SenderComponent },
  {path: 'receiver', component:ReceiverComponent },
  {path: 'transaction', component:TransactionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SenderComponent,
    ReceiverComponent,
    TransactionComponent,
    SuccessFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
