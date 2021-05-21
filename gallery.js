
let image0 = document.getElementById("galery0");
let image1 = document.getElementById("galery1");
let image2 = document.getElementById("galery2");
let title = document.getElementById("title");
let describtion = document.getElementById("description");
let readmore = document.getElementById("readmore");
let grid = document.getElementById("grid2x2");
let middle = document.getElementById("middle");

middle.classList.add("middle");
image0.classList.add("image0");
image1.classList.add("image1");
image2.classList.add("image2");

let middlehtml = middle.innerHTML;
    if($(window).width <600)
    {
        console.log("under 600");
    }
    else
    {
        console.log("above 600");
    }
image0.addEventListener("click", function(){
if(image1.classList.contains("image0"))
    {
        image0.classList.add("image3");
        image0.classList.remove("image4");
        image1.classList.add("image4");
        image1.classList.remove("image0");
        image2.classList.add("image0");
        image2.classList.remove("image1");
    }
    else if(image1.classList.contains("image1"))
    {
        image0.classList.add("image4");
        image0.classList.remove("image0");
        image1.classList.add("image0");
        image1.classList.remove("image1");
        image2.classList.add("image1");
        image2.classList.remove("image2");
    }
    else if(image1.classList.contains("image2"))
    {
        image0.classList.add("image0");
        image0.classList.remove("image1");
        image1.classList.add("image1");
        image1.classList.remove("image2");
        image2.classList.add("image2");
        image2.classList.remove("image3");
    }
    else if(image1.classList.contains("image3"))
    {
        image0.classList.add("image1");
        image0.classList.remove("image2");
        image1.classList.add("image2");
        image1.classList.remove("image3");
        image2.classList.add("image3");
        image2.classList.remove("image4");
    }
    else if(image1.classList.contains("image4"))
    {
        image0.classList.add("image2");
        image0.classList.remove("image3");
        image1.classList.add("image3");
        image1.classList.remove("image4");
        image2.classList.add("image4");
        image2.classList.remove("image0");
    }
    if(image1.classList.contains("image0"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="building.html">Learn more....</a>';
        }
        title.innerText="Build your defences!";
        describtion.innerText="Build your defences to help you defend before allmighty hordes of enemies!";
    }
    else if(image1.classList.contains("image1"))
    {
        readmore.innerHTML='';
        title.innerText="Welcome to the world of Etheria";
        describtion.innerText="Welcome to the magical world of Etheria, full of adventure, amazing loot and a lot of fun. Defend the magical crystals before the army of the old one. Download now and hop right into battle with us!";
    }
    else if(image1.classList.contains("image2"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="combat.html">Learn more....</a>';
        }
        title.innerText="Defend before hordes of enemies!";
        describtion.innerText="Defend before hordes of enemy and join us in the onslaught for victory.";
    }
    else if(image1.classList.contains("image3"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="inventory.html">Learn more....</a>';
        }
        title.innerText="Experience with different gear!";
        describtion.innerText="Use different hero to fight the enemies and secure the victory for the kingdom.";
    }
    else if(image1.classList.contains("image4"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="skin.html">Learn more....</a>';
        }
        title.innerText="Customize your look!";
        describtion.innerText="Collect amazing flairs and cosmetic to customize the look of your character. There are over 1000 different cosmetic combinations to use!";
    }
    middlehtml = middle.innerHTML;
    console.log(middlehtml);
});
image2.addEventListener("click", function(){
    if(image1.classList.contains("image0"))
    {
        image0.classList.add("image0");
        image0.classList.remove("image4");
        image1.classList.add("image1");
        image1.classList.remove("image0");
        image2.classList.add("image2");
        image2.classList.remove("image1");
    }
    else if(image1.classList.contains("image1"))
    {
        image0.classList.add("image1");
        image0.classList.remove("image0");
        image1.classList.add("image2");
        image1.classList.remove("image1");
        image2.classList.add("image3");
        image2.classList.remove("image2")
    }
    else if(image1.classList.contains("image2"))
    {
        image0.classList.add("image2");
        image0.classList.remove("image1");
        image1.classList.add("image3");
        image1.classList.remove("image2");
        image2.classList.add("image4");
        image2.classList.remove("image3");
    }
    else if(image1.classList.contains("image3"))
    {
        image0.classList.add("image3");
        image0.classList.remove("image2");
        image1.classList.add("image4");
        image1.classList.remove("image3");
        image2.classList.add("image0");
        image2.classList.remove("image4");
    }
    else if(image1.classList.contains("image4"))
    {
        image0.classList.add("image4");
        image0.classList.remove("image3");
        image1.classList.add("image0");
        image1.classList.remove("image4");
        image2.classList.add("image1");
        image2.classList.remove("image0");
    }
    if(image1.classList.contains("image0"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="building.html">Learn more....</a>';
        }
        title.innerText="Build your defences!";
        describtion.innerText="Build your defences to help you defend before allmighty hordes of enemies!";
    }
    else if(image1.classList.contains("image1"))
    {
        readmore.innerHTML='';
        title.innerText="Welcome to the world of Etheria";
        describtion.innerText="Welcome to the magical world of Etheria, full of adventure, amazing loot and a lot of fun. Defend the magical crystals before the army of the old one. Download now and hop right into battle with us!";
    }
    else if(image1.classList.contains("image2"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="combat.html">Learn more....</a>';
        }
        title.innerText="Defend before hordes of enemies!";
        describtion.innerText="Defend before hordes of enemy and join us in the onslaught for victory.";
    }
    else if(image1.classList.contains("image3"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="inventory.html">Learn more....</a>';
        }
        title.innerText="Experience with different gear!";
        describtion.innerText="Use different hero to fight the enemies and secure the victory for the kingdom.";
    }
    else if(image1.classList.contains("image4"))
    {
        if($(window).width() <900 && $(window).height()<600)
        {
            readmore.innerHTML='';
        }
        else
        {
            readmore.innerHTML='<a href="skin.html">Learn more....</a>';
        }
        title.innerText="Customize your look!";
        describtion.innerText="Collect amazing flairs and cosmetic to customize the look of your character. There are over 1000 different cosmetic combinations to use!";
    }
    middlehtml = middle.innerHTML;
    console.log(middlehtml);
})
