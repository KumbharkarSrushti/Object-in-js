var dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
let sum = 0;
for (let key in dict_num) {
    sum += dict_num[key];
}
  
console.log(sum);
