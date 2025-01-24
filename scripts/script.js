function menu(pagina) {
  $('#conteudo').slideUp(1000, ()=>{
    $("#conteudo").load("../componentes/" + pagina + ".html ", ()=>{
       $('#conteudo').slideDown(1000);
    });
  });
 
  }