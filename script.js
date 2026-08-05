let likes = [0, 0, 0];

function curtir(post) {
    likes[post]++;
    document.getElementById("likes" + post).textContent = likes[post];
}