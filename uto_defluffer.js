// ==UserScript==
// @name        uto_defluffer
// @namespace   rk.utodefluffer.com
// @description Fix uto fluff
// @include     http://utopia-game.com/wol/game/*
// @version     1
// ==/UserScript==

var uto_jq;

// Add jQuery
(function(){
	wait_for_jq();
})();

// Check if jQuery's loaded
function wait_for_jq() {
	if (typeof unsafeWindow.jQuery == 'undefined') {
		window.setTimeout(wait_for_jq, 50);
	} else {
		uto_jq = unsafeWindow.jQuery;
		tidyUto();
	}
}


function tidyUto () {
		

	uto_jq("p:contains('My liege, I see you are interested in sending')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Building infrastructure is absolutely vital')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('The Arts & Sciences are the heart')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Science is obtained in two steps')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('you require a military presence to both defend your lands')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Welcome to the wizard academy.')").css('height','0px').css('opacity','0');

	uto_jq("p:contains('You enter the Mystic Circle')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('From here, you may order your magical minions to cast their magic')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('You can learn more about these spells in the ')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Some of these spells will take effect instantly')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Wizards have an amazing array of spells at their disposal, ')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('You descend into an underground area of your castle')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('You enter your War Room. Surrounded')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('You can learn more about attack options from the')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('when friends are in need you can send them supplies to help keep them alive.')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Also, the Utopian Lords will levy increasingly heavy shipment taxes on provinces whose net trade deficits exceed 400% their net worths.')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Remember, though, we can only send aid to those in our own kingdom')").css('height','0px').css('opacity','0');

	uto_jq("p:contains('A strongly united kingdom is vital to your long-term success')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Alas, the scribes of the world can only keep up with ')").css('height','0px').css('opacity','0');

	uto_jq("p:contains(', I track some important information about the health of our province')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('generals available to lead our armies. One must always stay here')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('Our military effectiveness is determined by the wage rates of our armed forces')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('In addition, our military strength is affected by a number of other factors')").css('height','0px').css('opacity','0');
	uto_jq("p:contains(' the table below shows our training estimates for the next 24 days')").css('height','0px').css('opacity','0');
	uto_jq("p:contains('The structures we construct throughout our lands may or may not function at full capacity')").css('height','0px').css('opacity','0');
	
	uto_jq("p:contains('You will find that as we build more of certain building types, ')").css('height','0px').css('opacity','0');
	uto_jq("p:contains(', you know that sending our scholars to study requires time')").css('height','0px').css('opacity','0');
	uto_jq("p:contains(', the magical auras affecting our province are detailed below.')").css('height','0px').css('opacity','0');
	uto_jq("p:contains(', it is my job to keep track of our greatest moments in history, ')").css('height','0px').css('opacity','0');

}
