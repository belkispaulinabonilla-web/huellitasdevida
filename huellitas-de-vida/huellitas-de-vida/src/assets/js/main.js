// Estilos
import '../scss/style.scss';

// Cambia aquí el número de WhatsApp (código de país + número, sin signos)
var WHATSAPP="50400000000";
document.getElementById("cita").addEventListener("submit",function(e){
 e.preventDefault();
 var f=new FormData(e.target);
 var t="Hola, soy "+f.get("dueno")+". Quiero agendar: "+f.get("servicio")+" para "+f.get("mascota")+". "+f.get("mensaje");
 window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t),"_blank");
});
// Indicador de abierto/cerrado (hora local del visitante)
(function(){
 var d=new Date(),dia=d.getDay(),h=d.getHours()+d.getMinutes()/60,ab=false;
 if(dia>=1&&dia<=5)ab=h>=8&&h<18;
 if(dia===6)ab=h>=8&&h<13;
 var el=document.getElementById("estado");
 el.textContent=ab?"Abierto ahora":"Cerrado · emergencias 24 h";
})();
