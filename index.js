<!--for in-app browser fbclid is missing sometime, this script extract it from cookie and inject into URL with push state-->
if (window.location.href.indexOf('fbclid') == -1) {
	const queryString = window.location.search;
	var cookies = document.cookie
	  .split(';')
	  .map(cookie => cookie.split('='))
	  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
	var fbclick = cookies._fbc;
	var fbclick_final = fbclick.slice(19, );
	var fbp = cookies._fbp
	var ua = window.navigator.userAgent
	history.pushState({}, null, queryString+'&fbclid='+fbclick_final+'&fbp='+fbp+'ua'+ua);	
}