dict={"a":300,"b":200,"c":400,"e":500}
var a=[]
for (let min in dict){
    a.push(dict[min])
    var i=0
    var b=a[i]
    while (i<a.length){
        if (a[i]<b){
            b=a[i]
        }
        i=i+1
    }
}
console.log("minimum number",b)
  



