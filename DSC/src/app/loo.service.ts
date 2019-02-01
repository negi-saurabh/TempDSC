import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, catchError} from 'rxjs/operators';
import { LooUser } from './looUser';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Loo } from './loo';
import { Subject } from 'rxjs/Subject';

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
export class LooService {

  private looUrl= environment.apiBaseUrl+'/api/loos';

  constructor(private http: HttpClient,private router:Router) { }

  private needsRefreshSubject = new Subject<boolean>();

  listNeedsRefresh = this.needsRefreshSubject.asObservable();


  triggerRefresh(needsRefresh) {
    //this means that the Subject will multicast
    //the value needsRefresh to all subscribers
    this.needsRefreshSubject.next(needsRefresh);
  }

  checkin(looUser:LooUser):Observable<any>{
    debugger
    return this.http.post<LooUser>(this.looUrl, looUser,httpOptions).pipe(
      map((looUser:LooUser)=>{
        console.log('Created customer with id ='+looUser.id);
        this.router.navigate(['/loo']);

      }),
      catchError(this.handleError<LooUser>('registerCustomer'))
    );
  }

  getNearbyLoos(): Observable<Loo[]>{
    return this.http.get<Loo[]>(this.looUrl).pipe(
      tap (loo => {
        console.log("get api/loos");
        console.log(loo);
      }),
      catchError(this.handleError('getproducts',[]))
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
    return this.http.get<LooUser[]>(this.looUrl+"/"+accessToken).pipe(
      tap (user => {
        console.log("get api/products");
        console.log(user);
      }),
      catchError(this.handleError('getproducts',[]))
    );
  }

}
