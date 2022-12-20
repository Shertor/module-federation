import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export declare class MfeShellExampleService {
    private userName;
    private value;
    get user(): string;
    constructor();
    changeValue(input: number): void;
    getValue(): BehaviorSubject<number>;
    login(userName: string, password?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MfeShellExampleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MfeShellExampleService>;
}
