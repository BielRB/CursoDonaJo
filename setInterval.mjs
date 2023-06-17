const cores = (cores) => {
    console.log(`A sua cor preferida é ${cores}`)

}

cores("Preto")

setInterval( () => {
    cores("Preto")
}, 3000)
