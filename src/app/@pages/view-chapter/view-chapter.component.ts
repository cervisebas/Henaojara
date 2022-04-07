import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-chapter',
  templateUrl: './view-chapter.component.html',
  styleUrls: ['./view-chapter.component.scss']
})
export class ViewChapterComponent implements OnInit {
  constructor() { }

  @Input('name') name: string;
  @Input('servers') servers: { title: string, url: string }[];
  @Input('close') close: ()=>any;

  ngOnInit(): void {
  }

}
