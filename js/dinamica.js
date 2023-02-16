let main = document.querySelector('main');
let input = document.getElementById('campo-tarefa');
let btnAdd = document.getElementById('btn-add');
let contador = 0;

function addTarefa(){
    let tarefa = input.value;
    
    if((tarefa != '') && (tarefa != null) && (tarefa != undefined)){
        contador += 1;
        main.innerHTML += `<div id="tarefa_${contador}" class="item-tarefa">
        <div class="nome-item">${tarefa}</div>
        <div class="delete-item">
            <button onclick="deletarTarefa(${contador})" class="btn-del">
                <i class="mdi mdi-close"></i>
            </button>
        </div>
        </div>` 

        input.value = '';
        input.focus();
    }

}

function deletarTarefa(id){
    let tarefa = document.getElementById(`tarefa_${id}`);
    tarefa.remove();
}

input.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        btnAdd.click();
    }
})
