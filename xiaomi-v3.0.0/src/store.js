const STORAGE_KEY = "works";
export default {
	setStorage (items){
		localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
	},
	getStorage (){
		return JSON.parse(localStorage.getItem(STORAGE_KEY));
	}
}
