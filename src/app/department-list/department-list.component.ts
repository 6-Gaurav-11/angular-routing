import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(d)" [class.selected]="isSelected(d)" *ngFor="let d of departments">
        <span class="badge">{{d.id}}</span> {{d.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "History"},
    {"id": 2, "name": "Mathematics"},
    {"id": 3, "name": "Physics"},
    {"id": 4, "name": "Accountancy"},
    {"id": 5, "name": "Chemistry"},
    {"id": 6, "name": "Geography"}
  ]

  onSelect(d: any) {
    // this.router.navigate(['/departments', d.id]);
    this.router.navigate([d.id], {relativeTo: this.route}); //to the current route append dep id then navigate to url
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  public selectedId: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params?.get('id');
      this.selectedId = id;
    });
  }

  isSelected(d: any) {
    return d.id == this.selectedId;
  }

}
