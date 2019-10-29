import { Component, OnInit, } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,name: 'ng help', description: 'returns all commands with flags they can take as a param'},
  {position:2,name: 'ng new [project-name]', description: 'create a brand new angular project with live server BANG!'},
  {position:3,name: 'ng init', description: 'grabs name from folder that already exist '},
  {position:4,name: 'ng build', description: 'builds the production version of project'},
  {position:5,name: 'ng build -prod --aot', description: 'builds and gzips file and should do tree shaking'},
  {position:6,name: 'ng serve', description: 'creates the local version of project with live reload server'},
  {position:7,name: 'ng serve -p 8080', description: 'serve with different port number'},
  {position:8,name: 'ng github-pages:deploy', description: 'push site to gitHub pages'},
  {position:9,name: 'ng lint', description: 'lints files in project'},
  {position:10,name: 'ng generate	', description: 'takes the arguments below'},
  // {position:11,name: 'ng g component my-new-component	', description: '	Component'},
  // {position:12,name: 'ng g directive my-new-directive', description: 'Directive'},
  // {position:13,name: 'ng g pipe my-new-pipe', description: '	Pipe'},
  // {position:14,name: 'ng g service my-new-service', description: 'Service'},
  // {position:15,name: 'ng g class my-new-class	', description: 'Class'},
  // {position:16,name: 'ng g interface my-new-interface', description: 'Interface'},
  // {position:17,name: 'ng g enum my-new-enum', description: 'Enum'},
  // {position:18,name: 'ng g module my-module', description: 'Module'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  msg='ng';
  data = Object.assign( ELEMENT_DATA);
  displayedColumns: string[] = ['select', 'position', 'name', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  ngOnInit()
  {
    // this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onSelectedDel() {
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      console.log(this.data.findIndex(d => d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
    });
    this.selection = new SelectionModel<PeriodicElement>(true, []);
  }
}
