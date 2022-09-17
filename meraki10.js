// const merge = (first, second) => {
//     for(let i=0; i<second.length; i++) {
//       first.push(second[i]);
//     }
//     return first;
//   }

// merge([1,2,3],[3,4,5])

var first=[1,2,3,4]
var second=[5,6,7,8]
var a={}
for (let i=0; i<second.length;i++){
    first.push(second[i])
    a=(first[i],second[i])
    console.log(a)
}
// console.log(a)








// # a=["one","two","Three","four",]
// # b=[1,2,3,4]
// # c={}
// # d=[]
// # i=0
// # while i <len(a):
// #     e=a[i],b[i]
// #     d.append(e)
// #     i=i+1
// # c.update(d)
// # print(c)

