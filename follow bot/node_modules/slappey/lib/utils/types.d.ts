export declare type Action = "new" | "gen";
export declare type CLIArguments = [option: Action, data: string];
export declare type Language = "typescript" | "javascript";
export declare type PackageManagerType = "npm" | "yarn";
export declare type FileExtension = "js" | "ts";
export declare type StructureType = "command" | "event";
export declare type Credentials = {
    token: string;
    prefix: string;
};
export declare type CommandAnswer = {
    name: string;
    category: string;
};
export declare type SlappeyConfig = {
    name: string;
    language: Language;
    manager: PackageManagerType;
    token: string;
    prefix: string;
};
//# sourceMappingURL=types.d.ts.map