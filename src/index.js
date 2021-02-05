
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogImages
let dogBreeds
const dogImageContainer = document.querySelector('div#dog-image-container')
const dogBreedsContainer = document.querySelector('#dog-breeds')

function fetchImg() {
    fetch(imgUrl)
    .then(response => response.json())
    // .then(data => setDogImages(data))
    .then(data => {
        dogImages = data.message
        dogImages.forEach(image => {
            let newImg = document.createElement('img')
            newImg.src = image
            dogImageContainer.append(newImg)
        })
    })
}

function fetchBreed() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        dogBreeds = Object.keys(data.message)
        dogBreeds.forEach(breed => {
            let breedLi = document.createElement('li')
            breedLi.innerText = breed
            if (breedLi.innerText[0] != 'a') {breedLi.style.display = 'none'}
            dogBreedsContainer.append(breedLi)
        })
        
    })
}

dogBreedsContainer.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'firebrick'
    }
})

Array.from(dogBreedsContainer.children).forEach(li => { 
    if(!li.textContent[0] === 'a') {
        li.style.display = 'none'
    }
    else {
        li.style.display = ''
    }
})

const breedDropdown = document.querySelector('#breed-dropdown')
console.log('breedDropdown: ', breedDropdown);
breedDropdown.addEventListener('mouseup', e => {
    Array.from(dogBreedsContainer.children).forEach(li => { 
        if(li.textContent[0] === e.target.value) {
            li.style.display = ''
        }
        else {
            li.style.display = 'none'

        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    fetchImg()
    fetchBreed()
})

// function setDogImages(data){
//     dogImages = data.message
// }
// function setDogBreeds(data){
//     dogBreeds = data.message
// }



