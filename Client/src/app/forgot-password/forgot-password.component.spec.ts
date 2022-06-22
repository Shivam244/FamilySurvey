import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormServiceService } from '../form-service.service';

import { ForgotPasswordComponent } from './forgot-password.component';

fdescribe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let FormServiceServiceStub = jasmine.createSpyObj(FormServiceService, ['resetPassword'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),ReactiveFormsModule, FormsModule],
      providers: [{provide: FormServiceService, useValue: FormServiceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const MockFormService = [];
    FormServiceServiceStub.resetPassword.and.returnValue(of(MockFormService));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reset password method', () => {
    component.resetPassword();
  });
});
