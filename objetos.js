const user = {
    name: 'critiano ronaldo',
    email: 'EusOUOHmiOr@gamil.cr7',
    senha: 'cristiano123'
}

for (key in user) {
    if (key === 'name') {
       const names = user[key].split(' ')
       user[key] = ''
       for (const name of names){
        const normalizarNomes = name.toLowerCase()
        const [primeiraLetra, ...retanteDoNome] = normalizarNomes

        user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + retanteDoNome.join('')
        user[key] = user[key].trim()
       }
    }
    if (key === 'email'){
        user[key] = user[key].toLowerCase()
    }
}

console.log(user)