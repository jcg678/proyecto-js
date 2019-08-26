$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: false
    });
    
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día: '+ moment().date() + " de "+moment().format("MMMM") +" del "+moment().format("YYYY"),
            content: "Lorem fistrum quietooor quietooor pecador por la gloria de mi madre. A wan benemeritaar benemeritaar no te digo trigo por no llamarte Rodrigor de la pradera papaar papaar no te digo trigo por no llamarte Rodrigor. Por la gloria de mi madre amatomaa papaar papaar al ataquerl me cago en tus muelas ese que llega me cago en tus muelas amatomaa ese hombree tiene musho peligro a peich."
        },
        {
            title: 'Prueba de titulo 2',
            date:  'Publicado el día: '+ moment().date() + " de "+moment().format("MMMM") +" del "+moment().format("YYYY"),
            content: "Lorem fistrum quietooor quietooor pecador por la gloria de mi madre. A wan benemeritaar benemeritaar no te digo trigo por no llamarte Rodrigor de la pradera papaar papaar no te digo trigo por no llamarte Rodrigor. Por la gloria de mi madre amatomaa papaar papaar al ataquerl me cago en tus muelas ese que llega me cago en tus muelas amatomaa ese hombree tiene musho peligro a peich."
        },
        {
            title: 'Prueba de titulo 3',
            date:  'Publicado el día: '+ moment().date() + " de "+moment().format("MMMM") +" del "+moment().format("YYYY"),
            content: "Lorem fistrum quietooor quietooor pecador por la gloria de mi madre. A wan benemeritaar benemeritaar no te digo trigo por no llamarte Rodrigor de la pradera papaar papaar no te digo trigo por no llamarte Rodrigor. Por la gloria de mi madre amatomaa papaar papaar al ataquerl me cago en tus muelas ese que llega me cago en tus muelas amatomaa ese hombree tiene musho peligro a peich."
        },
        {
            title: 'Prueba de titulo 4',
            date:  'Publicado el día: '+ moment().date() + " de "+moment().format("MMMM") +" del "+moment().format("YYYY"),
            content: "Lorem fistrum quietooor quietooor pecador por la gloria de mi madre. A wan benemeritaar benemeritaar no te digo trigo por no llamarte Rodrigor de la pradera papaar papaar no te digo trigo por no llamarte Rodrigor. Por la gloria de mi madre amatomaa papaar papaar al ataquerl me cago en tus muelas ese que llega me cago en tus muelas amatomaa ese hombree tiene musho peligro a peich."
        },
        {
            title: 'Prueba de titulo 5',
            date:  'Publicado el día: '+ moment().date() + " de "+moment().format("MMMM") +" del "+moment().format("YYYY"),
            content: "Lorem fistrum quietooor quietooor pecador por la gloria de mi madre. A wan benemeritaar benemeritaar no te digo trigo por no llamarte Rodrigor de la pradera papaar papaar no te digo trigo por no llamarte Rodrigor. Por la gloria de mi madre amatomaa papaar papaar al ataquerl me cago en tus muelas ese que llega me cago en tus muelas amatomaa ese hombree tiene musho peligro a peich."
        }        
        
    ];
    
    posts.forEach((item, index)=>{
        var post =`<article class="post">
		    			<h2>${item.title}</h2>
		    			<span class="date">${item.date}</span>
		    			<p>
                            ${item.content}
		    			</p>
		    			<a href="#" class="button-more">Leer más</a>
		    		</article>`;
        
        $("#posts").append(post);
       
    });
    
    var theme= $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css")
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
    });


    $('.subir').click(function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },500);
        return false;
    });

    //fake login
    $("#login form").submit(function(){
        var form_name=$('#form_name').val();
        console.log(form_name);
        localStorage.setItem("form_name",form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null || form_name != undefined){
        var about_parrafo =$("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar Sesión</a>");
        $("#login").hide();
    }    

    $("#logout").click(function(){
        localStorage.clear();
        window.reload();
    });

});

