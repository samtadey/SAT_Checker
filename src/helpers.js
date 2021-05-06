let TRUE = 1;
let FALSE = 0;

/*
- input:
    rows: number of rows for the matrix
    cols: number of cols for the matrix
- return: Empty matrix with size rows * cols
*/
function init_truth(rows, cols)
{
    truth = new Array(rows);
    for (let i = 0; i < truth.length; i++)
        truth[i] = new Assignment(cols);
    return truth;
}

/*
- input:
    truth: empty truth table
    rows: rows in matrix
    cols: columns in matrix

The order that the values are assigned are shown below
The integer value in the matrix is the order that a value is assigned
    - start at the first value of the last column and travel row by row
[
    [7,4,1]
    [8,5,2]
    [9,6,3]
]
*/
function set_truth_values(truth, rows, cols)
{
    let val = FALSE;
    let sep = 1;
    let cur;

    for (let i = cols - 1; i > -1; i--)
    {
        cur = 0;
        for (let j = 0; j < rows; j++)
        {
            truth[j].values[i] = val;
            //truth[j][i] = val;
            if (++cur == sep)
            {
                val = change_val(val);
                cur = 0;
            }
        }
        sep *= 2;
    }
}

/*
- return: map relating user inputted logic characters to logic functions
        Logic functions are defined in logic.js
*/
function create_logic_map()
{
    let logic = new Map();
    logic.set("-", negation);
    logic.set("!", negation);
    logic.set("&", and);
    //or
    //logic.set("|", incl_or);
    logic.set("V", incl_or);
    logic.set("+", excl_or);
    logic.set("->", implication);
    logic.set("<->", equivalence);

    return logic;
}

/*
Changes the input value between 1 and 0
*/
function change_val(val)
{
    if (val == TRUE)
        return FALSE;
    return TRUE;
}

