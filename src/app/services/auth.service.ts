import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResposeData } from "../models/AuthResponseData.model";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

 constructor(private http: HttpClient) {}
 
 public login(email: string, password: string) : Observable<AuthResposeData> {

  return this.http.post<AuthResposeData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,{email,password,returnSecureToken: true});
 }

 public formatUser(data: AuthResposeData) {
  
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn *1000)
    const user = new User(data.email, data.idToken, data.localId, expirationDate);

    return user;
 }

  public getErrorMessage(message: string){
   switch(message){
    case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
    case 'INVALID_PASSWORD':
        return 'Invalid Password'
    default:
        return 'Unknown error accured'
   }

 }

}