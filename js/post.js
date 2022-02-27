const loadPost=()=>
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>displayPost(data))
}

loadPost();

const displayPost=(posts)=>
{
    const sectionContainer=document.getElementById('section-container');
    posts.forEach(post=>{
        //console.log(post);
        const div=document.createElement('div');
        div.classList.add('style');
        div.innerHTML=`<h2>${post.title}</h2>
                        <p>${post.body}</p>`;

                        sectionContainer.appendChild(div);

    })

}