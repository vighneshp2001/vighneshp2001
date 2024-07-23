const array=[1,3,7,0,-5,8,2];
function find(arry){
    let max=arry[0];
    for (let i = 0; i < arry.length; i++){
        if (arry[i]>max) {
            max=arry[i];
         } 
    } 
    return max;
}
const maximum = find(array);
console.log("the maxximum element in the array is:"maximum);
