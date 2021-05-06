let TRUE = 1;
let FALSE = 0;


function negation(p)
{
    if (p == TRUE)
        return FALSE;
    return TRUE;
}

/*
p  q  -  p || q
0  0     0
0  1     1
1  0     1
1  1     0
*/
function excl_or(p,q) {
    if (p != q)
        return TRUE;
    return FALSE;
}

/*
p  q  -  p || q
0  0     0
0  1     1
1  0     1
1  1     1
*/
function incl_or(p,q) {
    if (p || q)
        return TRUE;
    return FALSE;
}

/*
p  q  -  p && q
0  0     0
0  1     0
1  0     0
1  1     1
*/
function and(p,q) {
    if (p && q)
        return TRUE;
    return FALSE;
}

/*
p  q  -  p -> q
0  0     1
0  1     1
1  0     0
1  1     1
*/
function implication(p,q) {
    if (p && !q)
        return FALSE;
    return TRUE;
}

/*
p  q  -  p <-> q
0  0     1
0  1     0
1  0     0
1  1     1
*/
function equivalence(p,q) {
    if (p == q)
        return TRUE;
    return FALSE;
}








