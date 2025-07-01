const btnEnviar = document.querySelector('#enviar')
const form_contato = document.querySelector('#form-contato')
const cep = document.querySelector("#cep")

document.querySelector("#cep").addEventListener('blur', prencherCampos)

async function prencherCampos() {
    const cepValue = cep.value.trim()

    if(cepValue.length !== 8 || isNaN(cepValue)){
        alert(`CEP inválido!!!`)
        return
    }

    const url = `https://viacep.com.br/ws/${cepValue}/json/`

    const rua = document.querySelector("#logradouro")
    const bairro = document.querySelector("#bairro")
    const cidade = document.querySelector("#cidade")
    const estado = document.querySelector("#estado")

    // console.log(cepValue)

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.bairro)

        rua.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.estado

    } catch (error) {
        throw new Error('CEP não encontrado!')
    }

}
document.getElementById('form-contato').addEventListener('submit', (e) => {
    // e.preventDefault()
    alert('Evento!!')
})
