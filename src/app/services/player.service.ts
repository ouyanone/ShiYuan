import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlayerRepresentation} from "../services/api/models/player-representation";
import {Tee} from "../services/api/models/tee";
import { EventRepresentation } from '../services/api/models/event-representation';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private localServerSideUrl = 'http://localhost:8080/';
  private baseUrl = this.getHost();


  constructor(private http: HttpClient) { }

  getHost(): string {
      if (window.location.port=='4200') {
        return this.localServerSideUrl;
        //return  window.location.protocol + '//' + window.location.host+'/';
      } else {
        return  window.location.protocol + '//' + window.location.host+'/';
      }


  }



  getAllPlayer() {
    const playersUrl = `${this.baseUrl}webapi/players`;
    return this.http.get<Array<PlayerRepresentation>>(playersUrl);
  }

  savePlayer(data:any) {
    const playersUrl = `${this.baseUrl}webapi/players`;
    return this.http.post(playersUrl, data);
  }

  editPlayer(data:any) {
    const playersUrl = `${this.baseUrl}webapi/players`;
    return this.http.post(playersUrl, data);
  }

  getPlayerById(id:any) {
    const playersUrl = `${this.baseUrl}webapi/players/`+id;
    return this.http.get<PlayerRepresentation>(playersUrl);

  }

  updatePlayersHandicap(data:any) {
    const playersUrl = `${this.baseUrl}webapi/players/ghin`;
    return this.http.post(playersUrl, data);
  }

  createEventTee(event: EventRepresentation) {
    const eventGroupUrl = `${this.baseUrl}webapi/game/grouping`;
    console.log("eventGroupUrl="+eventGroupUrl);
    return this.http.post(eventGroupUrl, event);
  }

  getAllEvent() {
    const eventsUrl = `${this.baseUrl}webapi/events`;
    return this.http.get<Array<EventRepresentation>>(eventsUrl);
  }

  getEventById(id:any) {
    const eventsUrl = `${this.baseUrl}webapi/events/`+id;
    return this.http.get<EventRepresentation>(eventsUrl);
  }


  submitScore(event: EventRepresentation) {
    const submitScoreUrl = `${this.baseUrl}webapi/game/submitScore`;
    console.log("eventGroupUrl="+submitScoreUrl);
    return this.http.post(submitScoreUrl, event);
  }

  deleteEvent(id:any) {
    const eventUrl = `${this.baseUrl}webapi/events/`+id;
    console.log("eventUrl="+eventUrl);
    return this.http.delete(eventUrl);
  }

  updateLast3Score() {
    const updateScoreUrl = `${this.baseUrl}webapi/player/last3score`;
    return this.http.get(updateScoreUrl);
  }
}
