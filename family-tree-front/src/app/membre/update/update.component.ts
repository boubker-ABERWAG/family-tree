import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MembreService} from '../../service/membre.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private _person: any;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _membreService: MembreService) {
    this.person = {};
  }

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
   * Update membre
   * @param person
   */
  submit(person: any) {
    this._membreService.update(person)
      .subscribe( () => this._router.navigate(['/membre/' + person.pseudo]) );
  }

  /**
   * Abort edition
   */
  cancel() {
    this._router.navigate(['/membre/' + this.person.pseudo]);
  }

  /**
   * @returns {any}
   */
  get person(): any {
    return this._person;
  }

  /**
   * @param value
   */
  set person(value: any) {
    this._person = value;
  }
}
