/* Settings *\
\*==========*/
var settings = {
	"navigation": {
		"newWindow": true
	},

	"search": {
		"engines": [
						//["http://www.duckduckgo.com/?", "q", "DuckDuckGo", "sg"],
		],
		"focusSearch": false
	},

	"clock": {
		"showClock": false
	},

	"animation": {
		"hideLinks": true
	},

	"icons": {
		"showIcons": true
	}
};

/*  Clock  *\
\*=========*/
function updateClock() {
	var currentTime = new Date ();
	var currentHours = currentTime.getHours ();
	var currentMinutes = currentTime.getMinutes ();
	var currentSeconds = currentTime.getSeconds ();

	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	//var timeOfDay = (currentHours < 12) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	//currentHours = (currentHours > 12) ? currentHours - 12 : currentHours + 2;

	// Convert an hours component of "0" to "12"
	//currentHours = (currentHours == 0) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = (currentHours + 2) + ":" + currentMinutes + ":" + currentSeconds;

	// Fill '#clock' div with time
	$("#clock").html(currentTimeString);
}

function searchBox(url, name, placeholder) {
	var string = '<form method="get" action="' + url + '">'
	           + '<input type="text" id="g" name="' + name + '" placeholder="' + placeholder + '" maxlength="255" value="">'
	           + '<input type="submit" value="Go">'
	           + '</form>';
	return string;
}

$(document).ready(function() {

	var shortcuts = {};

	/*  Get Links  *\
	\*=============*/
	var linkString = $('body').text();

	/*  Clear Page  *\
	\*==============*/
	$('body').empty();

	/*  Create Array from linkString  *\
	\*================================*/
	var linkArray = linkString.split("\n");

	/*  Go thru Array  *\
	\*=================*/
	var i;
	var count = 1;
	var html = '';

	for(i in linkArray) {

		/*  Get line  *\
		\*============*/
		var line = jQuery.trim(linkArray[i]);

		// If line is empty, skip
		if(!line) continue;

		/*  If it doesn't contain "://",  *\
		|*  it's not a URL                *|
		\*================================*/
		if(/:\/\//.test(line) != true) {
			if(count > 1) {
				html = html + '</div>';
			}
			html = html + '<div class="block"><h1>' + line + '</h1><ul>';
			count++;
			continue;
		}

		/*  Split URL, Title and icon (if any) *\
		\*=======================*/
		var lineArray = line.split(" || ");
		var url = lineArray[0];
		var title = lineArray[1];

		var icon = "";
		if (lineArray[3]) {
			icon = lineArray[3];
		}

		/*  Add to shortcuts array *\
		\*=========================*/
		if(lineArray[2]) {
			shortcuts[lineArray[2]] = "'"+url+"'";
		}

		/* Prepares HTML code for showing icon *\
		\*=====================================*/
		var iconHtml = '';
		if (settings.icons.showIcons && icon) {
			iconHtml = '<img src="' + icon + '"/>';
		}

		/*  Add HTML code  *\
		\*=================*/
		if(settings.navigation.newWindow) {
			html = html + '<li>' + iconHtml + '<a href="' + url + '" target="_blank">' + title + '</a></li>'
		}
		else {
			html = html + '<li>' + iconHtml + '<a href="' + url + '">' + title + '</a></li>'
		}
	}

	/*  Add generated content to page  *\
	\*=================================*/
	html = html + '</ul></div>';
	$('body').append(html);


	/*  Animation Time!  *\
	\*===================*/

	/*  Hide lists  *\
	\*==============*/
	if (settings.animation.hideLinks) {
		$('ul').slideUp();

		/*  Show on hover  *\
		\*=================*/
		$('.block').mouseenter(function() {
			$('ul', this).stop().slideDown();
		});

		/*  Hide on unhover  *\
		\*===================*/
		$('.block').mouseleave(function() {
			$('ul', this).stop().slideUp();
		});
	}


	/*  Search Engines  *\
	\*==================*/

	var search = '<div id="searches">';

	for (var i = 0; i < settings.search.engines.length; i++) {
		var engine = settings.search.engines[i];
		search = search + searchBox(engine[0], engine[1], engine[2]);
		if(engine[3]) {
			var jsSearchUrl=engine[0]+"?"+engine[1]+"=";
			var jsSearchPrompt="prompt('Search "+engine[2]+":')";
			var jsSearch="'"+jsSearchUrl+"'+"+jsSearchPrompt;
			shortcuts[engine[3]] = jsSearch;
      }
	}

	search = search + '</div>';

	/*  Add to page  *\
	\*===============*/
	$('body').append(search);
	if(settings.search.focusSearch) {
		var searchDiv = document.getElementById ('searches');
		$(searchDiv.firstChild.firstChild).focus();
	}

	/*  Clock  *\
	\*=========*/

	if(settings.clock.showClock) {
		// Add empty '#clock' div
		$('body').append('<div id="clock"></div>');

		// Update clock
		setInterval('updateClock()', 1000);
	}


	/*  Keybindings  *\
	\*===============*/

	var typed = '';
	var shortcutArray = Object.keys(shortcuts);
	var typedDate = new Date();

	// Check if we typed a keybinding
	function hasSubstring(element) {
		var index = typed.indexOf(element);
		if(index >= 0) {
			var sliced = typed.slice(index, typed.length);
			typed = ''; // Clean typed, so that we can watch for the next keybinding
			if(settings.navigation.newWindow) {
				window.open(eval(shortcuts[sliced]));
			} else {
				window.location.replace(eval(shortcuts[sliced]));
			}
		}
	}

	// React on keypress
	$(window).keypress(function(e) {
		// If we're in an input, we don't want to interpret the keypresses
		$('input').keypress(function(e) {
			e.stopPropagation();
		});
		var nowDate = new Date();
		var diffMs = (nowDate - typedDate);
		if (diffMs > 1000) {
			typed = String.fromCharCode(e.which);
		} else {
			typed = typed + String.fromCharCode(e.which);
		}
		typedDate = new Date();
		shortcutArray.some(hasSubstring);
	});

});
