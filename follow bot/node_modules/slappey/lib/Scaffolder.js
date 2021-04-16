"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scaffolder = void 0;
const path_1 = __importDefault(require("path"));
const Manager_1 = require("./Manager");
const Prompter_1 = require("./Prompter");
const TemplateGenerator_1 = require("./TemplateGenerator");
const FileSystem_1 = require("./FileSystem");
class Scaffolder {
    constructor() {
        this.prompter = Prompter_1.Prompter.getPrompter();
        this.fileSystem = FileSystem_1.FileSystem.getFileSystem();
        this.manager = Manager_1.PackageManager.getPackageManager();
        this.generator = TemplateGenerator_1.TemplateGenerator.getTemplateGenerator();
    }
    createProject(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const language = yield this.prompter.language();
            const manager = yield this.prompter.packageManager();
            const { token, prefix } = yield this.prompter.credentials();
            const config = { name, language, manager, token, prefix };
            const basePath = path_1.default.join(this.fileSystem.getCurrentDir(), name);
            yield this.fileSystem.initialize(config);
            yield this.fileSystem.createProjectDirectory(name);
            yield this.fileSystem.createConfig(config);
            yield this.manager.initialize(config, basePath);
            yield this.manager.setup();
            yield this.generator.initialize(language);
            const srcPath = yield this.fileSystem.createSourceDirectory(name);
            yield this.fileSystem.createEntryFile(srcPath);
            yield this.generator.generateUtilities(srcPath);
            yield this.fileSystem.updatePackageJson(basePath);
        });
    }
    createStructure(structure) {
        return __awaiter(this, void 0, void 0, function* () {
            const dir = this.fileSystem.getCurrentDir();
            const file = path_1.default.join(dir, "slappey.json");
            yield this.fileSystem.findFile(file);
            return structure === "command"
                ? this.createCommand(file)
                : this.createEvent(file);
        });
    }
    createCommand(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const dir = this.fileSystem.getCurrentDir();
            const { name, category } = yield this.prompter.command();
            const categoryDir = path_1.default.join(dir, "src", "commands", category);
            const { language } = yield this.fileSystem.getFileToJson(file);
            yield this.generator.initialize(language);
            const exists = yield this.fileSystem.exists(categoryDir);
            if (exists) {
                yield this.generator.generateCommand(categoryDir, name, category);
            }
            else {
                // Create Directory
                yield this.fileSystem.createDirectory(categoryDir);
                // Create Command
                yield this.generator.generateCommand(categoryDir, name, category);
            }
        });
    }
    createEvent(slappeyFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const dir = this.fileSystem.getCurrentDir();
            const events = yield this.prompter.event();
            const eventsDir = path_1.default.join(dir, "src", "events");
            const { language } = yield this.fileSystem.getFileToJson(slappeyFile);
            yield this.generator.initialize(language);
            const exists = yield this.fileSystem.exists(eventsDir);
            if (!exists)
                yield this.fileSystem.createDirectory(eventsDir);
            return this.generator.generateEvents(events, eventsDir);
        });
    }
    getPrompter() {
        return this.prompter;
    }
    getFileSystem() {
        return this.fileSystem;
    }
    getManager() {
        return this.manager;
    }
    getGenerator() {
        return this.generator;
    }
}
exports.Scaffolder = Scaffolder;
