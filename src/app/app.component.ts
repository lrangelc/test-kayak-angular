import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PageEvent } from '@angular/material/paginator';
import { map, Observable, Subject, takeUntil } from 'rxjs';

import { Airline } from './core/models/airline.interface';
import { AirlinesService } from './core/services/airlines/airlines.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'kayak-angular';
  isLoading = true;

  airlines: any = [];
  airlinesPage: any = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  pageSizeOptionsXSmall = [3, 6, 12, 60];
  pageSizeOptionsSmall = [4, 8, 16, 64];
  pageSizeOptionsXLarge = [6, 12, 24, 120];
  pageSizeOptionsDefault = [6, 12, 24, 120];

  pageSizeXSmall = 3;
  pageSizeSmall = 6;
  pageSizeXLarge = 16;
  pageSizeDefault = 12;

  colsXSmall = 1;
  colsSmall = 2;
  colsXLarge = 4;
  colsDefault = 4;

  length = this.airlines.length;
  pageIndex = 0;
  pageSize = 12;
  pageSizeOptions = [6, 12, 24, 120];

  isOneworld = false;
  isSkyTeam = false;
  isStarAlliance = false;

  ONEWORLD_VALUE = 'OW';
  SKY_TEAM_VALUE = 'ST';
  STAR_ALLIANCE_VALUE = 'SA';

  cols = this.colsDefault;

  cols$: Observable<number> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.pageSize = this.pageSizeXSmall;
          this.pageSizeOptions = this.pageSizeOptionsXSmall;
          return this.colsXSmall;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.pageSize = this.pageSizeSmall;
          this.pageSizeOptions = this.pageSizeOptionsSmall;
          return this.colsSmall;
        } else {
          this.pageSize = this.pageSizeDefault;
          this.pageSizeOptions = this.pageSizeOptionsDefault;
          return this.colsDefault;
        }
      }),
    );

  constructor(public breakpointObserver: BreakpointObserver, private airlinesService: AirlinesService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.pageSize = this.pageSizeXSmall;
          this.pageSizeOptions = this.pageSizeOptionsXSmall;
          this.cols = this.colsXSmall;
          this.showAirlines();
        }
      });

    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.pageSize = this.pageSizeSmall;
          this.pageSizeOptions = this.pageSizeOptionsSmall;
          this.cols = this.colsSmall;
          this.showAirlines();
        }
      });

    this.breakpointObserver
      // .observe([Breakpoints.Medium, Breakpoints.Large])
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.pageSize = this.pageSizeDefault;
          this.pageSizeOptions = this.pageSizeOptionsDefault;
          this.cols = this.colsDefault;
          this.showAirlines();
        }
      });

    // this.breakpointObserver
    //   .observe([Breakpoints.XLarge])
    //   .subscribe((state: BreakpointState) => {
    //     if (state.matches) {
    //       this.pageSize = this.pageSizeXLarge;
    //       this.pageSizeOptions = this.pageSizeOptionsXLarge;
    //       this.cols = this.colsXLarge;
    //       this.showAirlines();
    //     }
    //   });

    this.airlinesService.getAirlines().pipe(takeUntil(this.destroy$)).subscribe((airlines: Object | Airline[]) => {
      this.airlines = airlines;

      this.length = this.airlines.length;
      this.pageIndex = 0;

      this.showAirlines();
      this.isLoading = false;
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
    const myfilter = this.getFilter();
    let arrayFiltered = [];
    if (myfilter.length > 0) {
      arrayFiltered = this.airlines.filter((el: { alliance: string; }) => {
        return myfilter.some(f => {
          return f === el.alliance;
        });
      });
    } else {
      arrayFiltered = this.airlines;
    }
    this.length = arrayFiltered.length;

    this.airlinesPage = arrayFiltered.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  getFilter() {
    const filter = [];
    if (this.isSkyTeam) {
      filter.push(this.SKY_TEAM_VALUE);
    }
    if (this.isOneworld) {
      filter.push(this.ONEWORLD_VALUE);
    }
    if (this.isStarAlliance) {
      filter.push(this.STAR_ALLIANCE_VALUE);
    }
    return filter;
  }

  setFilter(completed: boolean) {
    this.pageIndex = 0;
    this.showAirlines();
  }
}
