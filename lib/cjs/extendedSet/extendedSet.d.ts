/** Class representing an extended set data structure.
 * It includes some extra methods like union, intersection, subset and difference.
 */
export default class ExtendedSet extends Set {
    /**
     * Given two sets, this returns a new set with elements from both the given sets
     * @param otherSet set to union
     * @return union of provided sets
     */
    union(otherSet: any): any;
    /**
     * Given two sets, this returns a new set with the elements that exist in both sets
     * @param otherSet set to union
     * @return union of provided sets
     */
    intersection(otherSet: any): any;
    /**
     * Given two sets, this returns a new set with all the elements that exist in the first set and do not exist in the second set
     * @param otherSet set to union
     * @return filtered first set with excluded elements from the second
     */
    difference(otherSet: any): any;
    /**
     * his confirms whether a given set is a subset of another set
     * @param otherSet set to union
     * @return is given set is a subset of another one
     */
    subset(otherSet: any): boolean;
}
