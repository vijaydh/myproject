$(document).ready(function(){
    $.ajax({
        url: "package.json",
        //force to handle it as text
        dataType: "text",
        success: function(data) {

            //data downloaded so we call parseJSON function
            //and pass downloaded data
            var json = $.parseJSON(data);
            //now json variable contains data in json format
            //let's display a few items

          //  $("body .wrapper .actcnt").append("<div  class='header'>"+json.p.type_of_activity+"</div>");

            $('.actcontainer').append("<header class='header' id='headerc'>"+json.p.header+"</header>");
           $("<div class='dircont' id='dir'>"+json.p1.text+"</div>").insertAfter( '.actcontainer .header' );
            $( ".actcontainer .dircont" ).after("<div class='imgc' id='img'>"+ "<img src='images/1.png'>"+"</div>");


            for(var i=0; i<=2; i++) {
             
        //   var c=  json.draggable[i].audio;
          //      console.log(c);

               $("body div .imgc").after("<div class='word[i]' id='w[i]'>"+json.draggable[i].audio + "</div>");

            }

        }
    });



















//$('#act-container').append("<div class='div1' >aesfdsgdsgdfsg </div>");
  //  $('.actcontainer').append("<header class='header' id='headerc'></header>");

});