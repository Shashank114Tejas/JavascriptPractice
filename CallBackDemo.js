function add(a,b)
{
    return a+b;
}

function multiply(a,b)
{
    return a*b;
}

function doAction(opeartion,a,b)
{
    return opeartion(a,b)
}

console.log(doAction(add,10,20));