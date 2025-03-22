let viewer = document.getElementById('lightbox');
let viewerImg = document.getElementById('lightbox-img');
let closeIcon = document.getElementById('close-btn');
let thumbs = document.getElementsByClassName('thumbnail');

for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].onclick = function() {
        viewerImg.src = this.dataset.full;
        viewer.classList.add('show');
    };
}

closeIcon.onclick = function() {
    viewer.classList.remove('show');
};