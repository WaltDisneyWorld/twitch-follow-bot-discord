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
exports.FileSystem = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const index_1 = require("./utils/index");
const templates_1 = require("./templates/templates");
class FileSystem {
    constructor() {
        this.CURRENT_DIR = process.cwd();
    }
    initialize(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.language = config === null || config === void 0 ? void 0 : config.language;
            this.config = config;
        });
    }
    createConfig(config) {
        return fs_1.promises.writeFile(path_1.default.join(this.CURRENT_DIR, config.name, "slappey.json"), JSON.stringify(config, null, 2));
    }
    createProjectDirectory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = path_1.default.join(this.CURRENT_DIR, name);
            yield fs_1.promises.mkdir(filePath);
            return filePath;
        });
    }
    createSourceDirectory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = path_1.default.join(this.CURRENT_DIR, name, "src");
            yield fs_1.promises.mkdir(filePath);
            return filePath;
        });
    }
    createEntryFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const extension = this.language === "javascript" ? "js" : "ts";
            const template = extension === "js" ? templates_1.getMainFile() : templates_1.getMainFileTS();
            return fs_1.promises.writeFile(path_1.default.join(filePath, `index.${extension}`), template);
        });
    }
    createDirectory(name) {
        return fs_1.promises.mkdir(name);
    }
    createFile(filePath, data) {
        return fs_1.promises.writeFile(filePath, data);
    }
    findFile(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.access(filePath);
            }
            catch (err) {
                throw new Error(`${filePath} was not found. Please make sure you're inside a Slappey project.`);
            }
        });
    }
    getFileToJson(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield fs_1.promises.readFile(filePath, "utf8");
            const json = JSON.parse(text);
            return json;
        });
    }
    getCurrentDir() {
        return this.CURRENT_DIR;
    }
    updatePackageJson(basePath) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config || !this.language)
                throw new Error("Config not initialized.");
            const packageJson = path_1.default.join(basePath, "package.json");
            const encoding = "utf8";
            const buffer = yield fs_1.promises.readFile(packageJson, encoding);
            const json = JSON.parse(buffer);
            json.scripts = index_1.getPackageScripts(this.language);
            return fs_1.promises.writeFile(packageJson, JSON.stringify(json, null, 2));
        });
    }
    exists(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.access(filePath);
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    static getFileSystem() {
        if (!FileSystem.instance) {
            FileSystem.instance = new FileSystem();
        }
        return FileSystem.instance;
    }
}
exports.FileSystem = FileSystem;
