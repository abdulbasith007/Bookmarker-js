document.getElementById("myForm").addEventListener("submit", fun());
//console.log(a);

function fun(e) {
    var sname = document.getElementById("siteName").value;
    var surl = document.getElementById("siteUrl").value;
    console.log(sname);
    console.log("phjhj");
    e.preventDefault();
}