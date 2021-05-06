
/*
 The Formula class represents one formula in a set of formulas.
    - values: an array if positive and negative integers
        Positive integers are normal formula values, negative are negated formula values
*/
class Formula {
    constructor(formula) {
        this.values = formula;
    }

    /*
    This function iterates through the formula and compares them to assigned values.
    Since CNF input is disjuctive between variables in formulas, any true evaluation indicates that the formula
    is satisfied by the set. If matches aren't found the formula is not satisfied.
    */
    isSatisfiedBy(assignment) {
        //values [1,-5,3]
        //assignment eg [0,0,1,1,0]
        let idx;
        for (let i = 0; i < this.values.length; i++)
        {
            //get index to look at
            idx = Math.abs(this.values[i]) - 1;
            if (assignment.values[idx] > 0 && this.values[i] > 0) //if assignment is true and value is true
                return true;
            if (assignment.values[idx] < 1 && this.values[i] < 0) //if assignment is false and value is negated, therefore true
                return true;
        }
        return false;
    }
}