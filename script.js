const calculatrice = document.querySelector("#calculatrice");
var valeur1 = ""; //Valeur 1
var valOpe;	//Opérateur
var valeur2 = ""; //Valeur 2
var resultat = ""; //Contient le résultat d'un opération
var chgVal = false; //Indique si on stock dans la valeur 1 ou 2
calculatrice.addEventListener('click',(e)=>{
	//Si on appui sur un chiffre ou une virgule
	if ((e.target.getAttribute("class")=="num col-xs-4") || (e.target.getAttribute("class")=="virg col-xs-4")) {
		//Si on possède déjà une valeur
		if (chgVal){
			valeur2 += e.target.innerHTML;
			document.querySelector("#resultat").innerHTML = valeur2;
		} else {
			valeur1 += e.target.innerHTML;
			document.querySelector("#resultat").innerHTML = valeur1;
		}
	}
	//Si on appui sur le C
	if (e.target.innerHTML == "C"){
		document.querySelector("#resultat").innerHTML = "";
		valeur1 = "";
		valeur2 = "";
		valOpe = undefined;
		resultat = "";
		chgVal = false;
	}
	//Si on appui sur un opérateur
	if ((e.target.getAttribute("class")=="ope col-xs-3")&&(valeur1!="")){
		valOpe = e.target.innerHTML;
		chgVal = true;
	}
	//Si on appui sur la touche =
	if ((e.target.innerHTML == "=")&&(valeur1!="")&&(valeur2!="")){

		switch(valOpe){
			case "+":
				resultat= parseFloat(valeur1) + parseFloat(valeur2);
				break;
			case "-":
				resultat= parseFloat(valeur1) - parseFloat(valeur2);
				break;
			case "x":
				resultat= parseFloat(valeur1) * parseFloat(valeur2);
				break;
			case "/":
				resultat= parseFloat(valeur1) / parseFloat(valeur2);
				break;
		}
		document.querySelector("#resultat").innerHTML = resultat;
		document.querySelector("#suppr").innerHTML = "AC";
	}
	//Si on souhaite continuer un calcul après l'appui sur le =
	if (resultat){
		valeur1 = resultat;
		valeur2 = "";
		valOpe = undefined;
		resultat = undefined;
		chgVal = true;
	}
	//Si on appui sur AC, remise à zéro
	if (e.target.innerHTML == "AC"){
		valeur1 = "";
		valeur2 = "";
		valOpe = undefined;
		resultat = "";
		chgVal = false;
		document.querySelector("#suppr").innerHTML = "C";
		document.querySelector("#resultat").innerHTML = resultat;
	}

	//Vérification des valeurs dans la console
	console.log(valeur1);
	console.log(valOpe);
	console.log(valeur2);
	console.log(resultat);
	

},false);