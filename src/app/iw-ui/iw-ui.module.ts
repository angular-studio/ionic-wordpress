import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';

@NgModule({
    declarations: [
        RatingComponent
    ],
    entryComponents: [
        RatingComponent
    ],
    exports: [
        RatingComponent
    ]
})

export class IwUiModule {}
