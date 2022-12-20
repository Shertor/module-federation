import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Пайп для преобразования времени Date в формат hh:mm:ss
 */
export declare class DateTimePipe implements PipeTransform {
    transform(datetime: Date | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DateTimePipe, "timePipe", false>;
}
