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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageManager = void 0;
const child_process_1 = require("child_process");
class PackageManager {
    initialize(config, filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.config = config;
            this.filePath = filePath;
            this.prefix = this.config.manager === "npm" ? "npm i" : "yarn add";
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config)
                throw new Error("Config Not Initialized.");
            return this.config.manager === "npm"
                ? this.initializeNPM()
                : this.initializeYarn();
        });
    }
    initializeNPM() {
        var _a;
        child_process_1.execSync(`${(_a = this.config) === null || _a === void 0 ? void 0 : _a.manager} init -y`, { cwd: this.filePath });
        return this.installDependencies();
    }
    initializeYarn() {
        var _a;
        child_process_1.execSync(`${(_a = this.config) === null || _a === void 0 ? void 0 : _a.manager} init -y`, { cwd: this.filePath });
        return this.installDependencies();
    }
    installDependencies() {
        var _a;
        this.installDiscordJS();
        this.installNodemon();
        if (((_a = this.config) === null || _a === void 0 ? void 0 : _a.language) === "typescript") {
            this.installTypes();
        }
    }
    installTypes() {
        this.installTypescript();
        this.installNodeTypes();
    }
    installTypescript() {
        return child_process_1.execSync(`${this.prefix} -D typescript`, {
            cwd: this.filePath,
            stdio: "ignore",
        });
    }
    installNodeTypes() {
        return child_process_1.execSync(`${this.prefix} -D @types/node`, {
            cwd: this.filePath,
            stdio: "ignore",
        });
    }
    installDiscordJS() {
        return child_process_1.execSync(`${this.prefix} discord.js@latest`, {
            cwd: this.filePath,
            stdio: "ignore",
        });
    }
    installNodemon() {
        return child_process_1.execSync(`${this.prefix} -D nodemon`, {
            cwd: this.filePath,
            stdio: "ignore",
        });
    }
    static getPackageManager() {
        if (!PackageManager.instance) {
            PackageManager.instance = new PackageManager();
        }
        return PackageManager.instance;
    }
}
exports.PackageManager = PackageManager;
