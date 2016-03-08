// $(".pre").hide();
// $(".next").click(function(){
// $(".pre").show();
// $(".sheet-1").hide();
// $(".sheet-2").show();
// });



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function magicThingy(){

var arr=[0,1,3];
var arr1=shuffle(arr);
arr1.push(4)
console.log(arr1);

return arr1;

}

var count=0;var c=0;
$('.option').on("click",function(){
	console.log("hello");
	if(($(".option.selected").length<=2) || ($(".option.selected").length==0)){
	$(this).toggleClass("selected");
	}
	else {		
		$(this).removeClass("selected");
	}
});


$('.optionr').on("click",function(){

	$('.optionr').removeClass("selected");
	$(this).addClass("selected");

});

$(".submi").on("click",function(){
$('#message').hide();
var fname=$('#fname').val();
var num=$('#num').val();
								
										if(fname==""){
														alert("Enter your name");
													// $('#message').text("Please enter your name").show().addClass("animated fadeIn");

										} 
										else if(num=="") {
												
														// $('#message').text("Please enter soemthing?").show().addClass("animated fadeIn");
											
																alert("Enter a message");
										}
										else {

													 // if($("#num").val().length==10) {
													 
													 	putInfo();
													 	hawasChipao();
													 	$('.sheet-6').show().addClass('animated fadeIn');
													 	$('.pre').hide();
													 	$('.nav').hide();
													 	$('.side').hide();


													 // }
													 // else {
													 // 	$('#message').text("Please enter a valid number(10 digit)").show().addClass("animated fadeIn");
													 // }
														
														
										}

			});



var arv=0;

$('.pre').on("click",function(){
remove();
// console.log(state);
});


$('.next').on("click",function(){

add();

// console.log(state);

});
$('.skip a').on("click",function(){

add();

// console.log(state);

});
var arw=magicThingy();
var state=arw[0];
check();
var b;

function add(){
			if(arw[state]>=0 && arw[state]<=6) {

					arv++;

					// arw[state++];
					check();
			}


}

function remove(){
		if(arw[state]>=0 && arw[state]<6) {
		// arw[state--];

		arv--;
		check();
		
}
}


function check(){



if(arw[arv]==0){

	hawasChipao();
	$('.sheet-1').show();
	$('.sheet-1').addClass('animated slideInUp fadeIn');


}
else if(arw[arv]==1) {

	
	
	hawasChipao();
			


		$('.sheet-2').show();
		$('.sheet-2').addClass('animated slideInUp fadeIn');
}
else if(arw[arv]==2){

		// check();


	  // b=arv-1;  
	  hawasChipao();
      add();
      check();

		$('.sheet-3').show();
		$('.sheet-3').addClass('animated slideInUp fadeIn');
		

}

else if(arw[arv]==3){


	hawasChipao();
		$('.sheet-4').show();
		$('.sheet-4').addClass('animated slideInUp fadeIn');

		// $( ".next" ).removeClass( "trans");

}	

else if(arw[arv]==4){

	hawasChipao();

	
		$('.sheet-5').show();
		$('.sheet-5').addClass('animated slideInUp fadeIn');
		// $( ".next" ).addClass( "trans");	
		$('.next').hide();
				$('.skip').hide();






}

else if(state==5){

	hawasChipao();


		$('.sheet-5').hide();
		$('.sheet-6').show();
		$('.sheet-6').addClass('animated fadeIn');
		// $( ".pre" ).addClass( "trans");
		// $( ".next" ).addClass( "trans");
		$('.side').hide();
		$( ".next").hide();
		$( ".pre" ).hide();

}

 if(arv==0){

console.log("show next only");
		$( ".next").show();
		$( ".pre" ).hide();


}

else if(arv==4) {

console.log("show pre only");
		$( ".next").hide();
		$( ".pre" ).show();

}






b=arv+1;
$('.count').text(b);



}

// actions



function hawasChipao(){
		$('.sheet-1').hide();
		$('.sheet-2').hide();
		$('.sheet-3').hide();
		$('.sheet-4').hide();
		$('.sheet-5').hide();
	   $('.sheet-6').hide();


			$( ".next").show();
		$( ".pre" ).show();

		

}


// form controls 













function putInfo(){

var bud=$('#sli').val();
var age=$('#veh').val();
var imp=$('.option.selected').text();
var type=$('.optionr.selected').text();
var fname=$('#fname').val();
var num=$('#num').val();
var ref = new Firebase("https://landingwa.firebaseio.com/testing2");

				    ref.push({
				      Budget: bud,
				      Age: age,
				      Type:type,
				      Name:fname,
				      Number:num,
				      timestamp:Firebase.ServerValue.TIMESTAMP
				  });
				    console.log("sent was ok");

}

$("#sli").on("input change", function() {
 
 $('.fd').text(shitGotReal($("#sli").val()));

});

function shitGotReal(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}






