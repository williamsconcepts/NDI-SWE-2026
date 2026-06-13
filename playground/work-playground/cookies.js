/**
 * Cookies
 * 
 * Cookies are small data files that are stored on your own computer and used by websites. they were invented to store things about the user of the website.
 * 
 * cookies are strings with a special pattern, They contain key-value pairs, and these key-value pairs are separated by semi-colons.
 * 
 * you can create a cookie and use it again later.
 * 
 * >> >> document.cookie = "name=Ebube;favoriteColor:black";
 */

let cookie = docodeURIComponent(document.cookie);
let cookieList = cookie.split(";");
for (let i = 0; i < cookieList.length; i++) {
    let c = cookieList[i];
    if (c.charAt(0) == " "){
        c = c.trim();
    }
    if (c.startsWith("name")) {
        alert(c.substring(5, c.length));
    }
}