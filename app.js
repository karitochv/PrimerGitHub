$(document).ready(function(){

    $('#download').click(function(e){

            $.generateFile({
                    filename        : 'export.txt',
                    content         : $('textarea').val(),
                    script          : 'download.php'
            });

            e.preventDefault();
    });

    $('#downloadPage').click(function(e){

            $.generateFile({
                    filename        : 'page.html',
                    content         : $('html').html(),
                    script          : 'download.php'
            });

            e.preventDefault();
    });
});
function retornarFecha()
{
  var fecha
  fecha=new Date();
  var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
  return cadena;
}

function retornarHora()
{
  var fecha
  fecha=new Date();
  var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
  return cadena; 
}
