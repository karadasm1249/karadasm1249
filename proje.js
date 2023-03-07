function encrypt() {
	var plainText = document.getElementById("plain-text").value;
	var key = document.getElementById("encryption-key").value;
	var encrypted = CryptoJS.AES.encrypt(plainText, key);
	document.getElementById("encrypted-text").value = encrypted.toString();
}

function decrypt() {
	var encryptedText = document.getElementById("encrypted-text").value;
	var key = document.getElementById("encryption-key").value;
	var decrypted = CryptoJS.AES.decrypt(encryptedText, key);
	document.getElementById("decrypted-text").value = decrypted.toString(CryptoJS.enc.Utf8);
}
