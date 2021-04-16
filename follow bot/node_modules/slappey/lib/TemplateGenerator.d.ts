import { FileSystem } from "./FileSystem";
import { Initializer, Language } from "./utils/index";
import { Logger, ProjectTemplateGenerator } from "./utils/interfaces";
export declare class TemplateGenerator implements ProjectTemplateGenerator, Initializer {
    private static instance;
    private fileSystem;
    private logger;
    private language;
    initialize(language?: Language): Promise<void>;
    generateUtilities(srcPath: string): Promise<void>;
    getPaths(srcPath: string): {
        commands: string;
        utils: string;
        structures: string;
        test: string;
        ready: string;
        message: string;
        events: string;
        client: string;
    };
    generateClient(filePath: string): Promise<void>;
    generateDirectories(basePath: string): Promise<void>;
    generateRegistry(filePath: string): Promise<void>;
    generateBaseCommand(filePath: string): Promise<void>;
    generateBaseEvent(filePath: string): Promise<void>;
    generateTestCommand(filePath: string): Promise<void>;
    generateReadyEvent(filePath: string): Promise<void>;
    generateMessageEvent(filePath: string): Promise<void>;
    generateCommand(categoryPath: string, name: string, category: string): Promise<void>;
    generateEvents(events: any[], eventsDir: string): Promise<void>;
    getTemplate(event: string): any;
    static getTemplateGenerator(): TemplateGenerator;
    getFileSystem(): FileSystem;
    getLogger(): Logger;
    getLanguage(): Language | undefined;
}
//# sourceMappingURL=TemplateGenerator.d.ts.map