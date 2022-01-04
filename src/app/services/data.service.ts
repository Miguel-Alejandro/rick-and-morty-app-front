import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  character = "https://rickandmortyapi.com/api/character";
  location = "https://rickandmortyapi.com/api/location";
  episodes = "https://rickandmortyapi.com/api/episode";

  constructor( private http: HttpClient ) { }

  public getCharacter(): Observable<any> {
    return this.http.get( this.character );
  }

  public getLocation(): Observable<any> {
    return this.http.get( this.location );
  }

  public getEpisodes(): Observable<any> {
    return this.http.get( this.episodes );
  }
}
