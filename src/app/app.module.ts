import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { TakedataComponent } from './takedata/takedata.component';
import {FormsModule}from '@angular/forms';
import { HeaderComponent } from './header/header.component'
import {RouterModule,Routes} from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { DatasComponent } from './datas/datas.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SeeComponent } from './see/see.component';
import { EditComponent } from './edit/edit.component';
import {CalcService} from './calc.service';
import {HttpClientModule} from '@angular/common/http';
import {MsgService} from './msg.service'
//import {StorageServiceModule} from 'angular-webstorage-service'
import {ProductService} from './product.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
const approutes:Routes=[{path:"",component:LoginComponent},{path:"home",component:HomeComponent,children:[

  
{path:"new",component:AddComponent},
{path:"view",component:SeeComponent},
{path:"del",component:DeleteComponent},
{path:"edit",component:EditComponent},
{path:"abt/:cname/:loc",component:AboutComponent},
{path:"service",component:DatasComponent},
{path:"con",component:ContactComponent},

]}]
{}

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    CartComponent,
    LoginpageComponent,
    SignupComponent,
    TakedataComponent,
    HeaderComponent,
    AddComponent,
    DeleteComponent,
    DatasComponent,
    AboutComponent,
    ContactComponent,
    SeeComponent,
    EditComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(approutes),HttpClientModule
  ],
  providers: [CalcService ,MsgService,ProductService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
