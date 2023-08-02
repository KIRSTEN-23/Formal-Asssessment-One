// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $("#hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

  }); 
  
  //When the plant card is clicked
  $(".card").click(function(){

    //Toggle the price and description text
    $("#descriptionText").toggle();
    $("#priceText").toggle();

    //Resize the plant image
    $(".card-img-top").toggleClass("small");
  })

  $(document).on('click',"table .remove",function(){
    $(this).parent().remove();
});

