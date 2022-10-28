var postnummer	= 0;
var barcodenummer = 0;
var barcode		= 0;
var luhnbarcode 	= 0;
	
function berechnen() { 
	with(window.document.formular) {
		postnummer = postnr.value;
		if(postnummer == "") {
			alert("Fehler: Bitte Postnummer eingeben!");
			return false;
		}

	if(isNaN(postnummer) == true) {
		alert("Fehler: Bitte als Postnummer nur Ziffern eingeben!");
		return false;
	}
	
	if (postnummer.toString().split('').length != 8){
		alert("Postnummer muss genau 8 Ziffern haben!");
		document.Entry.number.focus();
		document.getElementById('number').style.color="red";
		result = false;
	}
  
	barcodenummer = postnummer *= 631;
	pruefziffer = luhn_calculate(barcodenummer); 
	barcode = "3000" + barcodenummer + pruefziffer;
	barcodenr.value = barcode;
	JsBarcode("#dhl-barcode", barcode);
	}

	return true;
}

function ruecksetzen() {
	with(window.document.formular) {
		barcodenr = 0;
		if(berechnen() == false) {
		barcodenr.value = barcodenr;
	}
}
	return true;
}

function luhn_checksum(code) {
	var len = code.length
	var parity = len % 2
	var sum = 0
	for (var i = len-1; i >= 0; i--) {
		var d = parseInt(code.charAt(i))
			if (i % 2 == parity) { d *= 2 }
				if (d > 9) { d -= 9 }
			sum += d
}
	return sum % 10
}

function luhn_calculate(partcode) {
	var checksum = luhn_checksum(partcode + "0")
	return checksum == 0 ? 0 : 10 - checksum
}

function luhn_validate(fullcode) {
	return luhn_checksum(fullcode) == 0
}