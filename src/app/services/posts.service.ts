import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) {}

  // Read local "posts.json" file and return it as Observable
  public getPostsJSON(): Observable<any> {
      return this.http.get("../../assets/posts.json");
  }

}
