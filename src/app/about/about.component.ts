import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
company
loca
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.company=this.ar.snapshot.paramMap.get('cname')
    this.loca=this.ar.snapshot.paramMap.get('loc')
  }

}
