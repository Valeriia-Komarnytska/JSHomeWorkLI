function arrCopy(arr) {
    return arr.concat([]);
}
let arr0 = [1,2,3];
const arr1 = arrCopy(arr0); 
const arr2 = arrCopy([1,2,3,[10,20]]);
arr0.push(4);

function arrToString(arr) {
    for (let key in arr) {
        arr[key] = arr[key].toString();
    }
    return arr
}
const arr3 = arrToString([1,2,3]);
const arr4 = arrToString([10,200,3333]);

function getLength(arr){
    let result = [];
    for (let el of arr){
        result.push(el.length);
    }
    return result
}
const arr5 = getLength(['Ivan','Pavlo','Ira']);
const arr6 = getLength(['Oleksiy','Andriana']);

function removeDuplicates(arr){
    let result = [];
    for (let el of arr){
        if (!result.includes(el)) {
            result.push(el);   
        }
    }
    return result;
}
const arr7 = removeDuplicates(['html','css','html','js']);
const arr8 = removeDuplicates(['html','css','js','html','js','python','js','scss']);
