//filter map reduce
// const coding = ["js", "ruby", "java", "banana", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num)=> {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { tittle: 'book one', genre: 'fiction', publish:1986,
    edition: 1986 },
    { tittle: 'book two', genre: 'science', publish:1981,
        edition: 1986 },
    { tittle: 'book three', genre: 'histry', publish:1980,
     edition: 1986 },
     { tittle: 'book four', genre: 'maths', publish:1955,
        edition: 1986 },
    { tittle: 'book five', genre: 'victus', publish:1922,
     edition: 1986 },
    { tittle: 'book six', genre: 'vvc', publish:1952,
     edition: 1986 },
    { tittle: 'book seven', genre: 'bcc', publish:1932,
        edition: 1986 },
    { tittle: 'book eight', genre: 'ss', publish:1954,
        edition: 1986 },
    { tittle: 'book Nine', genre: 'hindi', publish:1925,
        edition: 1986 },
    { tittle: 'book five', genre: 'vic', publish:1921,
     edition: 1986 }
];
let userBooks = books.filter( (bk) => bk.genre === 'maths')
 userBooks = books.filter((bk)=> { 
    return bk.publish >= 1955 && bk.genre === 'histry'})
console.log(userBooks);

