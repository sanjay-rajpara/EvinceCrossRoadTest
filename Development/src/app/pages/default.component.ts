import { Component,  OnInit, Renderer2 } from '@angular/core';
 


/**
 * Default page.
 *
 */


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public constructor(public renderer: Renderer2)
      {
  }
  ngOnInit(){

  }
 
}
