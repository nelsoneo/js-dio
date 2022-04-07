function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    if(!ts){
        return -1;
    } else if (ts.length === 0) {
        return "0";
    } else {
        let minNeg = 0;
        let minPos = 0;
        let arr = [];

        for(let item of ts){
            if(item >= 0){
                arr.push(item);
            }
        }

        if(arr.length === 0){
            minNeg = Math.max(...ts);
            return minNeg;
        } else if(arr.length > 0){
            minPos = Math.min(...arr);
           return minPos
        }

        return Math.max(minPos, ...ts);
    }
}

// console.log((computeClosestToZero([7,5,8,4,3,2])))
console.log((computeClosestToZero([-17,-3, -5,3])))
// console.log((computeClosestToZero(25)))


// const N = parseInt(readline());
// var inputs = readline().split(' ');
// let min = String(Math.min(...inputs));
// min = min.replace('-','');

// if (!inputs){
//     console.log(-1)
// } else if (inputs.length == 0) {
//     console.log(-1)
// } else {
//     if (min < 0) {
//         for (let i = 0; i < N; i++) {
//             const t = parseInt(inputs[i]);
//            if(t == min){
//                console.log(t)
//            }
//         }
//     }
//   console.log(min)
// }
