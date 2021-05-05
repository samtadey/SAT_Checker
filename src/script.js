//test equations
//
// -(p & q) -> r
// (-(p & q) <-> (r | s))
// p & -p
// ((-p | q) + -(r & s)) <-> i


function run()
{
    let truth, var_map, results, rows, cols, logic, f_parsed;
    
    logic = create_logic_map();
    formula = getInput();
    f_parsed = parse_formula(formula);

    //find unique variables in equation
    var_map = map_variables(formula);
    rows = Math.pow(2, var_map.size);
    cols = var_map.size;

    //create truth table shell
    truth = init_truth(rows, cols);

    //create base truth table
    set_truth_values(truth, rows, cols);

    results = all_solutions(truth, var_map, f_parsed, logic);
    
    //create table with successes
    create_results(var_map, results);
}

/*
Retrieve user input
*/
function getInput()
{
    let test = document.getElementById("input").value;
    return test;
}

/*
AA
*/
function create_results(var_map, matrix) {

    let table, row, cell, text, s = 0;
    table = document.getElementById("results");

    //clear previous results
    table.innerHTML = '';

    row = table.insertRow();
    //set table header
    var_map.forEach(function(value, key) {
        cell = document.createElement("th");
        text = document.createTextNode(key);
        cell.appendChild(text);
        row.appendChild(cell);
    })

    for (let i = 0; i < matrix.length; i++)
    {
        row = table.insertRow();
        for (let j = 0; j < matrix[i].length; j++)
        {
            cell = document.createElement("td");
            text = document.createTextNode(matrix[i][j]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
    }
}







/*

*/
// function num_variables(formula)
// {
//     let charcode;
//     let varset = new Set()
//     for (let i = 0; i < formula.length; i++)
//     {
//         charcode = formula.charCodeAt(i);
//         //ascii letters
//         if ((charcode > 64 && charcode < 91) || (charcode > 96 && charcode < 123))
//             varset.add(formula.charAt(i));
//     }
    
//     return varset.size;
// }

/*
- input : formula as a string
- return: map 
    - key: variable character
    - value: variable id

This function traverses the string and identifies the unique variables in the formula.
The map is used to related variables to the truth table
*/


// if (parse_isatpos(txt,pos,"&")===true) { op="&"; pos++; } 
// else if (parse_isatpos(txt,pos,"and")===true) { op="&"; pos+=3; }
// else if (parse_isatpos(txt,pos,"+")===true) { op="+"; pos++; }
// else if (parse_isatpos(txt,pos,"xor")===true) { op="+"; pos+=3; }
// else if (parse_isatpos(txt,pos,"|")===true) { op="V"; pos++; }
// else if (parse_isatpos(txt,pos,"v")===true) { op="V"; pos++; }
// else if (parse_isatpos(txt,pos,"V")===true) { op="V"; pos++; }
// else if (parse_isatpos(txt,pos,"or")===true) { op="V"; pos+=3; }
// else if (parse_isatpos(txt,pos,"->")===true) { op="->"; pos+=2; }
// else if (parse_isatpos(txt,pos,"=>")===true) { op="->"; pos+=2; }
// else if (parse_isatpos(txt,pos,"<->")===true) { op="<->"; pos+=3; }
// else if (parse_isatpos(txt,pos,"<=>")===true) { op="<->"; pos+=3; }







