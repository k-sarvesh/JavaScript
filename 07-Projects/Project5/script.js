const profiles = [
  {
    name: "Sujal Singh",
    pic: "https://cmmodels.de/wp-content/uploads/2021/08/gabriel-new-face-white-shirt-brown-hair-pretty-boy-young-white-background-studio-brown-hair-wet-look.jpg",
    bio: "Silent chaos in a loud world | Not for Everyone"
  },
  {
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "Built from discipline, not motivation"
  },
  {
    name: "Rohan Kapoor",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio: "Minimal words. Maximum intent."
  },
  {
    name: "Dipika Sharma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Focused. Unbothered. Relentless."
  },
  {
    name: "Aditya Verma",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Evolving quietly, winning loudly"
  },
  {
    name: "Arya Joshi",
    pic: "https://plus.unsplash.com/premium_photo-1679692887717-dc7f5d090271?q=80&w=774&auto=format",
    bio: "Not perfect. Just consistent."
  },
  {
    name: "Sahil Malhotra",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Depth over noise. Always."
  },
  {
    name: "Yash Patel",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Calm mind. Sharp ambition."
  }
];

function showUser(arr){
    arr.forEach(function(profiles){
        //create card div
        const card = document.createElement("div");
        card.classList.add("card");

        //create img 
        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = profiles.pic;

        //create blur div 
        const blurediv = document.createElement("div");
        blurediv.style.backgroundImage = `url(${profiles.pic})`;
        blurediv.classList.add("blurred-layer");

        //create info div
        const infodiv = document.createElement("div");
        infodiv.classList.add("content");

        //create h2 
        const heading = document.createElement("h2");
        heading.textContent = profiles.name;
        
        //create p 
        const para = document.createElement("p");
        para.textContent = profiles.bio;

        infodiv.appendChild(heading);
        infodiv.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurediv);
        card.appendChild(infodiv);

        document.querySelector(".cards-container").appendChild(card);
    });
}

showUser(profiles);

let inp = document.querySelector("input");

inp.addEventListener('input',function(){
    let newUser = profiles.filter((profiles)=>{
        return profiles.name.startsWith(inp.value);
})
document.querySelector(".cards-container").innerHTML= "";
if(newUser.length===0){
    document.querySelector(".cards-container").innerHTML="Cards not found!! "
}
else{

showUser(newUser);
}


})