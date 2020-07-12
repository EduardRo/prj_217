
const arr= ['alice', 'bob', 'carla', 'jamal'];
let div = document.getElementById('names')
for(let i=0; i<arr.length; i++){
	div.innerHTML += '  ' + arr[i]
	console.log(arr[i])
}

for(const item of arr){
	console.log('----------')
	console.log(item)
}



arr.forEach((e)=> {
	div.innerHTML+=('<li>'+ e+'</li>')
})

const result = arr.map((e)=>(e=e+'+p')).filter(e=>e!=='bob+p')

console.log(arr)
console.log(result)

result.map(e=>div.innerHTML+=e+' ')

arr.forEach((item, index)=>console.log(index + ' - '+ item))