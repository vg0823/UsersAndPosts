export class User{
	'id':number;
	'name':string;
	'email':string;
	'phone':string;
	'website':string;
	'address':Address;
	'company':Company; 
}

interface Address{
	'street':string;
	'suite':string;
	'city':string;
	'zipcode':string;
	'geo':{
		'lat':string;
		'lng':string;
	}
}

interface Company{
	'name':string;
	'catchPhrase':string;
	'bs':string;
}
