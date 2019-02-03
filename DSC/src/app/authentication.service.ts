import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, catchError} from 'rxjs/operators';
import { LooUser } from './looUser';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

interface LoginOutput{
 id: string,
 ttl:number,
 created:string,
 userId: string
}


@Injectable()
export class AuthenticationService {

  private userUrl= environment.apiBaseUrl+'/api/loousers';

  constructor(private http: HttpClient,private router:Router) { }


  register(looUser:LooUser):Observable<any>{
    return this.http.post<LooUser>(this.userUrl, looUser,httpOptions).pipe(
      map((looUser:LooUser)=>{
        debugger
        console.log('Created user with id ='+looUser.id);
        localStorage.setItem('currentUser',looUser.id);
        localStorage.setItem('username',looUser.username);
        //localStorage.setItem('accessToken',loginOutput.id);
        alert('Successfully Registered With Username\n' + looUser.username + '\nPlease log-in');
        this.router.navigate(['/check-loo']);
      }),
      catchError(this.handleError<LooUser>('registerUser'))
    );

  }

  login(looUser:LooUser):Observable<any>{
    var self=this;
    debugger
    var username = localStorage.getItem('username');
    return this.http.post<LoginOutput>(this.userUrl+"/login", looUser,httpOptions).pipe(
      map(loginOutput=>{
        //login succesful
          if(loginOutput.id && loginOutput.userId){
          localStorage.setItem('currentUser',loginOutput.userId);
          localStorage.setItem('accessToken',loginOutput.id);
          alert('Welcome');
          //this.router.navigate(['/']);
        }
        return loginOutput;
      }),
      catchError(this.handleError<LooUser>('login Customer'))
    );

  }

  logout():Observable<any>{
    debugger
    let accessToken=localStorage.getItem('accessToken');
    return this.http.post(this.userUrl+"/logout", httpOptions).pipe(
      tap(()=>{
        debugger
        localStorage.removeItem('currentUser');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('Username');
        console.log("succesfully logged out user");
        alert('succesfully logged out');
        this.router.navigate(['/find-loo']);
      }),
      catchError(this.handleError('logout Customer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      debugger
      console.error(error);
      //return the empty result so the application keeps running
      alert("Please use a different username or emailId");
      return of (result as T);
    }
  }

  getUser(): Observable<LooUser[]>{
    let accessToken=localStorage.getItem('accessToken');
    debugger
    return this.http.get<LooUser[]>(this.userUrl+"/"+accessToken).pipe(
      tap (user => {
        console.log("get api/products");
        console.log(user);
      }),
      catchError(this.handleError('getproducts',[]))
    );
  }

}
