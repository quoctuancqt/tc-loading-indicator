import { Component, OnInit, OnDestroy, ContentChild, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';

@Component({
  selector: 'tc-loading-indicator',
  template: `<div id="loaderDiv" [class.loader-hidden]="!show">
                <ng-template [ngTemplateOutlet]="contentTmpl"></ng-template>
            </div>`,
  styles: [`.loader-hidden { visibility: hidden; } 
            #loaderDiv { 
              position: fixed; top: 0; right: 0;
              bottom: 0;
              left: 0; 
              z-index: 1100;
              background-color: #ccc;
              opacity: .6;
            }`]
})
export class LoaderComponent implements OnInit {
  show = false;
  private subscription: Subscription;
  @ContentChild(TemplateRef) contentTmpl;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export class LoaderState {
  show: boolean;
}