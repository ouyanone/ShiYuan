import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlayerRepresentation} from "../services/api/models/player-representation";
import {Tee} from "../services/api/models/tee";
import { EventRepresentation } from '../services/api/models/event-representation';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getAllPlayer() {
    const playersUrl = `${this.baseUrl}players`;
    return this.http.get<Array<PlayerRepresentation>>(playersUrl);
  }

  savePlayer(data:any) {
    const playersUrl = `${this.baseUrl}players`;
    return this.http.post(playersUrl, data);
  }

  editPlayer(data:any) {
    const playersUrl = `${this.baseUrl}players`;
    return this.http.post(playersUrl, data);
  }

  getPlayerById(id:any) {
    const playersUrl = `${this.baseUrl}players/`+id;
    return this.http.get<PlayerRepresentation>(playersUrl);

  }

  updatePlayersHandicap(data:any) {
    const playersUrl = `${this.baseUrl}players/ghin`;
    return this.http.post(playersUrl, data);
  }

  createEventTee(event: EventRepresentation) {
    const eventGroupUrl = `${this.baseUrl}game/grouping`;
    console.log("eventGroupUrl="+eventGroupUrl);
    return this.http.post(eventGroupUrl, event);
  }

  getAllEvent() {
    const eventsUrl = `${this.baseUrl}events`;
    return this.http.get<Array<EventRepresentation>>(eventsUrl);
  }

  getEventById(id:any) {
    const eventsUrl = `${this.baseUrl}events/`+id;
    return this.http.get<EventRepresentation>(eventsUrl);
  }


  submitScore(event: EventRepresentation) {
    const submitScoreUrl = `${this.baseUrl}game/submitScore`;
    console.log("eventGroupUrl="+submitScoreUrl);
    return this.http.post(submitScoreUrl, event);
  }
}
