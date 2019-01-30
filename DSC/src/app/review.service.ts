import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, catchError} from 'rxjs/operators';
import { LooUser } from './looUser';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Review } from './review'

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
export class ReviewService {

  private userUrl= environment.apiBaseUrl+'/api/reviews';

  constructor(private http: HttpClient,private router:Router) { }

  registerReviews(review:Review):Observable<any>{
    debugger
    return this.http.post<Review>(this.userUrl, review,httpOptions).pipe(
      map((review:Review)=>{
        console.log('Created site with id ='+review.reviewid);
        }),
      catchError(this.handleError<LooUser>('registerCustomer'))
    );
}

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
  }



}
