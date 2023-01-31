// Q1
function add(num1,num2) {
    return num1 + num2 //you need to RETURN smth
}

console.log(add(3,5)) //to call smth

// Q2
// convert hours to secs ez
function convert(hour) {
    return hour * 3600
}

console.log(convert(2))

// Q3 : calculate the perimeter of rectanggol
function perimeter(length,width) {
    return 2 * (length + width) //PEMDAS works on this beaaaaaaatch
}

console.log(perimeter(20,10))

// Q4 calculator rectangle area, it's like my early college python classes again
function area(base,height) {
    return (1/2) * base * height //0.5 also works but just so me know how others work
}

console.log(area(10,10))

// Q5 extend strings 'attached'
function extend(string) {
    return  string + 'Frontend'
}

console.log(extend('Apple'))
console.log(extend('Bannaa'))

// Q6 greater than 100, what is true or false, let I find that out
function greater(no1,no2) {
    return no1 + no2 > 100
}

console.log(greater(50,60))
console.log(greater(100,-50))

// Q7 < or = to 0, find the what needs to let found
function lessEqual(number) {
    return number <= 0
}

console.log(lessEqual(0))

// Q8 opposite of the boolean is non boolean
function oppositeBoolean(ans) {
    // return ans !== true :: also means that booleans can directly be called
    return !ans
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

// Q9 given any element,return true if it is NOT the number 0
function isNotZero(element) {
    return element !== 0
    if (element != 0) {
        return true
    } //my initial attempt but me found better path
    return false 
}

console.log(isNotZero(null))
console.log(isNotZero(0))

// Q10 2 numbers, return the remainder when divided

function calcRemainder(nu1,nu2) {
    return nu1 % nu2
}

console.log(calcRemainder(4,2))
console.log(calcRemainder(7,9))

// Q11 w/ 2 numbers, return true if the number is odd
function isItOdd(elemen) {
    return elemen % 2 !== 0
}

console.log(isItOdd(5))
console.log(isItOdd(200))

// Q12 takes a number argument and returns 1 if the number is even, if odd - return -1
function booleanInteger(eleme) {
    return eleme % 2 === 0 ? 1 : -1 // ? = refers to a turnery operator, I feel like turnery is spelled wrong
    if (eleme % 2 === 0) {
        return 1
    } //I FORGOT ABOUT QUESTION ? OHHHH, 
    return -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))

// Q13 check if user is logged in AND subscribed
function loggedInAndSubscribed(ele,ment) {
    return ele === "LOGGED_IN" && ment === "SUBSCRIBED";
    //basically it is like the classic, simple true && true
    // yeh, I am getting dumber by the second
    return ele + ment && 'LOGGED_IN', 'SUBSCRIBED' === true //NT
}

console.log(loggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

// Q14 check if user logged in OR subscribed
function loggedInOrSubscribed(elem,ent) {
    return elem === "LOGGED_IN" || ent === "SUBSCRIBED";
}


console.log(loggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(loggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))