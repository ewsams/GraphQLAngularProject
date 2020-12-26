import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendAuthenticationComponent } from './frontend-authentication.component';

describe('FrontendAuthenticationComponent', () => {
  let component: FrontendAuthenticationComponent;
  let fixture: ComponentFixture<FrontendAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
