fetch("https://meme-api.herokuapp.com/gimme/dankmemes")
    .then(data => data.json())
    .then(jokeData => {
        document.getElementById("img_here").src = jokeData.url
        console.log(jokeData.url)
    })