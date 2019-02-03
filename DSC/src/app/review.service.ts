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
    var looId = {"looId" :localStorage.getItem('looId')};
    var looUserId = {"looUserId":localStorage.getItem('currentUser')};
    var obj = Object.assign(review,looId)
    var obj2 = Object.assign(obj,looUserId)

    return this.http.post<Review>(this.userUrl, obj2,httpOptions).pipe(
      map(review=>{
        console.log('Created site with id ='+review.reviewid);
        localStorage.setItem('reviewid',review.reviewid);
        }),
      catchError(this.handleError<Review>('Create Review'))
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
