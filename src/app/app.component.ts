import {Component, OnInit} from '@angular/core';
import {CasierService} from './services/casier.service';
import {Residence} from './models/residence.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  residences: Residence[];
  selectedResidence: Residence;

  code: string;

  constructor(
    private casierService: CasierService
  ) {
  }

  ngOnInit(): void {
    this.casierService.getResidences().subscribe(residences => this.residences = residences);
  }

  send() {
    const residence = this.selectedResidence;
    this.casierService.open(residence.id, this.code).subscribe(listId => {
      listId.forEach(id => {
        residence.casiers.find(casier => casier.id === id).isOpen = true;
      });
    });
  }
}
