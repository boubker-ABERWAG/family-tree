import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _locate: Boolean = false;
  private _lat: Number;
  private _lng: Number;
  @Input() person: any;
  @Output('personDelete') delete$: EventEmitter<any>;

  /**
   * Constructor
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {
    this.person = {};
    this.delete$ = new EventEmitter();
  }

  /**
   * @param {Number} longitude
   * @param {Number} latitude
   */
  public locateMaps(longitude: Number, latitude: Number) {
    this.locate = true;
    this.lng = longitude;
    this.lat = latitude;
  }
  /**
   * OnInit implementation
   */
  ngOnInit() {}

  /**
   * @returns {Boolean}
   */
  get locate(): Boolean {
    return this._locate;
  }

  /**
   * @param {Boolean} value
   */
  set locate(value: Boolean) {
    this._locate = value;
  }

  /**
   * @returns {Number}
   */
  get lat(): Number {
    return this._lat;
  }

  /**
   * @param {Number} value
   */
  set lat(value: Number) {
    this._lat = value;
  }

  /**
   * @returns {Number}
   */
  get lng(): Number {
    return this._lng;
  }

  /**
   * @param {Number} value
   */
  set lng(value: Number) {
    this._lng = value;
  }
}
