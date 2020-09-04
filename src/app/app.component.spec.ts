import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        HomeComponent
      ], imports: [
        HttpClientModule,
        RouterTestingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      ],
       providers: [
        SwUpdate
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
