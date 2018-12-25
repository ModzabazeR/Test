/**
 * 
 */
$(document).ready(function(){
	alert( "Click OK to continue" );
	
	/*Post request method*/
	
	$("#bts").click(function(){
		$.post("TestCont",
		        {
		          Firstname: $("#usr").val(),
		          Lastname:$("#sur").val(),
		          Address:$("#add").val(),
		          Province:$("#cou").val(),
		          Zipcode:$("#zip").val(),
		          PhoneNumber:$("#tel").val(),
		        },
		        function(){
		            alert("Data saved successfully");
		        });
    });
	
    /*Done Method*/
	
	
	$('#usr').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	    	 $.ajax({
	             type : 'POST',
	             url : 'Test',
	             data : {
	                 "Firstname" : $("#usr").val()
	             },
	             success : function(data) {
	            	 alert(data.Lastname);
	                 //console.log("data :" + data);
	                 $("#sur").val(data.Lastname);
	                 $("#add").val(data.Address);
	                 $("#cou").val(data.Province);
	                 $("#zip").val(data.Zipcode);
	                 $("#tel").val(data.Telephone);
	             }
	         });
	    };
	});
	
    $("#btc").click(function(){
        alert("Are you sure to close this page?");
    });
    $("form").submit(function(){
        alert("Submitted");
    });
});