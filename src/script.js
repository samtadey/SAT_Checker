//
// ->  |  &  -  <-> 
// Symbols being used in the program
//
let formula = "-(p & q) -> r";
let truth, var_map, num_var, rows, cols, logic, f_parsed;

logic = create_logic_map();
console.log(logic);

let usemapexample = logic.get("|")(1,0);
console.log(usemapexample);
usemapexample = logic.get("&")(1,0);
console.log(usemapexample);

usemapexample = logic.get("&");
console.log(usemapexample(1,0));

console.log(formula);
f_parsed = parse_formula(formula);
console.log(f_parsed);

//
//find the number of variables in the equation
//
//num_var = num_variables(formula);


//
//find unique variables in equation
//
var_map = map_variables(formula);
console.log(var_map);
rows = Math.pow(2, var_map.size);
cols = var_map.size;
//
//create shell for truth table
//
truth = init_truth(rows, cols);

//
//set variable values
//
set_truth_values(truth, rows, cols);
console.log(truth);

//testing solve
let answer = solve(truth, 0, var_map, f_parsed);
console.log(answer);

for (let i = 0; i < rows; i++)
{
    answer = solve(truth, i, var_map, f_parsed);
    if (answer == 1)
    {
        let combination = "";
        //print out successful combination
        var_map.forEach(function(value, key) {
            combination += key + ":" + truth[i][value] + " ";
        })
        console.log(combination);
    }
}



//
//function will solve the equation given the input variables
//
function solve(truth, row, var_map, item) {
    let func, a, b;
    //base case
    //console.log(item);
    if (item == null || item == undefined)
        return "error null";


    //real base case
    if (!Array.isArray(item))
    {
        if (var_map.has(item)) //if variable found get the current value to try for that variable
            return truth[row][var_map.get(item)];
        else if (logic.has(item)) //if operation found
            return logic.get(item);
    }

    //2 item array is negation
    if (item.length == 2)
    {
        func = solve(truth, row, var_map, item[0]);
        a = solve(truth, row, var_map, item[1]);
        //return !a;
        return func(a);
    }
    //3 item array is other
    else if (item.length == 3)
    {
        func = solve(truth, row, var_map, item[0])
        a = solve(truth, row, var_map, item[1])
        b = solve(truth, row, var_map, item[2])

        return func(a,b);
    }
    return "recursion issue";
}

function find_all_sln()
{

}

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

function create_logic_map()
{
    let logic = new Map();
    logic.set("-", negation);
    logic.set("&", and);
    logic.set("|", incl_or);
    logic.set("xor", excl_or);
    logic.set("->", implication);
    logic.set("<->", equivalence);

    return logic;
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
