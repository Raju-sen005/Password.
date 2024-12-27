let cn = "Raju"
let i
while(i!=cn){
	// console.log(i)
	i=prompt("Enter the password:")
	if(i==cn){
		console.log("You entered the right password.")
	}
	else{
		alert("Try again!.")
	}
}