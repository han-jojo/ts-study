// Simple Type and Array Fuction

type TArray = <T>(arr: T[], item?: any) => void;

const printArray: TArray = (arr) => {
    console.log("printArray: ");
    arr.forEach(i => console.log(i))
}

const last: TArray = (arr) => arr[arr.length - 1];
const prepend: TArray = (arr, item) => arr.unshift(item);

const testArray = ["aaa", "bbb", "ccc", "ddd"];

const lastItem = last(testArray);
console.log("lastItem: ", lastItem);

prepend(testArray, "eee");
prepend(testArray, "fff");

printArray(testArray);