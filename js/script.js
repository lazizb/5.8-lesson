// sozni teskari oqish

    // function worldReverse(word) {
    //     let result = "";
    
    //     for (let i = 1; i <= word.length; i++) {
    //         result += word[word.length-i]
    //     }
    //     return result;
    // }
    // console.log(worldReverse("Kotta bola"));
    
    // function wordLength(word) {
    //     let count = 0;
    //     for (const iterator of word) {
    //         count++
    //     }
    //     return count;
    // }
    
    // console.log(wordLength("Kotta bola"));
// ohirgi elemntni boshiga qoshish
    // function addEl(arr, el) {
    //     arr[arr.length] = el;
    //     return arr;
    // }
    // let javob = addEl(['kotta bola', 'kotta qiz', 'kotta chaqalo'], 123)
    // console.log(javob);
    
    // function copyArr(array) {
    
    //     const copiedArr = [];
    
    //     for (const item of array) {
    //         copiedArr.push(item)
    //     }
    //     return copiedArr;
    // }
    
    // console.log(copyArr([true, 'qonday', 12]));

    
    
// harni bittasini kotta ikkinchisini kichkina qilish     
    // function camleWord(word) {
    //   let switcher = true;
    //   let result = "";
    
    //   for (const letter of word) {
    //     if (switcher) {
    //       result += letter.toLowerCase();
    //       switcher = !switcher;
    //     } else {
    //       result += letter.toUpperCase();
    //       switcher = !switcher;
    //     }
    //   }
    //   return result;
    // }
    
    
    // console.log(camleWord('Kotta Bola'));
    
['str',1,2,3,4,5]
    
function addEl(arr, el) {
    let emptyArr = [];
    emptyArr[0] = el;
    for (let i = 1; i < arr.length; i++) {
        emptyArr[i] = arr[i-1]
        
    }
    return emptyArr;
}
console.log(addEl([1,2,3,4], true));