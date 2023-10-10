/** Class representing an extended set data structure.
 * It includes some extra methods like union, intersection, subset and difference.
 */
export default class ExtendedSet extends Set {
  /**
   * Given two sets, this returns a new set with elements from both the given sets
   * @param otherSet set to union
   * @return union of provided sets
   */
  union(otherSet: any): any {
    let unionSet = new ExtendedSet();

    for (let x of otherSet) {
      unionSet.add(x);
    }

    for (let x of this.values()) {
      unionSet.add(x);
    }

    return unionSet;
  }

  /**
   * Given two sets, this returns a new set with the elements that exist in both sets
   * @param otherSet set to union
   * @return union of provided sets
   */
  intersection(otherSet: any): any {
    let intersectionSet = new ExtendedSet();

    for (let x of this.values()) {
      if (otherSet.has(x)) {
        intersectionSet.add(x);
      }
    }

    return intersectionSet;
  }

  /**
   * Given two sets, this returns a new set with all the elements that exist in the first set and do not exist in the second set
   * @param otherSet set to union
   * @return filtered first set with excluded elements from the second
   */
  difference(otherSet: any): any {
    let differenceSet = new ExtendedSet();

    for (let x of this.values()) {
      if (!otherSet.has(x)) {
        differenceSet.add(x);
      }
    }

    return differenceSet;
  }

  /**
   * his confirms whether a given set is a subset of another set
   * @param otherSet set to union
   * @return is given set is a subset of another one
   */
  subset(otherSet: any): boolean {
    if (this.size > otherSet.size) {
      return false;
    }

    for (let x of this.values()) {
      if (!otherSet.has(x)) {
        return false;
      }
    }

    return true;
  }
}
