import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app.states.model';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  shoppingItems$: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems$ = this.store.select((store) => store.shopping);
  }
}
