// semgrep test: DOM XSS pattern
const user = location.hash.slice(1);        // untrusted input
document.getElementById("app").innerHTML = user; // dangerous sink
