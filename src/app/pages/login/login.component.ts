import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { Login } from '../../interfaces/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private authService = inject(AuthService)
  private router = inject(Router)
  public formBuild = inject(FormBuilder)

  public form: FormGroup = this.formBuild.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })


  onSubmit() {

    if(this.form.invalid) return

    const objeto: Login = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.authService.login(objeto).subscribe({
      next: (data) => {
        if (data.isValidate) {
          localStorage.setItem('token', data.token)
          this.router.navigate(['home'])
        }else {
          alert('las credenciales son incorrectas')
        }
      }
    })
  }

}
