const ola = (nome) => {
    console.log(`Ola ${nome}`)
}

ola("Gabriel")
ola("Marcos")

setTimeout(() => {
    ola("Andre")
}, 3000)