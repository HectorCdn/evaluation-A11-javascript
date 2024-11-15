function isEnoughMoney(price, wallet) {
	return(price <= wallet)
}

console.log(isEnoughMoney(10, 0));
console.log(isEnoughMoney(5, 25));