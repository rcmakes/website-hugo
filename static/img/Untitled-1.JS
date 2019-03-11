async function getFollowers(){
  let baseUrl = "https://api.github.com/users/"
	let res = await( await fetch('https://api.github.com/users')).json()
  let logins = []
  for (var i = 0; i < res.length; i++){ 
   	logins.push(res[i].login) 
  }
  let result = logins.map(async v => await( await fetch(baseUrl + v ) ).json())
  let followers = result.sort((a,b) => b.followers - a.followers)

  async function printNames (){
  for (var k = 0; k < followers.length; k++){ 
   	console.log(`${followers[k].name} has ${followers[k].followers} followers`)
  }
  }
  return result
}

getFollowers().then(function(data){
	console.log(data)
  
})