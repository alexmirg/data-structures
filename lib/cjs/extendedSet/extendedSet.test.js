"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const extendedSet_1 = __importDefault(require("./extendedSet"));
(0, globals_1.describe)("extendedSet", () => {
    const set = new extendedSet_1.default();
    const otherSet = new extendedSet_1.default();
    set.add("a");
    set.add("b");
    otherSet.add("a");
    otherSet.add("b");
    otherSet.add("c");
    (0, globals_1.test)("union", () => {
        const result = set.union(otherSet);
        (0, globals_1.expect)(result.size).toBe(3);
        (0, globals_1.expect)(result.has("a") && result.has("b") && result.has("c")).toBe(true);
    });
    (0, globals_1.test)("intersection", () => {
        const result = set.intersection(otherSet);
        (0, globals_1.expect)(result.size).toBe(2);
        (0, globals_1.expect)(result.has("a")).toBe(true);
        (0, globals_1.expect)(result.has("b")).toBe(true);
        (0, globals_1.expect)(result.has("c")).toBe(false);
    });
    (0, globals_1.test)("subset: false", () => {
        const result = otherSet.subset(set);
        (0, globals_1.expect)(result).toBe(false);
    });
    (0, globals_1.test)("subset: true", () => {
        const result = set.subset(otherSet);
        (0, globals_1.expect)(result).toBe(true);
    });
    (0, globals_1.test)("difference", () => {
        const result = otherSet.difference(set);
        (0, globals_1.expect)(result.size).toBe(1);
        (0, globals_1.expect)(result.has("a")).toBe(false);
        (0, globals_1.expect)(result.has("b")).toBe(false);
        (0, globals_1.expect)(result.has("c")).toBe(true);
    });
});
