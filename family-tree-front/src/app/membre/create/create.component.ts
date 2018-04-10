import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MembreService} from '../../service/membre.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  person: any;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _membreService: MembreService) {
    this.person = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}

  submit(person: any) {
    this._membreService.create(person)
      .subscribe( () => this._router.navigate(['/membre/' + person.pseudo]) );
  }

  cancel() {
    this._router.navigate(['/membre/Sanyanya']);
  }

}
