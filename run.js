console.log("Hello from JavaScript")

let allFunctions = []

Polyglot.evalFile("python", "python.py")
allFunctions.push(Polyglot.eval("python", "i_am_called"))

if (false) {
    console.log("I am never executed")
}

for (func of allFunctions) {
    console.log(func(123))
}
