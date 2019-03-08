import { Injectable } from '@angular/core';
import {Hero} from './/hero';
import {HEROES} from './/mock-heroes'
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; //url to web api

  getHeroes(): Observable<Hero[]> {
    //TODO: send the message _after_ fetching the heroes
    this.messsageService.add('HeroService: fetched heroes');
    // return of (HEROES);
      return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    //TODO: send the message _after_ fetching the heroes
    this.messsageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }



  constructor(
    private http: HttpClient,
    private messsageService: MessageService) { }
    private log(message: string) {
      this.messsageService.add('HeroService: ${message}');
      }


}


