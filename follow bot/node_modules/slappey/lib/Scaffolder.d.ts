import { PackageManager } from "./Manager";
import { Prompter } from "./Prompter";
import { TemplateGenerator } from "./TemplateGenerator";
import { StructureType } from "./utils";
import { ProjectScaffolder } from "./utils/interfaces";
import { FileSystem } from "./FileSystem";
export declare class Scaffolder implements ProjectScaffolder {
    private prompter;
    private fileSystem;
    private manager;
    private generator;
    createProject(name: string): Promise<void>;
    createStructure(structure: StructureType): Promise<void>;
    createCommand(file: string): Promise<void>;
    createEvent(slappeyFile: string): Promise<void>;
    getPrompter(): Prompter;
    getFileSystem(): FileSystem;
    getManager(): PackageManager;
    getGenerator(): TemplateGenerator;
}
//# sourceMappingURL=Scaffolder.d.ts.map