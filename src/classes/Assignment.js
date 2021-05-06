
/*
The assignment class represents a set of values being tested on formulas
attribues:
    - values: an array of integers, either 1 or 0. The length of the array corresponds to the number of variables in the formula
*/
class Assignment {
    constructor(val) {
        this.values = new Array(val);
    }
}