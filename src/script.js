//
// ->  |  &  -  <-> 
// Symbols being used in the program
//
let formula = "-(p & q) -> r";
let truth, num_var, rows, cols;

console.log(formula);
let test = parse_formula(formula);
console.log(test);

//
//find the number of variables in the equation
//
num_var = num_variables(formula);
rows = Math.pow(2, num_var);
cols = num_var;

//
//create shell for truth table
//
truth = init_truth(rows, cols);

//
//set variable values
//
set_truth_values(truth, rows, cols);
console.log(truth);

//
//complete the truth table
//

// function solve(arr) {
//     if (!arr || arr.length == 0)
//         return;
    
// }


// function operation(arr) {
//     if (!arr || arr.length == 0)
//         return;
//     if (arr[0].length == 1 && arr[0] == '->')
//         implication(arr[1], arr[2]);
//     if ()
// }

//if '->' then implication()


function change_val(val)
{
    if (val == TRUE)
        return FALSE;
    return TRUE;
}

function num_variables(formula)
{
    let charcode;
    let varset = new Set()
    for (let i = 0; i < formula.length; i++)
    {
        charcode = formula.charCodeAt(i);
        //ascii letters
        if ((charcode > 64 && charcode < 91) || (charcode > 96 && charcode < 123))
            varset.add(formula.charAt(i));
    }
    
    return varset.size;
}

function init_truth(rows, cols)
{
    truth = new Array(rows);
    for (let i = 0; i < truth.length; i++)
        truth[i] = new Array(cols);
    return truth;
}


function set_truth_values(truth, rows, cols)
{
    let val = FALSE;
    let sep = 1;
    let cur;
    //start in reverse
    for (let i = cols - 1; i > -1; i--)
    {
        cur = 0;
        for (let j = 0; j < rows; j++)
        {
            truth[j][i] = val;
            if (++cur == sep)
            {
                val = change_val(val);
                cur = 0;
            }

        }
        sep *= 2;
    }
}
