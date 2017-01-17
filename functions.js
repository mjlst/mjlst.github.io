// Temporary placement until this code gets finalized.
// This part is for header. Apply to all the pages.
// Resizing Based on Screen Size
var t = 200;
var flapSize;
var flapReSize = function () {
	if ($(window).width() < 860) {
		flapSize = '-100%'
	}
	else if ($(window).width() > 861 && $(window).width() < 1024) {
		flapSize = '-50%'
	}
	else {
		flapSize = '-30%'
	}	
};
$(document).ready(flapReSize);
$(window).resize(flapReSize);

function fadeOutAll() {
	$('body').fadeOut(300);
}
function fadeInAll() {
	$('body').animate({
		'opacity':1
	}, 300);
}
function linkLoad() {
	$('.menuon, .logo').delay(t*4).animate({
		'margin': '0 2em',
		'opacity' : 1
	}, 300);
};
function slideOutMenu() {
	$('.menu').animate({
		left: flapSize
		}, 400, 'easeOutCubic', function() {
			$('.menu').fadeOut(10);			
		});
	$('.menu > ul > li').animate({
		'margin-left': '0',
		'opacity': 0
	}, 80, 'easeOutCubic');
}
function slideInMenu() {
	$('.menu').animate({
		left: '0px'
		}, 400, 'easeOutCubic');
	$('.menu > ul > li').each(function(i){
		$(this).delay(i*80+160).animate({
					'margin-left': '80px',
					'opacity': 1
		}, 280, 'easeOutCubic');
	});
}
function slideOutAbout() {
	$('.about').animate({
		left:  flapSize
		}, 400, 'easeOutCubic', function() {
			$('.about').fadeOut(10);
	});
}
function slideInAbout() {
		$('.about').animate({
			left: '0px'
			}, 400, 'easeOutCubic');
}
$('.menu, .menuon').on('click', function() {
	if ( $('.menu').is(':visible') ) {
		slideOutMenu();
	}
	else {
		slideOutAbout();
		$('.menu').fadeIn(10);
		slideInMenu();
	}
});
fadeInAll();
linkLoad();

$('.left.gallery, .right.gallery').delay(t*4).animate({
		'margin-top':0,
		'opacity':1
},300);

$('.fadein').each(function(i) {
	$(this).delay(100*i+200).animate({
		'top': '-20px',
		'opacity':1
	}, 300);
});
$('.about, .abouton').on('click', function() {
	if ( $('.about').is(':visible') ) {
		slideOutAbout();
	}
	else {
		slideOutMenu();
		$('.about').fadeIn(10);	
		slideInAbout();
	}
});
$('li.focus > img').css({
	'opacity':1
});

$('.menu > ul > li > a').hover(function(i) {
	$('.menu > ul > li').removeClass('focus');
	var up = $(this).parent('li');
	$(up).addClass('focus');
	var index = $('.menu > ul > li').index(up);
	var matchingItem = '.menu > img:nth-child(' + [index+3] + ')'
	var elseItem = $('.menu > img').not(matchingItem);
	$(elseItem).animate({
		'opacity':0
	}, 50);
	$(matchingItem).animate({
		'opacity':1
	}, 100);
});
$('a').not('a[target="_blank"], .fld').click( function(ev){
	// Stop anchor
	ev.preventDefault();
	// Store a reference to the anchor tag
	var $self=$(this);
	fadeOutAll();
	$('.menu').animate({
			left: '-100%'
	},400, 'easeOutCubic', function(){
	//now get the anchor href and redirect the browser
	document.location = $self.attr('href');
	});
});
// This part is for header. Apply to all the pages. The End.
// setting up colors for the social links (This part is only related to index.html
var colorsets = ['#0077b5', '#1da1f3', '#222222', '#ea4c89', '#00AB6c'];
$('svg > g > circle').each(function(i) {
	$(this).css({
		'fill':colorsets[i]
		});
});
$('p.sclblrb').each(function(i) {
	$(this).css({
		'color':colorsets[i]
		});
});

$('.scl > a').hover(function(i) {
	$(this).prev('.sclblrb').animate({
		'opacity':1,
		'top':'-40px'
		}, 100);
	$(this).find('circle').animate({'r':35}, 100);
}, function(i) {
	$(this).prev('.sclblrb').animate({
		'opacity':0,
		'top':'-24px'
		}, 100);
	$(this).find('circle').animate({'r':26}, 100);
});
// setting up colors for the social links (This part is only related to index.html
var clr = ['#002841', '#AD847C', '#78828C', '#FF7C5A', '#93959A', '#fa8072', '#696969']
$('a > figure').each(function(i) {
	$(this).css({
		'background-color': clr[i]
	});
});
// Fix Selection problem
$('.option').click(function() {
	var inThisOpt = $(this).closest('.selection').find('.option');
	var inThisFig = $(this).closest('.selection').find('figure');
	var index = $(inThisOpt).index(this);
	$(inThisOpt).removeClass('this');
	$(this).addClass('this');
	if ($(this).closest('.selection').children('figure').length > 0) {
		var matchingItem = '.selection > figure:nth-child(' + [index+2] + ')'
		$(inThisFig).fadeOut().removeClass('selected');
		$(matchingItem).fadeIn().addClass('selected');
	}
	else {
	}
});
