import { ComponentFixture, TestBed, async } from '@angular/core/testing';

/* Component */
import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserSession } from 'src/app/model/userSession';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [UserService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Iniciar sesión', ()=> {
    const loginForm:UserSession = {
      username: "joel",
      password: "1234,"
    }
    expect(component.onSingIn(loginForm)).toEqual();
  })

});
