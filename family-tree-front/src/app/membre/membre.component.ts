import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {MembreService} from '../service/membre.service';

const BASE_URL = 'http://localhost:8080';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  private _person: any = {};

  constructor(private _route: ActivatedRoute, private _router: Router, private _membreService: MembreService) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .mergeMap((id: string) => this._membreService.fetchOne(id))
      .subscribe( (person: any) => this.person = person);
  }

  /**
   *
   * @returns {any}
   */
  public get person(): any {
    return this._person;
  }

  /**
   *
   * @param person
   */
  public set person(person: any) {
    this._person = person;
  }

}
