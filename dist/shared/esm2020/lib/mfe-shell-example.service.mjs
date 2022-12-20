import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class MfeShellExampleService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWZlLXNoZWxsLWV4YW1wbGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvbGliL21mZS1zaGVsbC1leGFtcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sc0JBQXNCO0lBUWpDO1FBUFEsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTWpELENBQUM7SUFKaEIsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFJTSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQWdCLEVBQUUsUUFBaUI7UUFDOUMsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O21IQXJCVSxzQkFBc0I7dUhBQXRCLHNCQUFzQixjQUZyQixNQUFNOzJGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIE1mZVNoZWxsRXhhbXBsZVNlcnZpY2Uge1xuICBwcml2YXRlIHVzZXJOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHZhbHVlOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG5cbiAgcHVibGljIGdldCB1c2VyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXNlck5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlKGlucHV0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlLm5leHQoaW5wdXQpO1xuICB9XG5cbiAgcHVibGljIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKHVzZXJOYW1lOiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQXV0aGVudGljYXRpb24gZm9yICoqaG9uZXN0KiogdXNlcnMgVE0uIChjKSBNYW5mcmVkIFN0ZXllclxuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgfVxufVxuIl19