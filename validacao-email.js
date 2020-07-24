/* 
    1) Validar email 
        1.1) Alert de email invalido 
        1.2) Alert de email enviado com sucesso
            1.1.1) Mensagem "Damos boas vindas a:$(email)

    2) Click no Menu
        1.1) Alert de pagina em construção

*/


// 1) Validar email



// 1.2) Alert email enviado com sucesso
//  1.1.1) Mensagem de boas vindas
let mensagem = document.querySelector('.enviar');
    mensagem.addEventListener('click', boasVindas);
    
    function boasVindas(){
        
        let email = document.getElementById('email').value;

        let mensagemBoasVindas = document.getElementById('boasVindas');
        mensagemBoasVindas.innerHTML = `Damos Boas Vidas a ${email}`;

        alert(`Email: ${email} enviado com sucesso.`)
        console.log('Com amigas assim, não ha JS que resista')
    };




    






// 2) Click Menu

/* MODELO 1 */
document.querySelector('.home').addEventListener('click', construcao);

function construcao(){ 
    alert('Página em construção');
}

/* MODELO 2 */
//Usando o evento onclick no html


