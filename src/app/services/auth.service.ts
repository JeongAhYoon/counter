import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResposeData } from "../models/AuthResponseData.model";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { AppState } from "../store/app.state";
import { Store } from "@ngrx/store";
import { autoLogout } from "../auth/state/auth.actions";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

public timeoutInterval: any

 constructor(private http: HttpClient, private store:Store<AppState>) {}
 
 public login(email: string, password: string) : Observable<AuthResposeData> {

  return this.http.post<AuthResposeData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,{email,password,returnSecureToken: true});
 }

 public signUp(email: string, password: string): Observable<AuthResposeData>{
    
    return this.http.post<AuthResposeData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,{email,password,returnSecureToken: true});
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
        return 'Invalid Password';
    case 'EMAIL_EXISTS':
        return 'Email already Exist';
    default:
        return 'Unknown error accured';
   }
 }



 public setUserInLocalStorage(user: User) {
    localStorage.setItem("userData", JSON.stringify(user));
   this.runTimeInterval(user);
 }

public runTimeInterval(user: User) {
   
  const currentTIme = new Date().getTime();
    const expirationTime = user.expireDate.getTime();
    const interval = expirationTime - currentTIme;
    this.timeoutInterval = setTimeout( () => {
            this.store.dispatch(autoLogout());
        }, interval
    ); 
}

 public getUserFromLocalStorage() {
    const data = localStorage.getItem("userData");
    if (data)
    {
        
        const parsedData = JSON.parse(data)
        const user = new User(parsedData.email, parsedData.token, parsedData.localId, new Date(parsedData.expirationDate));
    this.runTimeInterval(user);
    return user;
    }       
        return null; 
 }

public logout() {
    localStorage.removeItem('userData');
    if(this.timeoutInterval) {
        clearTimeout(this.timeoutInterval);
        this.timeoutInterval = null;
    }
}

}