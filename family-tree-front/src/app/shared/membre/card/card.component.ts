import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private _person: any = {};
  @Input() person: any;
  @Output('personDelete')  delete$: EventEmitter<any>;

  constructor(private _http: HttpClient) {
    this.person = {};
    this.delete$ = new EventEmitter();
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._http.get(`${BASE_URL}/api/membres/`)
      .subscribe(people => this._person = people[0]);
  }
  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(person: any) {
    this.delete$.emit(person);
  }
}
