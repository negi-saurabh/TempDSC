import { Injectable } from '@angular/core';
import { Site } from './site';
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
export class SiteService {

  constructor(private http: HttpClient) { }

  private sitesUrl = environment.apiBaseUrl+'/api/site';
  //A Subject multicasts messages to subscribed Observers
  private needsRefreshSubject = new Subject<boolean>();

  listNeedsRefresh = this.needsRefreshSubject.asObservable();


  triggerRefresh(needsRefresh) {
    //this means that the Subject will multicast
    //the value needsRefresh to all subscribers
    this.needsRefreshSubject.next(needsRefresh);
  }

  getSites(): Observable<Site[]>{
    return this.http.get<Site[]>(this.sitesUrl,httpOptions).pipe(
      tap (sites => {
        console.log("get api/review");
        console.log(sites);
      }),
      catchError(this.handleError('getsites',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      //return the empty result so the application keeps running
      return of (result as T);
    }
  }

  createSite(site:Site):Observable<Site>{
    return this.http.post<Site>(this.sitesUrl, site,httpOptions).pipe(
      tap((site:Site)=>console.log('Created site with id ='+site.siteId)),
      catchError(this.handleError<Site>('creatSite'))
    );
  }

  deleteSite(site:Site):Observable<any>{
    return this.http.delete<DeleteResult>(this.sitesUrl+"/"+site.siteId,httpOptions).pipe(
      tap((deleteResult:DeleteResult)=>console.log('Count of deleted sites: '+deleteResult.count)),
      catchError(this.handleError<Site>('deleteSite'))
    );
  }

  modifySite(site:Site):Observable<Site>{
    return this.http.put(this.sitesUrl,site,httpOptions).pipe(
      tap((site:Site)=>console.log('Modified review with id ='+site.siteId)),
      catchError(this.handleError<Site>('modifySite'))
    );
  }

}
