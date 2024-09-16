let imageTitle = document.getElementById('imageTitle');
let imageUrl = document.getElementById('imageUrl');
let btnPost = document.getElementById('btnPost');
let postsContainer = document.getElementById('postsContainer');
let apiUrl = "https://66e8037eb17821a9d9daf543.mockapi.io/postImage";
btnPost.addEventListener("click", () => {


    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
            tite: imageTitle.value,
            image: imageUrl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => response.json())
        .then(data => data)

})


updateContent();
function updateContent(){
fetch(apiUrl)
.then(response=> response.json())
.then(data =>{
    data.forEach(element => {

        let cart=document.createElement('div');
        let title=document.createElement('h2');
        let image=document.createElement('img');
        let deletBTN=document.createElement('button');

        cart.setAttribute('class','cart');
        title.setAttribute('class','title');
        image.setAttribute('class','image');
        deletBTN.setAttribute('class','delet-btn');

        title.textContent=element.tite;
        image.src=element.image;
        deletBTN.textContent=`Delete post`;
        cart.appendChild(title);
        cart.appendChild(image);
        cart.appendChild(deletBTN);
        deletBTN.addEventListener("click",()=>{
            cart.remove();
            console.log(apiUrl+"/"+element.id)
            fetch(apiUrl+"/"+element.id,{
                method:'DELETE',
                headers: { 
                    'Content-type': 'application/json'
                } 

            })
            .then(response =>response.json())
            .then(data=>console.log(data))
        })
        postsContainer.appendChild(cart);

    });
})

}