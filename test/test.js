
function test_core_logic() {

    let mtest = [
        [0,0], 
        [0,1],
        [1,0],
        [1,1]
    ];

    let exp = [
        [0],
        [0],
        [0],
        [1]
    ]

    let result;

    console.log("Testing Conjunction");
    result = loop_test2(mtest,exp,and);       
    console.log("Testing Conjunction: " + result);

    exp = [
        [0],
        [1],
        [1],
        [1]
    ]
    console.log("Testing Disjunction");
    result = loop_test2(mtest,exp,incl_or);       
    console.log("Testing Disjunction: " + result);

    exp = [
        [1],
        [1],
        [0],
        [1]
    ]
    console.log("Testing Implication")
    result = loop_test2(mtest,exp,implication);       
    console.log("Testing Implication: " + result);

    exp = [
        [1],
        [0],
        [0],
        [1]
    ]
    console.log("Testing Equivalence")
    result = loop_test2(mtest,exp,equivalence);       
    console.log("Testing Equivalence: " + result);

    mtest = [
        [0],
        [0],
        [1],
        [1],
    ]

    exp = [
        [1],
        [1],
        [0],
        [0]
    ]
    console.log("Testing Negation");
    result = loop_test1(mtest,exp,negation);       
    console.log("Testing Implication: " + result);

    //(a -> b) & a & -b // FALSE - checked with logictools.org

    //-(p & q) -> r // TRUE - checked with logictools.org

    // ((p | q) -> (-r & s)) <-> t // TRUE - checked with logictools.org

    // ((p | q) -> (-r & s)) <-> (t & -u) // TRUE - checked with logictools.org

}


function loop_test1(input, expected, func) {
    let res = true; ans = '';
    for (let i = 0; i < input.length; i++)
    {
        ans = func(input[i]);
        if (ans != expected[i])
            res = false;
        console.log("Function result: " + ans + " Expected Result: " + expected[i]);
    }
    return res;
}

//2 argument formulas
function loop_test2(input, expected, func) {
    let res = true, ans = '';
    for (let i = 0; i < input.length; i++)
    {
        ans = func(input[i][0], input[i][1])
        if (ans != expected[i][0])
            res = false;
        console.log("Function result: " + ans + " Expected Result: " + expected[i]);
        
    }
    return res;
}
