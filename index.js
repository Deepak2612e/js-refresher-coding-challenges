console.log("Welcome")

const greet = (name) =>{
    console.log("Hello, "+name+"!")
}
// const greet = (name) => console.log("Hello, "+name+"!")

const isEven = (number) => {
    if(number % 2 === 0)
    {
        console.log(true)
    }
    else{
        console.log(false)
    }
}

// const isEven = (number) => number % 2 === 0 ? console.log(true) : console.log(false)

const sumArray = (arr) => {
    var sum = 0
    arr.forEach(element => {
        sum += element
    })
    console.log(sum)
}


const getProperty = (Obj,key) => {
    console.log(`"${Obj[key]}"`)
}

// const getProperty = (Obj,key) => console.log(`"${Obj[key]}"`)
const celsiusToFahrenheit = (celsius) => {
    console.log(celsius * 9 / 5 + 32)
}

// const celsiusToFahrenheit = (celsius) => console.log(celsius * 9 / 5 + 32)

const findLarger = (num1,num2) => {
    console.log(num1 > num2 ? num1 : num2)
}
// const findLarger = (num1,num2) => num1 > num2 ? num1 : num2


const reverseString = (str) => {
    let strRev = ""
    for(let i=str.length-1;i>=0;i--)
    {
        strRev += str[i];
    }
    console.log(strRev)
}

const countVowels = (str) => {

    let count = 0
    let vowels = "aeiou"
    str = str.toLowerCase()
    for(let i=0;i<str.length;i++)
    {
        if(vowels.includes(str[i]))
        {
            // console.log(str[i])
            count++
        }
    }
    console.log(count)
}

const calculator = (num1,num2,operator) => {
    switch(operator){
        case "+" :
            console.log(num1 + num2)
            break;
        case "-" :
            console.log(num1 - num2)
            break;
        case "*" :
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        case "%":
            console.log(num1 % num2)
            break;
    }
}

const getFirstAndLast = (arr) => {
    console.log(`[${arr[0]}, ${arr[arr.length-1]}]`)
}

// const getFirstAndLast = (arr) => console.log(`[${arr[0]},${arr[arr-length-1]}]`)


greet("Deepak")
isEven(10)
sumArray([1,2,3,4,5])
getProperty({name : "Bob",age : 30},"name")
celsiusToFahrenheit(100)
findLarger(10,10)
reverseString("Java")
countVowels("JAVASCRIPT")
calculator(1,2,"%")
getFirstAndLast([10,2,3,4,5])