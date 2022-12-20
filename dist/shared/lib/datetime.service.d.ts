import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
/**
 * Это пример сервиса, в котором периодически обновляются данные,
 * и на них подписаны сторонние модули.
 * Проектировать часы таким образом некорректно !!!
 */
export declare class DatetimeService {
    now: BehaviorSubject<Date>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DatetimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DatetimeService>;
}
