import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { SelectBusService } from './user/services/selectBus.service';
import { UserFormComponent } from './user/user-form/user-form.component';
import { BookingService } from './user/services/booking.service';
import { UserService } from './user/services/user.service';
import { PrintComponent } from './user/print/print.component';
import { ServComponent } from './user/serv/serv.component';
import { PortfolioComponent } from './user/portfolio/portfolio.component';
import { ContactComponent } from './user/contact/contact.component';
import { AboutComponent } from './user/about/about.component';
import { SubscribeComponent } from './user/subscribe/subscribe.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FooterComponent } from './user/footer/footer.component';
import { SignupComponent } from './admin/signup/signup.component';


const userRoute:Routes=[
{path:'',component:SelectBusComponent},
{path:'search',component:BusSearchResultComponent},
{path:'user-form',component:UserFormComponent},
{path:'print',component:PrintComponent},
{path:'serv',component:ServComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'login',component:LoginComponent },
{path:'signup',component:SignupComponent },
{path:'dashboard',component:DashboardComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    SelectBusComponent,
    SelectSeatComponent,
    BusSearchResultComponent,
    UserFormComponent,
    PrintComponent,
    ServComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    SubscribeComponent,
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(userRoute),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    SelectBusService,
    BookingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
