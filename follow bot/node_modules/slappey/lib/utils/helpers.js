"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageScripts = exports.getEventName = exports.getCommandName = exports.checkStructType = exports.checkOptionType = exports.capitalize = void 0;
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
const checkOptionType = (arg) => ["new", "gen"].some((element) => element === arg);
exports.checkOptionType = checkOptionType;
const checkStructType = (arg) => ["command", "event"].some((element) => element === arg);
exports.checkStructType = checkStructType;
const getCommandName = (name, language) => language === "javascript"
    ? `${capitalize(name)}Command.js`
    : `${capitalize(name)}Command.ts`;
exports.getCommandName = getCommandName;
const getEventName = (name, language) => language === "javascript"
    ? `${capitalize(name)}Event.js`
    : `${capitalize(name)}Event.ts`;
exports.getEventName = getEventName;
const getPackageScripts = (language) => {
    const scripts = { dev: "", start: "", build: "" };
    scripts.dev =
        language === "typescript"
            ? "nodemon ./src/index.ts"
            : "nodemon ./src/index.js";
    scripts.start =
        language === "typescript" ? "node ./build/index.js" : "node ./src/index.js";
    scripts.build = language === "typescript" ? "tsc" : "";
    return scripts;
};
exports.getPackageScripts = getPackageScripts;
