$(document).ready(function() {
    $('form').on('submit' , function
    (evento) {
        evento.preventDefaut();
        let tarefa = $('input').val()
        let lista = $('.lista')
        let item = `<li>${tarefa}</li>`
        $(item).appendTo(lista)
        })
        $('button').click(function() {
            (ul).toggle("done")
        })


        $('li').click(function() {
        console.log('funcionou')
        $(this).addClass('concluido');
    });
    })


