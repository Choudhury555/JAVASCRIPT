//REDUCE() accumulate array values into a single result

let nums = [10,20,30]

let sum = nums.reduce((acc,n)=>acc+n,55);
console.log(sum);


//SORT()
nums = [30,10,5,100];
nums.sort();//by default it converts elements to strings and compares by default
console.log(nums);//[ 10, 100, 30, 5 ]

nums = [30,10,5,100];
nums.sort((a,b)=>a-b);//Ascending
console.log(nums);//[ 5, 10, 30, 100 ]

nums = [30,10,5,100];
nums.sort((a,b)=>b-a);//Descending
console.log(nums);//[ 100, 30, 10, 5 ]
