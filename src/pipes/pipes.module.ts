import { NgModule } from '@angular/core';
import { SafePipe } from './safe/safe';
import { KeysPipe } from './keys/keys';
import { ReversePipe } from './reverse/reverse';
import { Search } from './search/search';
import { RoundPipe } from './round/round';
@NgModule({
    declarations: [SafePipe,
        KeysPipe,
        ReversePipe,
        Search,
        RoundPipe],
    imports: [],
    exports: [SafePipe,
        KeysPipe,
        ReversePipe,
        Search,
        RoundPipe]
})
export class PipesModule { }
