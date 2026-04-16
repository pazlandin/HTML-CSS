function adicionarTarefa() { 

  let input = document.getElementById("tarefaInput"); 

  let texto = input.value; 

 

  if (texto === "") return; 

 

  let li = document.createElement("li"); 

  li.textContent = texto; 

 

  li.onclick = function() { 

    li.classList.toggle("concluida"); 

  }; 

 

  document.getElementById("lista").appendChild(li); 

 

  input.value = ""; 

} 
