<html>

<head></head>

<body>
    <form>
        <input type="email" id="email" class="input-padrao" onblur="checarEmail()" 
            placeholder="Coloque seu e-mail para contato! 🙂" value="">
        <button type="button" id="enviar" class="enviar" value="enviar">Enviar</button>
    </form>

    <!-- INICIO DO JAVASCRPIT -->

    <script>

        function checarEmail() {

// MODELO 1 - Usando document.forms
        if (document.forms[0].email.value == ""
            || document.forms[0].email.value.indexOf('@') == -1
                || document.forms[0].email.value.indexOf('.') == -1) {
            
            console.log("Por favor, informe um E-MAIL válido!");

        } else {
            console.log('Email enviado com Sucesso')
        }

// MODELO 2 - Usando document.getElementByid

        // let validarEmail = document.getElementById('email').value;

        //if (validarEmail == "" 
        //  || validarEmail.indexOf('@') ==-1 
        //    || validarEmail.indexOf('.') ==-1){

        //    console.log('PORRA EMAIL ERRADO CARA!');

        //} else{
        //    console.log('UHULLLLL BICHO!')
        //} */
    
        document.getElementById('email').value = '';
}


    </script>
</body>
</html>
