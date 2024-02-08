let yes_button= document.getElementById("yes-btn")
const no_button= document.getElementById("no-btn")
let myImg=document.getElementById("myImg")
let mainText=document.getElementById("mainText")
let size=100
let no_count=0
const phrases = [
    "No",
    "Are you sure?",
    "Pura suar?",
    "Beoo Think again!",
    "Last chance!",
    "Surely not?",
    "bad me regret hoga!",
    "Beboo ek or baar soch!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "bebardu Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  
function change_size()
{  no_button.innerHTML = phrases[no_count];
    yes_button.style.width = (size) + 'px'; // setting the width to 200px
    yes_button.style.height = (size) + 'px'; // setting the height to 200px
    yes_button.style.fontSize = ((size)/2)+ 'px'; // setting the font size to 20px
    if(no_count<16){
        size+=size/10
        no_count+=1;
    }
    else
    {
        no_button.style.visibility = 'hidden';
    }

  

}
function yes_p(){
    no_button.parentElement.remove()
    yes_button.parentElement.remove()
    mainText.innerText="yayyyyyyyy maan gayi!!!!!!!!!!!!"
    myImg.src = "build/kiss-milk-and-mocha.gif";
   

}
