function populateUFs() {

    const ufSelect = document.querySelector('select[name=uf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => (res.json())  //Varias opções que podem ser escritas *
        
        .then(states => {
            ufSelect.innerHTML = `<option value="1">Valor</option>`
        })
 
}

populateUFs()


*
//opção 1 de escrita 'inteira'
    .then(function (resp) {
        return resp.json()
    })

//opção 2 de escrita 'semi-resumida'
    .then((res) => { return res.json() 
    })

//opção 3 de escrita 'resumida'
    .then(res => (res.json())
