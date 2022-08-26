import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'receiver',component: ReceiverComponent},
  {path: 'transaction',component: TransactionComponent},
  {path: 'sender',component: SenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
