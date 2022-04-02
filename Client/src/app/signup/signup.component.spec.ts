import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormServiceService } from '../form-service.service';

import { SignupComponent } from './signup.component';

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let FormServiceServiceStub = jasmine.createSpyObj(FormServiceService, ['saveData'])
  let service: FormServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),ReactiveFormsModule],
      providers: [{provide: FormServiceService, useValue: FormServiceServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const MockFormService = [];
    FormServiceServiceStub.saveData.and.returnValue(of(MockFormService));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Register method', () => {
    component.save();
  })

  it('Router navigate', (done: DoneFn) =>{
    component.msg = ""
    let router = {
      navigateByUrl: 
      jasmine.createSpy('navigateByUrl')
    }
    let form = {username : "user", email: "mail@mail.com", password: "1234", address: "Bhopal"}
    FormServiceServiceStub.saveData(form).subscribe(response => {
      expect(response).toEqual([])
      if(response==component.msg){
        
        router.navigateByUrl('/login')       
      } else
      alert(response);    
    })
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    done();
  })

});
