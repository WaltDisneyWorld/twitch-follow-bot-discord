import { CLIArguments, CommandAnswer, Credentials, Language, PackageManagerType, ProjectPrompter } from "./utils/index";
export declare class Prompter implements ProjectPrompter {
    private static instance;
    language(): Promise<Language>;
    packageManager(): Promise<PackageManagerType>;
    command(): Promise<CommandAnswer>;
    event(): Promise<any[]>;
    credentials(): Promise<Credentials>;
    getChoice(): Promise<CLIArguments>;
    static getPrompter(): Prompter;
}
//# sourceMappingURL=Prompter.d.ts.map