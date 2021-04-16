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
exports.TemplateGenerator = void 0;
const path_1 = __importDefault(require("path"));
const FileSystem_1 = require("./FileSystem");
const index_1 = require("./utils/index");
const templates_1 = require("./templates/templates");
const Logger_1 = require("./Logger");
const events_1 = __importDefault(require("./templates/events"));
const tsevents_1 = __importDefault(require("./templates/tsevents"));
const eventsJS = events_1.default;
const eventsTS = tsevents_1.default;
class TemplateGenerator {
    constructor() {
        this.fileSystem = FileSystem_1.FileSystem.getFileSystem();
        this.logger = Logger_1.SimpleLogger.getSimpleLogger();
    }
    initialize(language) {
        return __awaiter(this, void 0, void 0, function* () {
            this.language = language;
        });
    }
    generateUtilities(srcPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { utils, structures, test, ready, message, client } = this.getPaths(srcPath);
            yield this.generateDirectories(srcPath);
            yield this.generateRegistry(utils);
            if (this.language === "typescript")
                yield this.generateClient(client);
            yield this.generateBaseCommand(structures);
            yield this.generateBaseEvent(structures);
            yield this.generateTestCommand(test);
            yield this.generateReadyEvent(ready);
            yield this.generateMessageEvent(message);
        });
    }
    getPaths(srcPath) {
        const utils = path_1.default.join(srcPath, "utils");
        const structures = path_1.default.join(utils, "structures");
        const commands = path_1.default.join(srcPath, "commands");
        const events = path_1.default.join(srcPath, "events");
        const client = path_1.default.join(srcPath, "client");
        const test = path_1.default.join(commands, "test");
        const ready = path_1.default.join(events, "ready");
        const message = path_1.default.join(events, "message");
        return {
            commands,
            utils,
            structures,
            test,
            ready,
            message,
            events,
            client,
        };
    }
    generateClient(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const template = templates_1.getTypescriptBotFile();
            const file = path_1.default.join(filePath, "client.ts");
            yield this.fileSystem.createFile(file, template);
        });
    }
    generateDirectories(basePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const { utils, structures, commands, events, test, ready, client, message, } = this.getPaths(basePath);
            this.logger.info("Generating Directories...");
            yield this.fileSystem.createDirectory(utils);
            this.logger.success("Created Utilities Directory");
            yield this.fileSystem.createDirectory(structures);
            this.logger.success("Created Structures Directory");
            if (this.language === "typescript") {
                yield this.fileSystem.createDirectory(client);
                this.logger.success("Created Client Directory");
            }
            yield this.fileSystem.createDirectory(commands);
            this.logger.success("Created Commands Directory");
            yield this.fileSystem.createDirectory(events);
            this.logger.success("Created Events Directory");
            yield this.fileSystem.createDirectory(test);
            this.logger.success("Created TestCommand Directory");
            yield this.fileSystem.createDirectory(ready);
            this.logger.success("Created ReadyEvent Directory");
            yield this.fileSystem.createDirectory(message);
            this.logger.success("Created MessageEvent Directory");
        });
    }
    generateRegistry(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const isJs = this.language === "javascript";
            const template = isJs ? templates_1.getRegistryFile() : templates_1.getRegistryFileTS();
            const extension = isJs ? "js" : "ts";
            const file = path_1.default.join(filePath, `registry.${extension}`);
            return this.fileSystem.createFile(file, template);
        });
    }
    generateBaseCommand(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const isJs = this.language === "javascript";
            const template = isJs ? templates_1.getBaseCommand() : templates_1.getBaseCommandTS();
            const extension = isJs ? "js" : "ts";
            const file = path_1.default.join(filePath, `BaseCommand.${extension}`);
            yield this.fileSystem.createFile(file, template);
        });
    }
    generateBaseEvent(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const isJs = this.language === "javascript";
            const template = isJs ? templates_1.getBaseEvent() : templates_1.getBaseEventTS();
            const extension = isJs ? "js" : "ts";
            const file = path_1.default.join(filePath, `BaseEvent.${extension}`);
            yield this.fileSystem.createFile(file, template);
        });
    }
    generateTestCommand(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const isJs = this.language === "javascript";
            const template = isJs ? templates_1.getTestCommand() : templates_1.getTestCommandTS();
            const extension = isJs ? "js" : "ts";
            const file = path_1.default.join(filePath, `TestCommand.${extension}`);
            yield this.fileSystem.createFile(file, template);
        });
    }
    generateReadyEvent(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const isJs = this.language === "javascript";
            const template = isJs ? templates_1.getReadyEvent() : templates_1.getReadyEventTS();
            const extension = isJs ? "js" : "ts";
            const file = path_1.default.join(filePath, `ReadyEvent.${extension}`);
            yield this.fileSystem.createFile(file, template);
        });
    }
    generateMessageEvent(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const isJs = this.language === "javascript";
            const template = isJs ? templates_1.getMessageEvent() : templates_1.getMessageEventTS();
            const extension = isJs ? "js" : "ts";
            const file = path_1.default.join(filePath, `MessageEvent.${extension}`);
            yield this.fileSystem.createFile(file, template);
        });
    }
    generateCommand(categoryPath, name, category) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.language)
                throw new Error("Language was not set");
            const fileName = index_1.getCommandName(name, this.language);
            const filePath = path_1.default.join(categoryPath, fileName);
            const exists = yield this.fileSystem.exists(filePath);
            if (!exists) {
                const isJs = this.language === "javascript";
                const template = isJs
                    ? templates_1.getCommandTemplate(name, category)
                    : templates_1.getCommandTemplateTS(name, category);
                return this.fileSystem.createFile(filePath, template);
            }
            throw new Error(`${filePath} already exists.`);
        });
    }
    generateEvents(events, eventsDir) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.language)
                throw new Error("Language was not set");
            for (const event of events) {
                const fileName = index_1.getEventName(event, this.language);
                const filePath = path_1.default.join(eventsDir, fileName);
                const exists = yield this.fileSystem.exists(filePath);
                const template = this.getTemplate(event);
                if (!exists) {
                    yield this.fileSystem.createFile(filePath, template);
                }
            }
        });
    }
    getTemplate(event) {
        return this.language === "javascript" ? eventsJS[event] : eventsTS[event];
    }
    static getTemplateGenerator() {
        if (!TemplateGenerator.instance) {
            TemplateGenerator.instance = new TemplateGenerator();
        }
        return TemplateGenerator.instance;
    }
    getFileSystem() {
        return this.fileSystem;
    }
    getLogger() {
        return this.logger;
    }
    getLanguage() {
        return this.language;
    }
}
exports.TemplateGenerator = TemplateGenerator;
