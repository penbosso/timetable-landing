import { AuthInterceptor } from './auth.intercerptor';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login',
        component: LoginComponent,
      canActivate: [AuthGuard]
      }
    ])
  ]
})
export class AuthModule { }
