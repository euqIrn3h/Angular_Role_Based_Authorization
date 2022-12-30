import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('access_token') as string;
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + token
            }
        });
        return next.handle(req);
    }
}