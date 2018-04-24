import { Component, OnInit } from '@angular/core';
import {Link} from '../d3/models/link';
import {Node} from '../d3/models/node';
import {MembreService} from '../service/membre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];
  membres: any;

constructor(private _membreService: MembreService) {}
  ngOnInit() {
    /** constructing the nodes array */
    //let membres = [
      //{"id":21,"pseudo":"Sanyanya","nom":"ABERWAG","prenom":"Sanya","civilite":"Mme","dateNaissance":"2017-06-09T00:00:00.000+0000","lieuDeNaissance":"Charleroi","latitudeNaissance":50.5833,"longitudeNaissance":3.0667,"description":"Mme Sanyanya","photo":"sanya.jpg","actif":true,"vivant":true,"numeroPortable":"0695015487","numeroFixe":"0123456789","paysDeResidence":"France","villeDeResidence":"Faches-Thumesnil","adresse":"11 rue baudelaire","email":"sanya@gmail.com"},
      //{"id":22,"pseudo":"Wassyssyl","nom":"ABERWAG","prenom":"Wassyl","civilite":"Mr","dateNaissance":"2015-09-08T00:00:00.000+0000","lieuDeNaissance":"Charleroi","latitudeNaissance":50.5833,"longitudeNaissance":3.0667,"description":"Mr Wassyssyl","photo":"wassyl.jpg","actif":true,"vivant":true,"numeroPortable":"0695015487","numeroFixe":"0123456789","paysDeResidence":"France","villeDeResidence":"Faches-Thumesnil","adresse":"11 rue baudelaire","email":"wassyl@gmail.com"},
      //{"id":23,"pseudo":"Dadou","nom":"OUMBARKI","prenom":"Khadija","civilite":"Mme","dateNaissance":"1986-05-04T00:00:00.000+0000","lieuDeNaissance":"Bouizakarne","latitudeNaissance":50.5833,"longitudeNaissance":3.0667,"description":"Mme Dadou","photo":"dadou.jpg","actif":true,"vivant":true,"numeroPortable":"0695015487","numeroFixe":"0123456789","paysDeResidence":"France","villeDeResidence":"Faches-Thumesnil","adresse":"11 rue baudelaire","email":"dadou@gmail.com"},
      //{"id":24,"pseudo":"Boub","nom":"ABERWAG","prenom":"Boubker","civilite":"Mr","dateNaissance":"1987-07-01T00:00:00.000+0000","lieuDeNaissance":"Bouizakarne","latitudeNaissance":50.5833,"longitudeNaissance":3.0667,"description":"Mr Boubker","photo":"boub.jpg","actif":true,"vivant":true,"numeroPortable":"0695015487","numeroFixe":"0123456789","paysDeResidence":"France","villeDeResidence":"Faches-Thumesnil","adresse":"11 rue baudelaire","email":"baberwag@gmail.com"},
      //{"id":26,"pseudo":"Wass","nom":"ABER","prenom":"Wass","latitudeNaissance":50.5833,"longitudeNaissance":3.0667,"actif":true,"vivant":true,"numeroPortable":"0612345678","numeroFixe":"0112345678","paysDeResidence":"Belgique","villeDeResidence":"Lille","adresse":"Adresse ","email":"Wass@gmail.com"}
      //];

    this._membreService.fetch().subscribe(m =>
      {
        for (let membre of m){
          this.nodes.push(new Node(membre));
        }
      });

    /*for (let m of membres){
      this.nodes.push(new Node(m));
    }*/

  }
}
