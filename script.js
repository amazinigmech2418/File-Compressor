
var apiLib = {
    get: function (site,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open('GET', site, true);
        xhttp.send();
    }
};
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/objects.js",function(data){eval(data);});
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/numbers.js",function(data){eval(data);});
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/strings.js",function(data){eval(data);});
function compress(arg) {
var numberMap = arg.toNumberMap();
for(var zzz=0; zzz<numberMap.length; zzz++) {
numberMap[zzz] = numberMap[zzz].toString(2);
}

for(var zz=0; zz<numberMap.length; zz++) {
while(numberMap[zz].length < 8) {
numberMap[zz] = "0" + numberMap[zz];
}
}
var array = [];
for (var z = 0; z<numberMap.length; z+=2) {
array.push(String.fromCharCode(parseInt(numberMap[z]+numberMap[z+1],2)));
}
return array.join("");
}
function extract(arg) {
var numberMap = arg.toNumberMap();
for(var zzz=0; zzz<numberMap.length; zzz++) {
numberMap[zzz] = numberMap[zzz].toString(2);
    while(numberMap[zzz].length < 8) {
numberMap[zzz] = "0" + numberMap[zzz];
}
}


var array = [];
for (var z = 0; z<numberMap.length; z++) {
array.push(String.fromCharCode(parseInt(numberMap[z].slice(0,7),2)));
array.push(String.fromCharCode(parseInt(numberMap[z].slice(7),2)));
}
return array.join("");
}
