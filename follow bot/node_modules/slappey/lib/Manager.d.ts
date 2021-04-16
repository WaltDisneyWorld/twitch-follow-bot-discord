/// <reference types="node" />
import { Initializer, SlappeyConfig } from "./utils/index";
export declare class PackageManager implements Initializer {
    private static instance;
    private config;
    private prefix;
    private filePath;
    initialize(config: SlappeyConfig, filePath: string): Promise<void>;
    setup(): Promise<void>;
    initializeNPM(): void;
    initializeYarn(): void;
    installDependencies(): void;
    installTypes(): void;
    installTypescript(): Buffer;
    installNodeTypes(): Buffer;
    installDiscordJS(): Buffer;
    installNodemon(): Buffer;
    static getPackageManager(): PackageManager;
}
//# sourceMappingURL=Manager.d.ts.map