var i;
var j;

for (i = 0 ; i <= 200 ; i ++) {
    var so = "";
for (j= i + 1 ; j <= 200; j++) {
    so += j + "&nbsp" ;
}
document.write(i + "&nbsp" + so + "<br/>" )
}