setTitle("Fib, Trib, Pell f");
addCallGraphs(calcFibonacci(11).div, calcPell(11).div, calcTribonacci(11).div);
var style = document.createElement('style');
style.textContent = getCssStyles();
document.head.appendChild(style);

/*********************************************************************
 *                           FUNCTIONS                               *
 *********************************************************************/
//--------------------------------------------------------------------
//
//  Set the title of the document.
//
//--------------------------------------------------------------------
function setTitle(title)
{
    document.title = title;
}

//--------------------------------------------------------------------
//
//  add divs to the DOM to hold the recursive function call graphs
//
//--------------------------------------------------------------------
function addCallGraphs(fibHTML, pellHTML, tribHTML)
{
    var fibDiv = document.createElement('div');
    fibDiv.className = "fibonacci-wrap";
    var fibH2 = document.createElement('h2');
    fibH2.textContent = "Call Graph for Fibonacci Sequence:";
    fibDiv.appendChild(fibH2);
    fibDiv.appendChild(fibHTML);
    
    var pellDiv = document.createElement('div');
    pellDiv.className = "pell-wrap";
    var pellH2 = document.createElement('h2');
    pellH2.textContent = "Call Graph for Pell Sequence:";
    pellDiv.appendChild(pellH2);
    pellDiv.appendChild(pellHTML);
    
    var tribDiv = document.createElement('div');
    tribDiv.className = "tribonacci-wrap";
    var tribH2 = document.createElement('h2');
    tribH2.textContent = "Call Graph for Tribonacci Sequence:";
    tribDiv.appendChild(tribH2);
    tribDiv.appendChild(tribHTML);
    
    var callGraphDiv = document.createElement('div');
    callGraphDiv.id = "call-graphs";
    callGraphDiv.appendChild(fibDiv);
    callGraphDiv.appendChild(pellDiv);
    callGraphDiv.appendChild(tribDiv);
    document.body.appendChild(callGraphDiv);
}

//--------------------------------------------------------------------
//
//  Recursively calculate the nth number in the fibonacci sequence 
//  while building a call-graph of the recursive function.
//
//--------------------------------------------------------------------
function calcFibonacci(n)
{
    var val;
    var currDiv = document.createElement('div');
    var p = document.createElement('p');
    currDiv.className = "fib";
    
    if(n < 2)
    {
        if(n === 0){ 
            val = 0;
        }
        else if (n===1){ 
            val = 1;
        }
        p.textContent = "fib(" + n + ") = " + val;
        currDiv.appendChild(p);
        return {'value': val, 'div': currDiv};
    }
    
    var left = calcFibonacci(n - 1);
    var right = calcFibonacci(n - 2);
    val = left.value + right.value;
    
    p.textContent = "fib(" + n + ") = " + val;
    left.div.className += " fib-left";
    right.div.className += " fib-right";
    
    currDiv.appendChild(p);
    currDiv.appendChild(left.div);
    currDiv.appendChild(right.div);
    
    return {'value': val, 'div': currDiv};
}

//--------------------------------------------------------------------
//
//  Recursively calculate the nth number in the pell sequence 
//  while building a call-graph of the recursion.
//
//--------------------------------------------------------------------
function calcPell(n)
{
    var val;
    var currDiv = document.createElement('div');
    var p = document.createElement('p');
    currDiv.className = "pell";
    
    if(n < 2)
    {
        if(n === 0){ 
            val = 0;
        }
        else if (n === 1){ 
            val = 1;
        }
        p.textContent = "pell(" + n + ") = " + val;
        currDiv.appendChild(p);
        return {'value': val, 'div': currDiv};
    }
    
    var left = calcPell(n - 1);
    var right = calcPell(n - 2);
    val = 2*left.value + right.value;
    
    p.textContent = "pell(" + n + ") = " + val;
    left.div.className += " pell-left";
    right.div.className += " pell-right";
    
    currDiv.appendChild(p);
    currDiv.appendChild(left.div);
    currDiv.appendChild(right.div);
    
    return {'value': val, 'div': currDiv};
}

//--------------------------------------------------------------------
//
//  Recursively calculate the nth number in the tribonacci sequence 
//  while building a call-graph of the recursive function.
//
//--------------------------------------------------------------------
function calcTribonacci(n)
{
    var val;
    var currDiv = document.createElement('div');
    var p = document.createElement('p');
    currDiv.className = "trib";
    
    if(n < 3)
    {
        if(n === 0)
        { 
            val = 0;
        }
        else if (n === 1)
        { 
            val = 0;
        }
        else if (n === 2)
        {
            val = 1;
        }
        p.textContent = "trib(" + n + ") = " + val;
        currDiv.appendChild(p);
        return {'value': val, 'div': currDiv};
    }
    
    var left = calcTribonacci(n - 1);
    var middle = calcTribonacci(n - 2);
    var right = calcTribonacci(n - 3);
    val = left.value + middle.value + right.value;
    
    p.textContent = "trib(" + n + ") = " + val;
    left.div.className += " trib-left";
    middle.div.className += " trib-middle";
    right.div.className += " trib-right";
    
    currDiv.appendChild(p);
    currDiv.appendChild(left.div);
    currDiv.appendChild(middle.div);
    currDiv.appendChild(right.div);
    
    return {'value': val, 'div': currDiv};
}

//--------------------------------------------------------------------
//
//  CSS Styles
//
//--------------------------------------------------------------------
function getCssStyles()
{
    var styles =
        ".fib, .pell, .trib" +
        "{" +
        "display: inline-block;" +
        "white-space: nowrap;" +
        "text-align: center;" +
        "vertical-align: top;" +
        "font-size: 12px;" +
        "font-family: monospace;" +
        "}" +
        ".fib-left, .pell-left, .trib-left, .trib-middle" +
        "{" +
        "margin-right: 5px;" +
        "}" +
        ".fib p, .pell p, .trib p" + 
        "{" +
        "padding: 3px;" +
        "}" +
        ".fib" +
        "{" +
        "background-color: rgba(0,100,255,0.09);" +
        "}" +
        ".pell" +
        "{" +
        "background-color: rgba(255,50,0,0.09);" +
        "}" +
        ".trib" +
        "{" +
        "background-color: rgba(100, 10, 255, 0.09);" +
        "}" +
        "h2" +
        "{" +
        "font-family: Arial;" +
        "font-size: 32px;" +
        "color: #333333;" +
        "}";
    return styles;
}