import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {fakeapi} from '../fakeapi';
import {Residence} from '../models/residence.model';

@Injectable()
export class CasierService {

  constructor(
    private http: HttpClient
  ) {
  }

  getResidences() {
    return fakeapi(
      this.http.get<any[]>('/api/residences.json'),
      this.http.get<any[]>('/api/residence')
    ).map(residences => {
      residences.forEach(residenceBad => residenceBad.casiers = _.values(residenceBad.casiers));
      return <Residence[]>residences;
    }).map(residences => {
      residences.forEach(residence => {
        residence.casiers.forEach( casier => {
          casier.isOpen = false;
          casier.nbEll = 0;
        })
      });
      return residences;
    });
  }

  open(id: string | undefined, code: string) {
    return fakeapi(
      this.http.get<string[]>('/api/open.json'),
      this.http.post<string[]>('/api/casier/open', { 'residenceId' : id, 'password' : code})
    )
  }
}
