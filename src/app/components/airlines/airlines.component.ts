import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';
import { Airline } from '../../models/airline.interface';
import { AirlinesService } from '../../shared/services/airlines/airlines.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit, OnDestroy {

  isLoading = true;

  airlines: any = [];
  airlinesPage: any = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

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

  constructor(private airlinesService: AirlinesService) { }

  ngOnInit(): void {
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

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.showAirlines();
  }
}
