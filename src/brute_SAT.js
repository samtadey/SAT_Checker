/*
    input:
        truth: matrix with truth table values for the variables
        var_map: map with (key:variable, value: variable_id)
        f_parsed: formula to solved
        logic: logic symbols mapped to formulas
    return:
        results as a matrix
        returns successful combinations of variables used in the formula
*/
function all_solutions(truth, var_map, f_parsed, logic) {
    //let vals = "";
    let results_row;
    let results = new Array();
    for (let i = 0; i < truth.length; i++)
    {
        answer = solve(truth, i, var_map, f_parsed, logic);
        if (answer == 1)
        {
            results_row = new Array();
            //let combination = "";
            //print out successful combination
            var_map.forEach(function(value, key) {
                //combination += key + ":" + truth[i][value] + " ";
                //vals += key + ":" + truth[i][value] + " ";
                results_row.push(truth[i][value]);
            })
            //console.log(combination);
            //vals += "\n";
            results.push(results_row);
        }
    }
    return results;
}


/*
    input:
        truth: matrix with truth table values for the variables
        row: the row of the truth matrix being tested for satisfiability
        var_map: map with (key:variable, value: variable_id)
        item: current portion of formula being solved

    This function recursively solves a propositional formula.
    Returns true or false
*/
function solve(truth, row, var_map, item, logic) {
    let func, a, b;

    if (item == null || item == undefined)
        return "error null";

    //base case
    if (!Array.isArray(item))
    {
        if (var_map.has(item)) //if variable found get the current value to try for that variable
            return truth[row][var_map.get(item)];
        else if (logic.has(item)) //if operation found
            return logic.get(item);
    }
    //2 item array is negation
    else if (item.length == 2)
    {
        func = solve(truth, row, var_map, item[0], logic);
        a = solve(truth, row, var_map, item[1], logic);
        //return !a;
        return func(a);
    }
    //3 item array is other
    else if (item.length == 3)
    {
        func = solve(truth, row, var_map, item[0], logic)
        a = solve(truth, row, var_map, item[1], logic)
        b = solve(truth, row, var_map, item[2], logic)

        return func(a,b);
    }
    return "recursion issue";
}

function map_variables(formula)
{
    let charcode, varId = 0;
    let varMap = new Map()
    for (let i = 0; i < formula.length; i++)
    {
        charcode = formula.charCodeAt(i);
        //ascii letters
        if ((charcode > 64 && charcode < 91) || (charcode > 96 && charcode < 123))
        {
            if (!varMap.has(formula.charAt(i)))
                varMap.set(formula.charAt(i), varId++);
        }

    }
    
    return varMap;
}
