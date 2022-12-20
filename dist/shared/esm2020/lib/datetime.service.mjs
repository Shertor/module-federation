import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
/**
 * Это пример сервиса, в котором периодически обновляются данные,
 * и на них подписаны сторонние модули.
 * Проектировать часы таким образом некорректно !!!
 */
export class DatetimeService {
    constructor() {
        this.now = new BehaviorSubject(new Date());
        setInterval(() => {
            this.now.next(new Date());
        }, 1);
    }
}
DatetimeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: DatetimeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DatetimeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: DatetimeService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: DatetimeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvbGliL2RhdGV0aW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUV2Qzs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLGVBQWU7SUFHMUI7UUFGTyxRQUFHLEdBQTBCLElBQUksZUFBZSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUdsRSxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OzRHQVBVLGVBQWU7Z0hBQWYsZUFBZSxjQUZkLE1BQU07MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbi8qKlxuICog0K3RgtC+INC/0YDQuNC80LXRgCDRgdC10YDQstC40YHQsCwg0LIg0LrQvtGC0L7RgNC+0Lwg0L/QtdGA0LjQvtC00LjRh9C10YHQutC4INC+0LHQvdC+0LLQu9GP0Y7RgtGB0Y8g0LTQsNC90L3Ri9C1LFxuICog0Lgg0L3QsCDQvdC40YUg0L/QvtC00L/QuNGB0LDQvdGLINGB0YLQvtGA0L7QvdC90LjQtSDQvNC+0LTRg9C70LguXG4gKiDQn9GA0L7QtdC60YLQuNGA0L7QstCw0YLRjCDRh9Cw0YHRiyDRgtCw0LrQuNC8INC+0LHRgNCw0LfQvtC8INC90LXQutC+0YDRgNC10LrRgtC90L4gISEhXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIERhdGV0aW1lU2VydmljZSB7XG4gIHB1YmxpYyBub3c6IEJlaGF2aW9yU3ViamVjdDxEYXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IERhdGUoKSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5ub3cubmV4dChuZXcgRGF0ZSgpKTtcbiAgICB9LCAxKTtcbiAgfVxufVxuIl19