const loadData=()=>
{

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

const loadUser=()=>
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>displayUser(data))
}


const displayUser=(users)=>
{
  const ulContainer=document.getElementById('ul');
  users.forEach(user=>{
    const li=document.createElement('li');
    li.innerText=`Name:${user.name} Email:${user.email}`
    ulContainer.appendChild(li);
    
  })
  

}