import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        LoaderService
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoaderModule
        }
    }
}