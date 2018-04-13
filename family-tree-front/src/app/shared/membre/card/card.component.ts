import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '@types/googlemaps';
const BASE_URL = 'http://localhost:8080';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  locate: Boolean = false;
  lat: Number = 51.678418;
  lng: Number = 7.809007;

  private _person: any = {};
  @Input() person: any;
  @Output('personDelete') delete$: EventEmitter<any>;

  constructor(private _http: HttpClient) {
    this.person = {};
    this.delete$ = new EventEmitter();
  }
  public locateMaps(longitude: Number, latitude: Number) {
    this.locate = true;
    this.lng = longitude;
    this.lat = latitude;
  }
  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._http.get(`${BASE_URL}/api/membres/`)
      .subscribe(people => this._person = people[0]);
  }
}
