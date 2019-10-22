import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialogConfig, MatDialog} from '@angular/material/dialog';

import { MattableDataSource, MattableItem } from './mattable-datasource';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { ToastService } from '../../toast/toast.service';


@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MattableItem>;
  dataSource: MattableDataSource;
  // context-menu
  @ViewChild(MatMenuTrigger, {static: false})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  // end here
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private dialog: MatDialog, private toastService: ToastService) {}

  ngOnInit() {
    this.dataSource = new MattableDataSource();
    this.toastService.show({
      text: 'Toast message',
      type: 'info'
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    // this.contextMenu.menuData = { 'item': item };
    this.contextMenu.openMenu();
  }

  onContextMenuAdd() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.autoFocus = false;
    // dialogConfig.position = {
    //   top: '10px',
    //   left: '10%'
    // };

    /** passing data to the dialogueComponent  using 'data' property of 'dialogConfig' obj */

    dialogConfig.data = {
      id: 1,
      title: 'Add Form'
    };
    // this.dialog.open(DialogueComponent, dialogConfig);
    const df = this.dialog.open(DialogueComponent, dialogConfig);
    df.afterClosed().subscribe(
      (data) => {
        this.ngOnInit();
        console.log(data);
      }
    );
  }



}
