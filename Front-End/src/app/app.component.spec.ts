import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { SummaryComponent } from './components/summary/summary.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { AddmealsComponent } from './components/addmeals/addmeals.component';
import { FoodsearchComponent } from './components/foodsearch/foodsearch.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { UserService } from './services/user.service';
import { FoodInfoService } from './services/food-info.service';
import { GraphService } from './services/graph.service';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        DashboardComponent,
        NavComponent,
        LandingComponent,
        SummaryComponent,
        GraphsComponent,
        AddmealsComponent,
        FoodsearchComponent,
        FooterComponent
        
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule.forRoot(),
        NgxMyDatePickerModule.forRoot(),
      ],
      providers: [ UserService, FoodInfoService, GraphService, {provide: APP_BASE_HREF, useValue: '/'}],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
