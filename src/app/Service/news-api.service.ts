import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) {

   }

   topHeadlinesApiUrl='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=490026e9a97947059cfedb567a4eeb52'

   topHeadlines():Observable<any>
   {
    return this.http.get(this.topHeadlinesApiUrl);
   }
  }
