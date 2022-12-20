import * as i0 from '@angular/core';
import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Это пример сервиса, в котором периодически обновляются данные,
 * и на них подписаны сторонние модули.
 * Проектировать часы таким образом некорректно !!!
 */
class DatetimeService {
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

/**
 * Пайп для преобразования времени Date в формат hh:mm:ss
 */
class DateTimePipe {
    transform(datetime) {
        return datetime ? `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}` : '';
    }
}
DateTimePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: DateTimePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
DateTimePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: DateTimePipe, name: "timePipe", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: DateTimePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'timePipe',
                    pure: false
                }]
        }] });

class MfeShellExampleService {
    constructor() {
        this.userName = "";
        this.value = new BehaviorSubject(0);
    }
    get user() {
        return this.userName;
    }
    changeValue(input) {
        this.value.next(input);
    }
    getValue() {
        return this.value;
    }
    login(userName, password) {
        // Authentication for **honest** users TM. (c) Manfred Steyer
        this.userName = userName;
    }
}
MfeShellExampleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MfeShellExampleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MfeShellExampleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MfeShellExampleService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MfeShellExampleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DateTimePipe, DatetimeService, MfeShellExampleService };
//# sourceMappingURL=shared.mjs.map
//# sourceMappingURL=shared.mjs.map
