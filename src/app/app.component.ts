import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable, Subject, takeUntil } from 'rxjs';

import { Airline } from './core/models/airline.interface';
import { AirlinesService } from './core/services/airlines/airlines.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'kayak-angular';

  airlines: any = [];
  airlinesPage: any = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  length = this.airlines.length;
  pageIndex = 0;
  pageSize = 12;
  pageSizeOptions = [6, 12, 24, 120];

  cols$: Observable<number> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.pageSize = 4;
          this.pageSizeOptions = [6, 12, 24, 120];
          return 1;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.pageSize = 10;
          this.pageSizeOptions = [5, 10, 25, 100];
          return 2;
        } else {
          this.pageSize = 12;
          this.pageSizeOptions = [6, 12, 24, 120];
          return 4;
        }
      }),
    );


  constructor(private breakpointObserver: BreakpointObserver,private airlinesService: AirlinesService) { }

  ngOnInit(): void {
    this.airlinesService.getAirlines().pipe(takeUntil(this.destroy$)).subscribe((airlines: Object | Airline[]) => {
      this.airlines = airlines;

      this.length = this.airlines.length;
      this.pageIndex = 0;

      this.showAirlines();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.showAirlines();
  }

  showAirlines() {
    this.airlinesPage = this.airlines.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }
}
