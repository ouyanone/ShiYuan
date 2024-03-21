import { PlayerRepresentation } from './player-representation';

export class EventRepresentation {
  eventName?: string;
  eventDesc?: string;
  season?: string;
  course?: string;
  eventDate?: string;
  player: Array<PlayerRepresentation>=[];

}
