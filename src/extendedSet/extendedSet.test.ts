import { describe, expect, test } from "@jest/globals";
import extendedSet from "./extendedSet";

describe("extendedSet", () => {
  const set = new extendedSet();
  const otherSet = new extendedSet();
  set.add("a");
  set.add("b");
  otherSet.add("a");
  otherSet.add("b");
  otherSet.add("c");

  test("union", () => {
    const result = set.union(otherSet);

    expect(result.size).toBe(3);
    expect(result.has("a") && result.has("b") && result.has("c")).toBe(true);
  });

  test("intersection", () => {
    const result = set.intersection(otherSet);

    expect(result.size).toBe(2);
    expect(result.has("a")).toBe(true);
    expect(result.has("b")).toBe(true);
    expect(result.has("c")).toBe(false);
  });

  test("subset: false", () => {
    const result = otherSet.subset(set);

    expect(result).toBe(false);
  });

  test("subset: true", () => {
    const result = set.subset(otherSet);

    expect(result).toBe(true);
  });

  test("difference", () => {
    const result = otherSet.difference(set);

    expect(result.size).toBe(1);
    expect(result.has("a")).toBe(false);
    expect(result.has("b")).toBe(false);
    expect(result.has("c")).toBe(true);
  });
});
