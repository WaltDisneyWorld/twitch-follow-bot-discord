"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
class SimpleLogger {
    success(message) {
        console.log(`${log_symbols_1.default.success} ${chalk_1.default.greenBright.bold(message)}`);
    }
    error(message) {
        console.log(`${log_symbols_1.default.error} ${chalk_1.default.redBright.bold(message)}`);
    }
    warning(message) {
        console.log(`${log_symbols_1.default.warning} ${chalk_1.default.gray.bold(message)}`);
    }
    info(message) {
        console.log(chalk_1.default.redBright.bold(`${log_symbols_1.default.info} ${message}`));
    }
    static getSimpleLogger() {
        if (!SimpleLogger.instance) {
            SimpleLogger.instance = new SimpleLogger();
        }
        return SimpleLogger.instance;
    }
}
exports.SimpleLogger = SimpleLogger;
