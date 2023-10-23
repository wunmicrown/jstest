let increment =1
for (let i = 1; i <= 10; i+=increment) {
    console.log(i);
    show.innerHTML += `<p>${i}</p>`
    if (i === 10) {
        let decrement=1
        for (let ind = 9; ind >= 1; ind-=decrement) {
            console.log(ind);
            show.innerHTML += `<p style="color:red">${ind}</p>`
        }
    }
}
let increase =1
for (let i = 1; i <= 10; i+=increase) {
    console.log(i);
    show.innerHTML += `<p style="color:aqua">${i}</p>`
    if (i === 10) {
        let decrement=2
        for (let returnInd = 8; returnInd >= 1; returnInd-=decrement) {
            console.log(returnInd);
            show.innerHTML += `<p style="color:lime">${returnInd}</p>`
        }
    }
}
let incremen =1
for (let i = 1; i <= 20; i+=incremen) {
    console.log(i);
    show.innerHTML += `<p style="color:red">${i}</p>`
    if (i === 20) {
        let divisible=3
        for (let IndToReturn = 18; IndToReturn >= 1; IndToReturn -=divisible) {
            console.log(IndToReturn);
            show.innerHTML += `<p style="color:purple">${IndToReturn}</p>`
        }
    }
}


