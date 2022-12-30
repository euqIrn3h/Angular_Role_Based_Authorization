import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminSecretService {

  endpoint: string = 'https://localhost:7181/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router, public authservice: AuthService) { }

  getSecret() {
    return this.http.get(this.endpoint+"/register").pipe(catchError(this.authservice.handleError));
  }
}
