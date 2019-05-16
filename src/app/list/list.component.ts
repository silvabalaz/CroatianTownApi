import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { County, Town, Community } from '../croatia';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../list.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageTitle = 'Counties, communities, towns';
  errorMessage: string;

  listForm: FormGroup;
  counties: County[];
  towns: Town[];
  townsByCounty: Town[];
  communities: Community[];
  communitiesByCounty: Community[];

  searchTerm = '';

  constructor(private fb: FormBuilder,
              private listService: ListService,
              private route: ActivatedRoute,
              private router: Router ) {
    this.listForm = this.fb.group({
    });
  }

  ngOnInit() {
    this.getCounties();
    this.getTowns();
    console.log('this.getTowns u OnInit' + this.getTowns);
    this.getCommunities();
    console.log('this.getTCommunities u OnInit' + this.getCommunities);
  }
  getCounties(): void {
    this.listService.getCounties()
      .subscribe(counties => {
        this.counties = counties;
      });
  }
  getTowns(): void {
    this.listService.getTowns()
      .subscribe(towns => {
        this.towns = towns;
      });
  }
  getCommunities(): void {
    this.listService.getCommunities()
      .subscribe(communities => {
        this.communities = communities;
      });
  }
  changeByCounty(val: any): void {
     const filterBy = val.target.options[val.target.options.selectedIndex].text;
     console.log('filterByCounty' + filterBy);
     this.townsByCounty = this.towns.filter(items => items.countyName === filterBy);
     console.log('townsByCounty' + this.townsByCounty);
     this.communitiesByCounty = this.communities.filter(items => items.countyName === filterBy);
     console.log('this.communitiesByCounty' +  this.communitiesByCounty);
  }

}
