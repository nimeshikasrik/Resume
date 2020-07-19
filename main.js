fetch("data.json").then(response=>{
	return response.json();
}).then(data=>{
	profile(data.profiles.profile);

})
var childone=document.querySelector(".childone");
var profile=(profile)=>{
	var name=document.createElement("h4");
	name.textContent="Name: "+profile.name;
	childone.append(name);

	var p=document.createElement("h4");
	p.textContent="Specialization: "+profile.studies;
	childone.append(p);

	var g=document.createElement("h4");
	g.textContent="Hobbies: "+profile.game;
	childone.append(g);

	var r=document.createElement("h4");
	r.textContent="FAV Movies: "+profile.movies;
	childone.append(r);

	var q=document.createElement("h4");
	q.href="tel:"+profile.mobileNo;
	q.textContent="Mobile NO: "+profile.mobileNo;
	childone.append(q);

	var p=document.createElement("a");
	p.href="mail to :"+profile.email;
	p.textContent=profile.email;
	childone.append(p);
	
}