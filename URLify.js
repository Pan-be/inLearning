// class URLify {
//     nameToURL(title) {
//         title
//     }
// }

const nameOfPage = "My blog!"

const toUrl = (title) => {
    return title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '')
}

console.log(toUrl(nameOfPage));