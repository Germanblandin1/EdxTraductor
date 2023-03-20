let count=0
let sub= [...document.getElementsByClassName("subtitles-menu")[0].childNodes].map(hijo=> {
    let data= hijo.childNodes[0].textContent
    return data
})
JSON.stringify(sub)

