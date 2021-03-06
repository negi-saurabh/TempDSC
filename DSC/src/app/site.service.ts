import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap, catchError} from 'rxjs/operators';
import { LooUser } from './looUser';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Site } from './site'


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
export class SiteService {

  private siteUrl= environment.apiBaseUrl+'/api/sites';

  constructor(private http: HttpClient,private router:Router) { }


  registerSite(site:Site):Observable<Site>{
    debugger
    console.log(site)
    return this.http.post<Site>(this.siteUrl, site,httpOptions).pipe(
      tap(site=>{
        debugger
        console.log('Created site with id ='+site.id);
        localStorage.setItem('siteid',site.id);
        }),
      catchError(this.handleError<Site>('registerCustomer'))
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
