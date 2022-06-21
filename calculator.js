// A simple Calculator

// instructions
console.log("Operation is either '+' or '-' or '*' or '/'");

// define calculator function
function calculator(first_number, second_number, operation){
	let result;

	while (isNaN(first_number) || isNaN(second_number))
		return ("invalid operand. Try again")
	while (operation != '+' && operation != '-' && operation != '*' && operation != '/')
		return ("invalid operation detected. Try again")

	if(operation == '+'){
		result = first_number + second_number
	}else if(operation == '-'){
		result = first_number - second_number
	}else if(operation == '*'){
		result = first_number * second_number
	}else{
		result = first_number / second_number
	}
	console.log(first_number + " " + operation + " " + second_number + " = " + result)
	return result
}

// start calculator function
calculator(5,6,'*')

