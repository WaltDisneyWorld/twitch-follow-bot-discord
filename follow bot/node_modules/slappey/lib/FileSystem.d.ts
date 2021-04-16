import { Initializer, SlappeyConfig, FileSystemManager } from "./utils/index";
export declare class FileSystem implements FileSystemManager, Initializer {
    private static instance;
    private language;
    private config;
    private CURRENT_DIR;
    initialize(config?: SlappeyConfig): Promise<void>;
    createConfig(config: SlappeyConfig): Promise<void>;
    createProjectDirectory(name: string): Promise<string>;
    createSourceDirectory(name: string): Promise<string>;
    createEntryFile(filePath: string): Promise<void>;
    createDirectory(name: string): Promise<void>;
    createFile(filePath: string, data: string): Promise<void>;
    findFile(filePath: string): Promise<void>;
    getFileToJson(filePath: string): Promise<SlappeyConfig>;
    getCurrentDir(): string;
    updatePackageJson(basePath: string): Promise<void>;
    exists(filePath: string): Promise<boolean>;
    static getFileSystem(): FileSystem;
}
//# sourceMappingURL=FileSystem.d.ts.map