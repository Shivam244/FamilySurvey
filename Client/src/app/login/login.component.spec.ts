import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { of, throwError } from 'rxjs';
import { Form } from '../model/Form';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let FormServiceServiceStub = jasmine.createSpyObj('FormServiceService', ['getData'])
  let httpTestingController: HttpTestingController;
  let service: FormServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),ReactiveFormsModule]
      // providers: [{provide: FormServiceService, useValue: FormServiceServiceStub},    
    })
    .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    

  });

  beforeEach(inject(
    [FormServiceService], 
    (formService: FormServiceService) => {
      service = formService;
    }
  ))

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Login method',() => {
  //   component.getData();
  // });

  it('Method service',() => { 
    FormServiceServiceStub.getData.and.returnValue(throwError({ error: 'some error'}));
    component.getData();
  });

  // it('Router navigate', () =>{
  //   let router = {
  //     navigate: 
  //     jasmine.createSpy('navigate')
  //   }
  //   expect(router.navigate).toHaveBeenCalledOnceWith('/survey');
  // })
  
});
