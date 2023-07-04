// DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const urlSearch = (str) => {
    let url = str.search(/(?!www.|ww.|w.)[a-zA-Z0-9]+.?[a-zA-Z0-9]+\b\.com/ig)
    str = str.split('')
    let slice = str.slice(url)
    str = slice.join('')
    url = str.search(/\b\.com/ig)
    slice = str.slice(0, url)
    return slice
}



console.log(urlSearch("www.google.com"))
console.log(urlSearch("https://google-boogle.com"))
console.log(urlSearch("www.google-scream.com"))


// Better solutions:
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

// Also better:
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }
