let names =['tamil','kalai','applu','angammal']
let len=names.length
console.log(len);//4
for(let i=0; i<len; i++)
{
    
    let ca=names[i].slice(0,1)//t
    //amil
    let cap=ca.toUpperCase()//T
    let fin=names[i].replace(ca,cap)

    console.log(fin)

}
