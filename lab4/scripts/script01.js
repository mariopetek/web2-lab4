const img01 = document.createElement('img')
img01.src = 'images/image01.jpg'
img01.style.height = '200px'
img01.alt = 'Image 01'

const imageContainer = document.querySelector('.image-container')
imageContainer.appendChild(img01)
