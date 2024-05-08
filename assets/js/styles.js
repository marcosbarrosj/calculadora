
























 openMenu.addEventListener('click', () => {

	
	menu.style.display = "flex"

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	
	setTimeout(()=> {
		
		menu.style.opacity = '1'

		
		menu.style.right = "0"

		openMenu.style.display = 'none'
	}, 10);
})


closeMenu.addEventListener('click', () => {

	menu.style.opacity = '0'

	menu.style.right = (menu.offsetWidth * -1) + 'px'

	
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})





// Solicitar o nome do usuário usando prompt
var nomeUsuario = prompt("Digite seu nome:");

// Selecionar o elemento onde o nome será exibido
var nomeExibido = document.getElementById("nome");

nomeExibido.textContent = nomeUsuario;





















 function aqui(){
    var materia = window.prompt(' Materia ')
    var nota1 =  Number(window.prompt(' nota 1 ')) 
    var nota2 = Number(window.prompt(' nota 2')) 
    var nota3 =  Number(window.prompt(' nota 3 ')) 
    var nota4 =  Number(window.prompt(' nota 4 ')) 
    var media = (nota1+nota2+nota3+nota4) /4
    
    var resultado =document.getElementById('resultado');
    resultado.innerHTML += ` <p>Sua disciplina é  <strong>${materia}.</strong>   </p> ` 

    resultado.innerHTML += `<p>Sua média Final foi <strong>  ${media} .</strong>    </p> `

   
     


    
    if ( media>= 7){
      resultado.innerHTML += `<p> o aluno foi <strong>Aprovado. </strong>&#xf2a7;</p>	
      `


    }else if(media >=6){   resultado.innerHTML +=  `<p> o aluno foi para <strong>Recuperação.</strong></p>`   }
    
    else{resultado.innerHTML +=  `<p> o aluno está <strong>Reprovado.</strong></p>`


    }
    

    


 }
