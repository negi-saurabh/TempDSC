import { Injectable } from '@angular/core';
import { Review } from './review';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

interface DeleteResult{
  count:number;
  }

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }

  private reviewsUrl = environment.apiBaseUrl+'/api/reviews';
  //A Subject multicasts messages to subscribed Observers
  private needsRefreshSubject = new Subject<boolean>();

  listNeedsRefresh = this.needsRefreshSubject.asObservable();


  triggerRefresh(needsRefresh) {
    //this means that the Subject will multicast
    //the value needsRefresh to all subscribers
    this.needsRefreshSubject.next(needsRefresh);
  }

  getReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewsUrl,httpOptions).pipe(
      tap (reviews => {
        console.log("get api/review");
        console.log(reviews);
      }),
      catchError(this.handleError('getreviews',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
  }

  createReview(review:Review):Observable<Review>{
    return this.http.post<Review>(this.reviewsUrl, review,httpOptions).pipe(
      tap((review:Review)=>console.log('Created review with id ='+review.reviewId)),
      catchError(this.handleError<Review>('createReview'))
    );
  }

  deleteReview(review:Review):Observable<any>{
    return this.http.delete<DeleteResult>(this.reviewsUrl+"/"+review.reviewId,httpOptions).pipe(
      tap((deleteResult:DeleteResult)=>console.log('Count of deleted reviews: '+deleteResult.count)),
      catchError(this.handleError<Review>('deleteReview'))
    );
  }

  modifyReview(review:Review):Observable<Review>{
    return this.http.put(this.reviewsUrl,review,httpOptions).pipe(
      tap((review:Review)=>console.log('Modified review with id ='+review.reviewId)),
      catchError(this.handleError<Review>('modifyReview'))
    );
  }

}
