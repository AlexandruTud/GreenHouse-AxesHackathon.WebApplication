import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card;
  @Input() electronicId;
  @Output() eventEmitter = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    console.log(this.card);
  }

  delete() {
    this.eventEmitter.emit(this.electronicId);
  }

  goToDetails() {
    this.router.navigate(
      ['/main/details'],
      { queryParams: { electronicId: this.electronicId } }
    );
  }
}