import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlayerRepresentation} from "../services/api/models/player-representation";

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

  doGrouping(players: Array<PlayerRepresentation>) {
    const groupingUrl = `${this.baseUrl}players/grouping`;
    console.log("groupingUrl="+groupingUrl);
    return this.http.post(groupingUrl, players);
  }
}
