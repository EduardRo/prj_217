
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
	console.log('- '+ e+' -')
})