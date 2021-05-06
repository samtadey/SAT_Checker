
class FormulaSet {
    constructor(vars, num_formulas) {
        this.vars = vars;
        this.formulas = new Array(num_formulas);
    };

    /*
    Add formulas to the formula set array
    */
    setFormulas(formulas) {
        //formulas start at index 1
        for (let i = 0; i < this.formulas.length; i++)
            this.formulas[i] = new Formula(formulas[i+1]);
    }

    // addFormula(formula) {
    //     this.formulas.push(new Formula(formula));
    // }

    /*
    Iterates through all of the formulas with an assignment. If all formulas are satisfied the set is satisfied. If any formulas are not satisfied
    the entire set is not satisfied.
    */
    isSatisfiedBy(assignment) {
        for (let i = 0; i < this.formulas.length; i++)  
            if (!this.formulas[i].isSatisfiedBy(assignment))
                return false;
        return true;
    }
}