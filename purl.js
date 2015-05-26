var urlvar = getUrlVars();

$(document).ready(function() {
	$('body').hide();

	//Default values (originally added for Wordpress to us lp.js)
	var page = urlvar['page'];
	if(!page) page = 1;
	var purl = urlvar['name'];
	if(!purl) purl = urlvar['purl'];
console.log('here');

	$.ajax({
	    url: 'http://purlapi.com/lp/index.jsonp?ID='+urlvar['ID']+'&name='+purl+'&page='+page,
	    dataType: "jsonp",
	    jsonpCallback: 'callback',
	    success: function(visitor) {
	    	 if(!visitor.firstName) nopurl(); //Call this optional function if no purl is found. Used to redirect to other page if no PURL.
	    	
	    	var $content = $("h1, h2, h3, h4, h5, h6, p, li, span");
	        $content.each(function(i, current){
	        	content = purlConvert($(current).html(),visitor);
	            $(current).html(content);
	        });	  
		    
		    //Form
		    if(visitor.campaign_prepopulate != 0) {
			    $('input[name="first_name"]').val(visitor.firstName);
			    $('input[name="firstname"]').val(visitor.firstName);
			    $('input[name="last_name"]').val(visitor.lastName);
			    $('input[name="lastname"]').val(visitor.lastName);
			    $('input[name="company"]').val(visitor.organization);
			    $('input[name="position"]').val(visitor.position);
			    $('input[name="email"]').val(visitor.email);
			    $('input[name="phone_number"]').val(visitor.phone);
			    $('input[name="address"]').val(visitor.address);
			    $('input[name="city"]').val(visitor.city);
			    $('input[name="state"]').val(visitor.state);
			    $('input[name="zip"]').val(visitor.zip);
		    }
		    
		    $('body').show();
	    }
	});
});

function purlConvert(content, visitor) {
	if(!visitor.firstName) visitor.firstName = '';
	if(!visitor.lastName) visitor.lastName = '';
	if(!visitor.organization) visitor.organization = '';
	if(!visitor.position) visitor.position = '';
	if(!visitor.email) visitor.email = '';
	if(!visitor.phone) visitor.phone = '';
	if(!visitor.address) visitor.address = '';
	if(!visitor.city) visitor.city = '';
	if(!visitor.state) visitor.state = '';
	if(!visitor.zip) visitor.zip = '';
	if(!visitor.content) visitor.content = '';
	if(!visitor.form) visitor.form = '';
	if(!visitor.contacts_cf_1) visitor.contacts_cf_1 = '';
	if(!visitor.contacts_cf_2) visitor.contacts_cf_2 = '';
	if(!visitor.contacts_cf_3) visitor.contacts_cf_3 = '';
	if(!visitor.contacts_cf_4) visitor.contacts_cf_4 = '';
	if(!visitor.contacts_cf_5) visitor.contacts_cf_5 = '';
	if(!visitor.contacts_cf_6) visitor.contacts_cf_6 = '';
	if(!visitor.contacts_cf_7) visitor.contacts_cf_7 = '';
	if(!visitor.contacts_cf_7) visitor.contacts_cf_8 = '';
	if(!visitor.contacts_cf_9) visitor.contacts_cf_9 = '';
	if(!visitor.contacts_cf_10) visitor.contacts_cf_10 = '';
	if(!visitor.contacts_cf_11) visitor.contacts_cf_11 = '';
	if(!visitor.contacts_cf_12) visitor.contacts_cf_12 = '';
	if(!visitor.contacts_cf_13) visitor.contacts_cf_13 = '';
	if(!visitor.contacts_cf_14) visitor.contacts_cf_14 = '';
	if(!visitor.contacts_cf_15) visitor.contacts_cf_15 = '';
	if(!visitor.contacts_cf_16) visitor.contacts_cf_16 = '';
	if(!visitor.contacts_cf_17) visitor.contacts_cf_17 = '';
	if(!visitor.contacts_cf_17) visitor.contacts_cf_18 = '';
	if(!visitor.contacts_cf_19) visitor.contacts_cf_19 = '';
	if(!visitor.contacts_cf_20) visitor.contacts_cf_20 = '';
	if(!visitor.contacts_cf_21) visitor.contacts_cf_21 = '';
	if(!visitor.contacts_cf_22) visitor.contacts_cf_22 = '';
	if(!visitor.contacts_cf_23) visitor.contacts_cf_23 = '';
	if(!visitor.contacts_cf_24) visitor.contacts_cf_24 = '';
	if(!visitor.contacts_cf_25) visitor.contacts_cf_25 = '';
	if(!visitor.contacts_cf_26) visitor.contacts_cf_26 = '';
	if(!visitor.contacts_cf_27) visitor.contacts_cf_27 = '';
	if(!visitor.contacts_cf_27) visitor.contacts_cf_28 = '';
	if(!visitor.contacts_cf_29) visitor.contacts_cf_29 = '';
	if(!visitor.contacts_cf_30) visitor.contacts_cf_30 = '';
	if(!visitor.contacts_cf_31) visitor.contacts_cf_31 = '';
	if(!visitor.contacts_cf_32) visitor.contacts_cf_32 = '';
	if(!visitor.contacts_cf_33) visitor.contacts_cf_33 = '';
	if(!visitor.contacts_cf_34) visitor.contacts_cf_34 = '';
	if(!visitor.contacts_cf_35) visitor.contacts_cf_35 = '';
	if(!visitor.contacts_cf_36) visitor.contacts_cf_36 = '';
	if(!visitor.contacts_cf_37) visitor.contacts_cf_37 = '';
	if(!visitor.contacts_cf_37) visitor.contacts_cf_38 = '';
	if(!visitor.contacts_cf_39) visitor.contacts_cf_39 = '';
	if(!visitor.contacts_cf_40) visitor.contacts_cf_40 = '';
	if(!visitor.contacts_cf_41) visitor.contacts_cf_41 = '';
	if(!visitor.contacts_cf_42) visitor.contacts_cf_42 = '';
	if(!visitor.contacts_cf_43) visitor.contacts_cf_43 = '';
	if(!visitor.contacts_cf_44) visitor.contacts_cf_44 = '';
	if(!visitor.contacts_cf_45) visitor.contacts_cf_45 = '';
	if(!visitor.contacts_cf_46) visitor.contacts_cf_46 = '';
	if(!visitor.contacts_cf_47) visitor.contacts_cf_47 = '';
	if(!visitor.contacts_cf_47) visitor.contacts_cf_48 = '';
	if(!visitor.contacts_cf_49) visitor.contacts_cf_49 = '';
	if(!visitor.contacts_cf_50) visitor.contacts_cf_50 = '';
	
	var content = content.replace(/#firstName/g,visitor.firstName);
    var content = content.replace(/#lastName/g,visitor.lastName);
    var content = content.replace(/#company/g,visitor.organization);
    var content = content.replace(/#organization/g,visitor.organization);
    var content = content.replace(/#position/g,visitor.position);
    var content = content.replace(/#email/g,visitor.email);
    var content = content.replace(/#phone/g,visitor.phone);
    var content = content.replace(/#address/g,visitor.address);
    var content = content.replace(/#city/g,visitor.city);
    var content = content.replace(/#state/g,visitor.state);
    var content = content.replace(/#zip/g,visitor.zip);
    var content = content.replace(/#content/g,visitor.content);
    var content = content.replace(/#form/g,visitor.form);
    var content = content.replace(/#custom1/g,visitor.contacts_cf_1);
    var content = content.replace(/#custom2/g,visitor.contacts_cf_2);
    var content = content.replace(/#custom3/g,visitor.contacts_cf_3);
    var content = content.replace(/#custom4/g,visitor.contacts_cf_4);
    var content = content.replace(/#custom5/g,visitor.contacts_cf_5);
    var content = content.replace(/#custom6/g,visitor.contacts_cf_6);
    var content = content.replace(/#custom7/g,visitor.contacts_cf_7);
    var content = content.replace(/#custom8/g,visitor.contacts_cf_8);
    var content = content.replace(/#custom9/g,visitor.contacts_cf_9);
    var content = content.replace(/#custom10/g,visitor.contacts_cf_10);
    var content = content.replace(/#custom11/g,visitor.contacts_cf_11);
    var content = content.replace(/#custom12/g,visitor.contacts_cf_12);
    var content = content.replace(/#custom13/g,visitor.contacts_cf_13);
    var content = content.replace(/#custom14/g,visitor.contacts_cf_14);
    var content = content.replace(/#custom15/g,visitor.contacts_cf_15);
    var content = content.replace(/#custom16/g,visitor.contacts_cf_16);
    var content = content.replace(/#custom17/g,visitor.contacts_cf_17);
    var content = content.replace(/#custom18/g,visitor.contacts_cf_18);
    var content = content.replace(/#custom19/g,visitor.contacts_cf_19);
    var content = content.replace(/#custom20/g,visitor.contacts_cf_20);
    var content = content.replace(/#custom21/g,visitor.contacts_cf_21);
    var content = content.replace(/#custom22/g,visitor.contacts_cf_22);
    var content = content.replace(/#custom23/g,visitor.contacts_cf_23);
    var content = content.replace(/#custom24/g,visitor.contacts_cf_24);
    var content = content.replace(/#custom25/g,visitor.contacts_cf_25);
    var content = content.replace(/#custom26/g,visitor.contacts_cf_26);
    var content = content.replace(/#custom27/g,visitor.contacts_cf_27);
    var content = content.replace(/#custom28/g,visitor.contacts_cf_28);
    var content = content.replace(/#custom29/g,visitor.contacts_cf_29);
    var content = content.replace(/#custom30/g,visitor.contacts_cf_30);
    var content = content.replace(/#custom31/g,visitor.contacts_cf_31);
    var content = content.replace(/#custom32/g,visitor.contacts_cf_32);
    var content = content.replace(/#custom33/g,visitor.contacts_cf_33);
    var content = content.replace(/#custom34/g,visitor.contacts_cf_34);
    var content = content.replace(/#custom35/g,visitor.contacts_cf_35);
    var content = content.replace(/#custom36/g,visitor.contacts_cf_36);
    var content = content.replace(/#custom37/g,visitor.contacts_cf_37);
    var content = content.replace(/#custom38/g,visitor.contacts_cf_38);
    var content = content.replace(/#custom39/g,visitor.contacts_cf_39);
    var content = content.replace(/#custom40/g,visitor.contacts_cf_40);
    var content = content.replace(/#custom41/g,visitor.contacts_cf_41);
    var content = content.replace(/#custom42/g,visitor.contacts_cf_42);
    var content = content.replace(/#custom43/g,visitor.contacts_cf_43);
    var content = content.replace(/#custom44/g,visitor.contacts_cf_44);
    var content = content.replace(/#custom45/g,visitor.contacts_cf_45);
    var content = content.replace(/#custom46/g,visitor.contacts_cf_46);
    var content = content.replace(/#custom47/g,visitor.contacts_cf_47);
    var content = content.replace(/#custom48/g,visitor.contacts_cf_48);
    var content = content.replace(/#custom49/g,visitor.contacts_cf_49);
    var content = content.replace(/#custom50/g,visitor.contacts_cf_50);


    return content;
}
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function nopurl() {
        //placeholder function in case the user does not define one
}
