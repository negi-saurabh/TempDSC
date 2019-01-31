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
    debugger
    return this.http.post<LooUser>(this.userUrl, looUser,httpOptions).pipe(
      map((looUser:LooUser)=>{
        console.log('Created user with id ='+looUser.id);
        this.router.navigate(['/loo']);
      }),
      catchError(this.handleError<LooUser>('registerUser'))
    );

  }

  login(looUser:LooUser):Observable<any>{
    var self=this;
    return this.http.post<LoginOutput>(this.userUrl+"/login", looUser,httpOptions).pipe(

      map(loginOutput=>{
        //login succesful
        debugger
        if(loginOutput.id && loginOutput.userId){
          localStorage.setItem('currentUser',loginOutput.userId);
          localStorage.setItem('accessToken',loginOutput.id);
          this.router.navigate(['/loo']);
        }
        return loginOutput;
      }),
      catchError(this.handleError<LooUser>('login Customer'))
    );

  }

  logout():Observable<any>{
    let accessToken=localStorage.getItem('accessToken');
    return this.http.post(this.userUrl+"/logout", httpOptions).pipe(
      tap(()=>{
        debugger
        localStorage.removeItem('currentUser');
        localStorage.removeItem('accessToken');
        console.log("succesfully logged out user");
      }),
      catchError(this.handleError('logout Customer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
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
