#!/usr/bin/env node
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
exports.handleChoice = exports.main = void 0;
const index_1 = require("./utils/index");
const utils_1 = require("./utils");
const Scaffolder_1 = require("./Scaffolder");
const Prompter_1 = require("./Prompter");
function main(scaffolder, prompter) {
    return __awaiter(this, void 0, void 0, function* () {
        const args = process.argv.slice(2);
        if (args.length === 0) {
            const answer = yield prompter.getChoice();
            return handleChoice(scaffolder, ...answer);
        }
        else if (args.length === 2)
            return handleChoice(scaffolder, ...args);
    });
}
exports.main = main;
function handleChoice(scaffolder, action, data) {
    if (utils_1.checkOptionType(action)) {
        if (action === "new")
            return scaffolder.createProject(data);
        if (index_1.checkStructType(data)) {
            const structure = data;
            return scaffolder.createStructure(structure);
        }
        throw new Error("Invalid Structure");
    }
    else
        throw new Error("Invalid Action");
}
exports.handleChoice = handleChoice;
main(new Scaffolder_1.Scaffolder(), new Prompter_1.Prompter());
