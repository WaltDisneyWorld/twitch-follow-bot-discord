import { Logger } from "./utils/index";
export declare class SimpleLogger implements Logger {
    private static instance;
    success(message: string): void;
    error(message: string): void;
    warning(message: string): void;
    info(message: string): void;
    static getSimpleLogger(): SimpleLogger;
}
//# sourceMappingURL=Logger.d.ts.map