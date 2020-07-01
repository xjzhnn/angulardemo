import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private _childTitle: string = '子组件标题';
  @Input()
  set childTitle(childTitle: string) {
    console.log("触发了")
     this._childTitle = childTitle;
  }
   get childTitle(): string {
     console.log("取值")
      return this._childTitle;
   }
    @Input() msg:string;
    @Input() title:string;
  constructor() { }

  ngOnInit() {
  }

}
