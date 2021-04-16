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
exports.Prompter = void 0;
const prompts_1 = __importDefault(require("prompts"));
const questions_1 = require("./utils/questions");
class Prompter {
    language() {
        return __awaiter(this, void 0, void 0, function* () {
            const { language: answer } = yield prompts_1.default(questions_1.languageSelect);
            return answer;
        });
    }
    packageManager() {
        return __awaiter(this, void 0, void 0, function* () {
            const { packageManager: answer } = yield prompts_1.default(questions_1.packageManager);
            return answer;
        });
    }
    command() {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, category } = yield prompts_1.default(questions_1.getCommandPrompt);
            return { name, category };
        });
    }
    event() {
        return __awaiter(this, void 0, void 0, function* () {
            const { events } = yield prompts_1.default(questions_1.eventGenerate);
            return events;
        });
    }
    credentials() {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, prefix } = yield prompts_1.default(questions_1.getCredentials);
            return { token, prefix };
        });
    }
    getChoice() {
        return __awaiter(this, void 0, void 0, function* () {
            const { option, data } = yield prompts_1.default(questions_1.questions);
            return [option, data];
        });
    }
    static getPrompter() {
        if (!Prompter.instance) {
            Prompter.instance = new Prompter();
        }
        return Prompter.instance;
    }
}
exports.Prompter = Prompter;
