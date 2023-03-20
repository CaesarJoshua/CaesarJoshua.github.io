var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Nada mal."; messageTime=""; messageError="Muy Mal."; messageErrorG="Muy Mal."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9GcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SSBsaWtlIHRvIHBsYXkgc29jY2Vy","Tm9ib2R5IHNhdmVkIG1lIGZyb20gbXlzZWxmLg==","U2hlIGxpa2VzIHRvIHN0dWR5Lg==","SSBkaWQgbm90IHN0dWR5IGZvciB0aGlzIGV4YW0sIGkgZGlkbid0IHVuZGVyc3RhbmQgYW55dGhpbmc=",""];imaW=["descarga.jpg","images.jpg","descarga__1_.jpg","descarga__3_.jpg",""];queW=["","","","",""];altW=["","","","",""];c=[21,28,19,59,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="Ordenar_Frases_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
