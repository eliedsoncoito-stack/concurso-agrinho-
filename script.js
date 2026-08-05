let likes = [0, 0];

function curtir(post) {
    likes[post]++;
    document.getElementById("likes" + post).innerText = likes[post];
}