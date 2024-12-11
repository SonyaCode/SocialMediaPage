async function getUsers() {
    const generateUsers = await fetch("https://jsonplaceholder.typicode.com/users/")
    const users = await generateUsers.json()

    let displayUsers = document.getElementsByClassName("user")

    for (let i = 0; i < displayUsers.length; i++) {
        displayUsers[i].textContent = users[i].username
    }
}

async function getPosts() {
    const generatePosts = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await generatePosts.json()

    let displayPosts = document.getElementsByClassName("post")

    for (let i = 0; i < displayPosts.length; i++) {
        displayPosts[i].textContent = posts[i].body
    }

}

async function getComments() {
    const generateComments = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comments = await generateComments.json()

    let displayComments = document.getElementsByClassName("comment")

    for (let i = 0; i < displayComments.length; i++) {
        displayComments[i].textContent = `${comments[i].name}: ${comments[i].body}`
    }

}

async function getImage() {
    let displayImages = document.getElementsByClassName("image")

    for (let i = 0; i < displayImages.length; i++) {
        const generateImages = await fetch('https://unsplash.it/1920/1080?random');
        const blob = await generateImages.blob();
        displayImages[i].src = URL.createObjectURL(blob)
    }

}


getUsers()
.then(response => {
    console.log("The user is displayed well.");
})
.catch (error => {
    console.log("There is an error in displaying the user.");
})

getPosts()
.then(response => {
    console.log("The post is displayed well.");
})
.catch (error => {
    console.log("There is an error in displaying the post.");
})

getComments()
.then(response => {
    console.log("The comment is displayed well.");
})
.catch (error => {
    console.log("There is an error in displaying the comment.");
})

getImage()
.then(response => {
    console.log("The image is displayed well.");
})
.catch (error => {
    console.log("There is an error in displaying the image.");
})

