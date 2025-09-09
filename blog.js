const loading = document.querySelector('#loading')
const containerPosts = document. querySelector('#container-posts')
const url = "https://jsonplaceholder.typicode.com/posts"

async function pegarPosts(){
    const response = await fetch(url)
    console.log(response);

    const data = await response.json()
    console.log(data)

    loading.classList.add("esconder")
    
    data.map((i)=>{
        const titulo = document.createElement("h2")
        const text = document.createElement("p")
        const link = document.createElement("a")
        const div = document.createElement("div")

        titulo.innerText = i.title
        text.innerText = i.body
        link.innerText = "Ler post"
        link.setAttribute('href', `/post.html?id= ${i.id}`)

        div.appendChild(titulo)
        div.appendChild(text)
        div.appendChild(link)

        containerPosts.appendChild(div)

        
    })
    
    
    }
    const buscarParametro = new URLSearchParams(Window.location.search)
    const postId = buscarParametro.get('get')

    if(!postId){
          pegarPosts()
    }else{
        pegarUmPost(postId)
    }
    async function  pegarUmPost(id) {
        const[conteudoPost, comentarioPost] = await Promise.all([
            fetch(`${url}/${id}`),
            fetch(`${url}/${id}/comnents`)
        ])
    }
    const postConteiner = document.getElementById('post-conteiner');
    const conteinerComentario = document.getElementById('post-conteiner');
    
    const dataPost = await conteudoPost.json()
       console.log(dataPost);

       const  titulo = document.createElement('h1')
       titulo.innerText = dataPost.title
       postConteiner.appendChild(titulo)

       const text = document.createElement('p')
       titulo.innerText = dataPost.body
       postConteiner.appendChild(text)

       const dataComents = await comentarioPost.json()
       console.log(dataComents);

       dataComents.map((comente) => {
        const autor = document.createElement('h3')
        autor.innerText = Comment.email

        conteinerComentario.appendChild(autor)
       })
       