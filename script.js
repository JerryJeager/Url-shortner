const header = document.querySelector('header')
const hamburger = document.querySelector('.hamburger')
const menuLine1 = document.querySelector('.line1')
const menuLine2 = document.querySelector('.line2')
const menuLine3 = document.querySelector('.line3')
const navList = document.querySelector('.nav-list')
// const longLink = document.querySelector('input[name="long-link"]')
// const shortLinkBtn = document.querySelector('.shorten-btn').querySelector('button')
// const shortLinks = document.querySelector('.short-links')
const copyShortLink = document.querySelector('.copy-btn')


hamburger.addEventListener('click', () => {
    menuLine1.classList.toggle('line1-close')
    menuLine2.classList.toggle('line2-close')
    menuLine3.classList.toggle('line3-close')
    navList.classList.toggle('nav-list-closed')
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 30) {
        header.classList.add("header-fixed")
    }
    else {
        header.classList.remove("header-fixed")
    }
})

const longLink = document.querySelector('input[name="long-link"]')
const shortLinkBtn = document.querySelector('.shorten-btn').querySelector('button')
const shortLinks = document.querySelector('.short-links')



async function shortenLink(longURL) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiEndpoint = `${proxyUrl}https://api.shrtco.de/v2/shorten`;
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: longURL
        })
    });
    if(response.status !== 200){
        throw new Error('epp me e dey carry me where i nor know')
    }
    const data = await response.json();
    return data.shortLink;
}


shortLinkBtn.addEventListener('click', () => {
    shortenLink(longLink.value).then(shortURL => {
        console.log(`Short URL: ${shortURL}`);
        console.log(longLink.value)
        shortLinks.innerHTML += `<div class="shortened-link">
                <div class="old-link">
                    <p>${oldLink}</p>
                </div>
                <div class="new-link">
                    <p>${data}</p>
                    <button class="copy-btn">Copy</button>
                </div>
            </div>`
    }).catch(error => {
        console.log(error);
        console.log(longLink.value)
    });
})
