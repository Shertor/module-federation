import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Пайп для преобразования времени Date в формат hh:mm:ss
 */
export class DateTimePipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvbGliL2RhdGV0aW1lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBEOztHQUVHO0FBS0gsTUFBTSxPQUFPLFlBQVk7SUFFdkIsU0FBUyxDQUFDLFFBQXFCO1FBRTdCLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNuRyxDQUFDOzt5R0FMVSxZQUFZO3VHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFKeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLEtBQUs7aUJBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICog0J/QsNC50L8g0LTQu9GPINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0LLRgNC10LzQtdC90LggRGF0ZSDQsiDRhNC+0YDQvNCw0YIgaGg6bW06c3NcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAndGltZVBpcGUnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZGF0ZXRpbWU6IERhdGUgfCBudWxsKTogc3RyaW5nIHtcblxuICAgIHJldHVybiBkYXRldGltZSA/IGAke2RhdGV0aW1lLmdldEhvdXJzKCl9OiR7ZGF0ZXRpbWUuZ2V0TWludXRlcygpfToke2RhdGV0aW1lLmdldFNlY29uZHMoKX1gIDogJydcbiAgfVxuXG59XG4iXX0=