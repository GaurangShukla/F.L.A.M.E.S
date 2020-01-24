function loveCalc(){
var str1,str2,finalstr1,finalstr2;
str1 = document.getElementById("name1").value.split('');
str2 = document.getElementById("name2").value.split('');
finalstr1 = $(str1).not(str2).get().join('').cleanup();;
finalstr2 = $(str2).not(str1).get().join('').cleanup();;
var strlen = finalstr1.length + finalstr2.length; 
var arr = new Array("F", "L", "A", "M", "E", "S");
var stp=1;
for (i=6;i>0;i--) {
	var g=((strlen%i)+stp)-1;
	if (arr.length>1) {
		if(g>i)	{
			g=g%i;
		}
		if(g==0) {
			g=arr.length;
		}
		arr.splice(g-1,1);
		stp=g;
	}
}
switch (arr[i]) {
	case "F":
		document.getElementById("result").innerHTML = "Friendship";
		break;
	case "L":
		document.getElementById("result").innerHTML = "Love";
		break;
	case "A":
		document.getElementById("result").innerHTML = "Affection";
		break;
	case "M":
		document.getElementById("result").innerHTML = "Marriage";
		break;		
	case "E":
		document.getElementById("result").innerHTML = "Enemy";
		break;
	case "S":
		document.getElementById("result").innerHTML = "Sex";
		break;			
}
document.getElementById("result").style.display="block";
return false;
}

function getParam( name ) {
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
 var regexS = "[\\?&]"+name+"=([^&#]*)";
 var regex = new RegExp( regexS );
 var results = regex.exec( window.location.href );
 if( results == null )
  return "";
else
 return results[1];
}

String.prototype.cleanup = function() {
   return this.toLowerCase().replace(/[^a-zA-Z]+/g, "");
}

function urlQr() {
var n1 = getParam( 'name1' );
var n2 = getParam( 'name2' );
document.getElementById("name1").value=n1.cleanup();
document.getElementById("name2").value=n2.cleanup();
updateURL();
	if (document.getElementById('name1').value != "" && document.getElementById('name2').value != "") {
		loveCalc();
	}
}

function updateURL() {
	var q1 = document.getElementById("name1").value.cleanup();
	var q2 = document.getElementById("name2").value.cleanup();
      if (history.pushState) {
          var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?name1=' + q1 + '&name2=' + q2;
          window.history.pushState({path:newurl},'',newurl);
      }  
}
