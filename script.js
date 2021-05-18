const $usersContainer = document.getElementById("users")
const $postsContainer = document.getElementById("posts")


document.getElementById("login")
    .onsubmit = login

    document.getElementById("createPost")
    .onsubmit = createPost

    spawnPosts()


    function createPost(e) {
        e.preventDefault()
        const payload = {
            body: JSON.stringify({
                text:document.getElementById("newPost").value
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("/posts", payload)
        .then(res => res.json())
        .then(res => console.log(res.body))
        .catch(error => console.error(err))
    }
    
    function login(e) {
    e.preventDefault()
    const payload = {
        body: JSON.stringify({
          username: document.getElementById("username").value,
          password: document.getElementById("password").value  
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("/login", payload)
        .then(res => res.json())
        .then(res => {
            user_id = res.userId
        })
        .catch(error => console.error(error))
}

function spawnPosts() {
 fetch("/posts")
 .then(res => res.json())
 .then (posts => {
     postsHTML = posts.map( post => `
 <div class = "post">
 <p>Catergory: ${posts.forum_id} <br/>
 ${posts.content}</p>
 </div>`).join(""),
 $postsContainer.innerHTML = postsHTML})
 .catch(err => console.error(err))
}

