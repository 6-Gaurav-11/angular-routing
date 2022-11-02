import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
      <h3>You selected department with id = {{departmentId}}</h3>

      <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
      </p>
      <router-outlet></router-outlet>

      <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
      </p>

      <div>
        <button (click)="gotoDepartments()">Back</button>
      </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public departmentId: any;

  ngOnInit(): void{
    //let id = (this.route.snapshot.params?.['id']);
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params?.get('id');
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
    // this.router.navigate([previousId], {relativeTo: this.route});
  }
  goNext() {
    let nextId: number = parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments', nextId]);
    // this.router.navigate([nextId], {relativeTo: this.route});
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route}); //../ go to back one url segment
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
