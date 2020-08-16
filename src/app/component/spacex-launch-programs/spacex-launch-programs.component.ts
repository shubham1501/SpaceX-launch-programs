import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/service/spacex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spacex-launch-programs',
  templateUrl: './spacex-launch-programs.component.html',
  styleUrls: ['./spacex-launch-programs.component.css'],
})
export class SpacexLaunchProgramsComponent implements OnInit {
  programs;
  toggle = false;
  currentFilter = {
    limit: 100,
    launch_year: null,
    launch_success: null,
    land_success: null
  };
  constructor(
    private spacexService: SpacexService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.keys.length) {
        this.mapQueryParams();
    } else {
      this.getSpaceXdata();
    }
  }

  getSpaceXdata(url = 'limit=100') {
    this.spacexService.getSpaceXdata(url).subscribe(
      res => {
        this.programs = res;
      }
    );
  }

  filterPrograms(filter) {
    Object.keys(filter).map(key => {
      if (this.currentFilter[key] === null) {
        this.currentFilter[key] = filter[key];
      } else if (this.currentFilter[key] === filter[key]) {
        this.currentFilter[key] = null;
      } else {
        this.currentFilter[key] = filter[key];
      }
    });
    const filterUrl = this.getFilterUrl(this.currentFilter);
    this.getSpaceXdata(filterUrl);
    this.router.navigate([], { queryParams: this.currentFilter });
  }

  getFilterUrl(filters): string {
    let url = '';
    Object.keys(filters).map(key => {
      if (filters[key]) {
          url = url + key + '=' + filters[key] + '&';
      }
    });
    return url;
  }

  mapQueryParams(): void {
    this.route.snapshot.queryParamMap.keys.map(
      param => {
        this.currentFilter[param] = this.route.snapshot.queryParamMap.get(param);
      }
    );
    const filterUrl = this.getFilterUrl(this.currentFilter);
    this.getSpaceXdata(filterUrl);
  }
}
