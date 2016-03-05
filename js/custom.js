// $(".pre").hide();
// $(".next").click(function(){
// $(".pre").show();
// $(".sheet-1").hide();
// $(".sheet-2").show();
// });

var important={};
var type="";

$('.pre').on("click",function(){
remove();
console.log(state);
});


$('.next').on("click",function(){

add();

// console.log(state);

});
$('.skip a').on("click",function(){

add();

// console.log(state);

});

var state=0;


function add(){
if(state>=0 && state<=6) {

		state++;
		check();
}


}

function remove(){
if(state>=0 && state<6) {
state--;
check();
wow(0);
}
}


function check(){



if(state==0){

	hawasChipao();
	$('.pre').hide();
	$('.sheet-1').show();
	$('.sheet-1').addClass('animated slideInUp fadeIn');

}
else if(state==1) {

	    $('.pre').show();
	
	hawasChipao();
			


		$('.sheet-2').show();
		$('.sheet-2').addClass('animated slideInUp fadeIn');
}
else if(state==2){

	
	hawasChipao();

		$('.sheet-3').show();
		$('.sheet-3').addClass('animated slideInUp fadeIn');
		wow(3);

}

else if(state==3){


	hawasChipao();
		$('.sheet-4').show();
		$('.sheet-4').addClass('animated slideInUp fadeIn');
		wow(1);
		$( ".next" ).removeClass( "trans");

}	

else if(state==4){

	hawasChipao();

	
		$('.sheet-5').show();
		$('.sheet-5').addClass('animated slideInUp fadeIn');
		$( ".next" ).addClass( "trans");



			$(".submi").on("click",function(){

var fname=$('#fname').val();
var num=$('#num').val();
								
										if(fname==""){

														alert("Please enter your name");
														$("#fname").addClass("alert");

										} 
										else if(num=="") {
															alert("Please enter your number");
											

										}
										else {

													 if($("#num").val().length==10) {

													 	add();
													 }
													 else {
													 	alert("please enter 10 digit number only");
													 }
														
														
										}


			

			});


}

else if(state==5){

	hawasChipao();

		$('.sheet-4').hide();
		$('.sheet-6').show();
		$('.sheet-6').addClass('animated fadeIn');
		// $( ".pre" ).addClass( "trans");
		// $( ".next" ).addClass( "trans");
		$('.side').hide();
		$( ".next").hide();
		$( ".pre" ).hide();

}




$('.count').text(state+1);



}

// actions



function hawasChipao(){
		$('.sheet-1').hide();
		$('.sheet-2').hide();
		$('.sheet-3').hide();
		$('.sheet-4').hide();
		$('.sheet-5').hide();
	   $('.sheet-6').hide();


}


// form controls 






function wow(x){
var count=0;var c=0;
$('.option').on("click",function(){
	
	if(($(".option.selected").length<=2) || ($(".option.selected").length==0)){
	$(this).toggleClass("selected");
	}
	else {		
		$(this).removeClass("selected");
	}
});
}

$('.optionr').on("click",function(){

	$('.optionr').removeClass("selected");
	$(this).addClass("selected");

});




function putInfo(){

var bud=$('#sli').val();
var age=$('#veh').val();
var imp=$('.option.selected').text();
var type=$('.optionr.selected').text();
var fname=$('#fname').val();
var num=$('#num').val();
var ref = new Firebase("https://landingwa.firebaseio.com/");

				    ref.push({
				      Budget: bud,
				      Age: age,
				      Important:imp,
				      Type:type,
				      Name:fname,
				      Number:num
				  });

}

$("#sli").on("input change", function() {
 
 $('.fd').text(shitGotReal($("#sli").val()));

});

function shitGotReal(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}






