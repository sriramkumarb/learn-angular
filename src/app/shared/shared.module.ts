import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.Pipe';

@NgModule({
    declarations: [CapitalizePipe],
    exports: [CapitalizePipe]
})

export class SharedModule { }