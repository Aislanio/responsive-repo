

function menutogle(event){
	let togle = event.currentTarget;
	let togleIf  =  togle.classList.contains("of");

	if (togleIf !=false) {
		togle.classList.remove('of');
		togle.classList.add('on');
	}else{
		togle.classList.remove('on');
		togle.classList.add('of');
	}
}