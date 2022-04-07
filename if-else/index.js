function numeroPositive(num){
    const isPositive = num >= 0

    if(!isPositive) return false;
    return true;
}

console.log(numeroPositive(-1));