import { Language } from "./types";
export declare function capitalize(str: string): string;
export declare const checkOptionType: (arg: any) => boolean;
export declare const checkStructType: (arg: any) => boolean;
export declare const getCommandName: (name: string, language: Language) => string;
export declare const getEventName: (name: string, language: Language) => string;
export declare const getPackageScripts: (language: Language) => {
    dev: string;
    start: string;
    build: string;
};
//# sourceMappingURL=helpers.d.ts.map