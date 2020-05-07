$(document).ready(function(){
    //SLIDER COMPLETO

    //Vamos a hacer una variable para contar cuántos sliders hay para meter dinámicamente los items de paginacion
    var imgItems = $('.slider li').length
    //Vamos a hacer(esto viene de function nextSlider(), variable que empice en uno) que es la imagen posicion
    var imgPos = 1
    //console.log(imgItems)
    //Hago ciclo for para agregar items como imagenes haya
    for(var i = 1; i <= imgItems;i++){
        $('.pagination').append('<li><span class="fas fa-circle"></span></li>')
    }

    
    //Desaparezcan todos los li que tienen las imágenes
    $('.slider li').hide()
    //Menos el primer li, sería la imagen "active"
    $('.slider li:first').show()
    //El primer item de paginacion le vamos a dar otro color
    $('.pagination li:first').css({color: '#E94057'})

    //Ejecutamos todas las FUNCIONES----------------------------------------------------------------------------------
    //La 1ra. funcion : Paginacion
    $('.pagination li').click(pagination)
    $('.right span').click(nextSlider)
    $('.left span').click(prevSlider)

    //----------------------------------------------------------------------------------------------------------------
    setInterval(function(){
        nextSlider()
    }, 4000)

    //FUNCIONES
    function pagination(){
        /*Y ahora voy a traer con THIS ! ! ! el elemento en el que hice click.
        y le voy a poner la funcion index() al lado para que me diga el numero, o sea el indice del elemento al que he hecho click.
        Lo voy a meter en una variable*/
        var paginationPos = $(this).index() + 1
        console.log(paginationPos)
         //Primero voy a ocultar todos 
         $('.slider li').hide()
        /*Despues voy a hacer algo que no es dinamico, por ejemplo voy a mostrar el slider 2
        $('.slider li:nth-child(2)').fadeIn()
        */
       $('.slider li:nth-child('+ paginationPos +')').fadeIn()
       //2-Y ahora quiero que todos los demás items a los que no le doy click se hagan de color gris, de color como si no estuviera marcado
       $('.pagination li').css({color : 'grey'})
       //1-Ahora, tenemos que hacer que el item en el que hago click se haga de color !
       $(this).css({color : '#E94057'})

       //Para que no de problemas y no se congele
       imgPos = paginationPos
       
    }

    function nextSlider(){
        //Si es mas grande a la cantidad de imagenes vuelva a 1
        if(imgPos >= imgItems){
            imgPos = 1
        }else{
            imgPos++
        }

        //Le vamos a decir que los circles se pongan todos grises y se marque de color el correspondiente a la imagen
        $('.pagination li').css({color : 'grey'})
        //1-Ahora, tenemos que hacer que el item en el que hago click se haga de color !
        $('.pagination li:nth-child(' + imgPos + ')').css({color : '#E94057'})

        $('.slider li').hide()
        $('.slider li:nth-child('+ imgPos +')').fadeIn()

    }

    function prevSlider(){
        //Si la posicion es menor o igual a 1, imgPos pasa a valer el total de items, sino se resta en uno
        if(imgPos <= 1){
            imgPos = imgItems
        }else{
            imgPos--
        }

        //Le vamos a decir que los circles se pongan todos grises y se marque de color el correspondiente a la imagen
        $('.pagination li').css({color : 'grey'})
        //1-Ahora, tenemos que hacer que el item en el que hago click se haga de color !
        $('.pagination li:nth-child(' + imgPos + ')').css({color : '#E94057'})

        $('.slider li').hide()
        $('.slider li:nth-child('+ imgPos +')').fadeIn()
    }

    //----------------------------------------------------------------------------------------------------------------

    //SLIDER AUTOMATIC
    //Vamos a hacer una variable para contar cuántos sliders hay para meter dinámicamente los items de paginacion
    var imgItemsAut = $('.slider li').length
    //Vamos a hacer(esto viene de function nextSlider(), variable que empice en uno) que es la imagen posicion
    var imgPosAut = 1
    //Desaparezcan todos los li que tienen las imágenes
    $('.slider-automatic li').hide()
    //Menos el primer li, sería la imagen "active"
    $('.slider-automatic li:first').show()

    function nextSliderAut(){
        //Si es mas grande a la cantidad de imagenes vuelva a 1
        if(imgPosAut >= imgItemsAut){
            imgPosAut = 1
        }else{
            imgPosAut++
        }

        $('.slider-automatic li').hide()
        $('.slider-automatic li:nth-child('+ imgPosAut +')').fadeIn()

    }
    
    setInterval(function(){
        nextSliderAut()
    }, 4000)

    //----------------------------------------------------------------------------------------------------------------
    
    //SLIDER WITH CONTROLS

    //Vamos a hacer una variable para contar cuántos sliders hay para meter dinámicamente los items de paginacion
    var imgItemsControls = $('.slider-controls li').length
    //Vamos a hacer(esto viene de function nextSlider(), variable que empice en uno) que es la imagen posicion
    var imgPosControls = 1

    //Desaparezcan todos los li que tienen las imágenes
    $('.slider-controls li').hide()
    //Menos el primer li, sería la imagen "active"
    $('.slider-controls li:first').show()

    //Ejecutamos todas las FUNCIONES----------------------------------------------------------------------------------
    $('.right-controls span').click(nextSliderControls)
    $('.left-controls span').click(prevSliderControls)

    //----------------------------------------------------------------------------------------------------------------
    setInterval(function(){
        nextSliderControls()
    }, 4000)

    //FUNCIONES

    function nextSliderControls(){
        //Si es mas grande a la cantidad de imagenes vuelva a 1
        if(imgPosControls >= imgItemsControls){
            imgPosControls = 1
        }else{
            imgPosControls++
        }

        $('.slider-controls li').hide()
        $('.slider-controls li:nth-child('+ imgPosControls +')').fadeIn()

    }

    function prevSliderControls(){
        //Si la posicion es menor o igual a 1, imgPos pasa a valer el total de items, sino se resta en uno
        if(imgPosControls <= 1){
            imgPosControls = imgItemsControls
        }else{
            imgPosControls--
        }

        $('.slider-controls li').hide()
        $('.slider-controls li:nth-child('+ imgPosControls +')').fadeIn()
    }

    //----------------------------------------------------------------------------------------------------------------
    
    //SLIDER WITH INDICATORS

    //Vamos a hacer una variable para contar cuántos sliders hay para meter dinámicamente los items de paginacion
    var imgItemsIndicators = $('.slider-indicators li').length
    //Vamos a hacer(esto viene de function nextSlider(), variable que empice en uno) que es la imagen posicion
    var imgPosIndicators = 1
    //console.log(imgItems)
    //Hago ciclo for para agregar items como imagenes haya
    for(var i = 1; i <= imgItemsIndicators;i++){
        $('.pagination-indicators').append('<li><span class="fas fa-circle"></span></li>')
    }

    
    //Desaparezcan todos los li que tienen las imágenes
    $('.slider-indicators li').hide()
    //Menos el primer li, sería la imagen "active"
    $('.slider-indicators li:first').show()
    //El primer item de paginacion le vamos a dar otro color
    $('.pagination-indicators li:first').css({color: '#E94057'})

    //Ejecutamos todas las funciones
    //FUNCIONES
    //La 1ra. funcion : Paginacion
    $('.pagination-indicators li').click(paginationIndicators)
    $('.right-indicators span').click(nextSliderIndicators)
    $('.left-indicators span').click(prevSliderIndicators)

    //Automatic
    setInterval(function(){
        nextSliderIndicators()
    }, 4000)

    //FUNCIONES
    function paginationIndicators(){
        /*Y ahora voy a traer con THIS ! ! ! el elemento en el que hice click.
        y le voy a poner la funcion index() al lado para que me diga el numero, o sea el indice del elemento al que he hecho click.
        Lo voy a meter en una variable*/
        var paginationPos = $(this).index() + 1
        //console.log(paginationPos)
         //Primero voy a ocultar todos 
         $('.slider-indicators li').hide()
        /*Despues voy a hacer algo que no es dinamico, por ejemplo voy a mostrar el slider 2
        $('.slider li:nth-child(2)').fadeIn()
        */
       $('.slider-indicators li:nth-child('+ paginationPosIndicators +')').fadeIn()
       //2-Y ahora quiero que todos los demás items a los que no le doy click se hagan de color gris, de color como si no estuviera marcado
       $('.pagination-indicators li').css({color : 'grey'})
       //1-Ahora, tenemos que hacer que el item en el que hago click se haga de color !
       $(this).css({color : '#E94057'})

       //Para que no de problemas y no se congele
       imgPosIndicators = paginationPosIndicators
       
    }

    function nextSliderIndicators(){
        //Si es mas grande a la cantidad de imagenes vuelva a 1
        if(imgPosIndicators >= imgItemsIndicators){
            imgPosIndicators = 1
        }else{
            imgPosIndicators++
        }

        //Le vamos a decir que los circles se pongan todos grises y se marque de color el correspondiente a la imagen
        $('.pagination-indicators li').css({color : 'grey'})
        //1-Ahora, tenemos que hacer que el item en el que hago click se haga de color !
        $('.pagination-indicators li:nth-child(' + imgPosIndicators + ')').css({color : '#E94057'})

        $('.slider-indicators li').hide()
        $('.slider-indicators li:nth-child('+ imgPosIndicators +')').fadeIn()

    }

    function prevSliderIndicators(){
        //Si la posicion es menor o igual a 1, imgPos pasa a valer el total de items, sino se resta en uno
        if(imgPosIndicators <= 1){
            imgPosIndicators = imgItemsIndicators
        }else{
            imgPosIndicators--
        }

        //Le vamos a decir que los circles se pongan todos grises y se marque de color el correspondiente a la imagen
        $('.pagination-indicators li').css({color : 'grey'})
        //1-Ahora, tenemos que hacer que el item en el que hago click se haga de color !
        $('.pagination-indicators li:nth-child(' + imgPosIndicators + ')').css({color : '#E94057'})

        $('.slider-indicators li').hide()
        $('.slider-indicators li:nth-child('+ imgPosIndicators +')').fadeIn()
    }

})