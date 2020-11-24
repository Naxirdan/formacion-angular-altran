import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { PostResponse } from './model/posts.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostsApi {

  private urlApi: string;
  private endpointClass: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApiPlaceholder;
    this.endpointClass= 'posts'
  }

  getPost$ = (id: number): Observable<PostResponse> => {
    return this.http.get(`${this.urlApi}/${this.endpointClass}/${id}`).pipe(map( res => {
      return res as PostResponse;
    }))
  }

  getListPosts$ = (): Observable<PostResponse[]> => {
    return this.http.get(`${this.urlApi}/${this.endpointClass}`).pipe(map( res => {
      return res as PostResponse[];
    }))
  }

}
