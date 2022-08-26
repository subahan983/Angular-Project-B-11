import {Routes} from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginComponent } from './login/login.component';
const routes:Routes=[
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'sender',
        component: SenderComponent
    },
    {
        path: 'receiver',
        component: ReceiverComponent
    },
    {
        path: 'transaction',
        component: TransactionComponent
    }
];
export default routes;