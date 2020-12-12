
// Toggle menu show
document.querySelector('.togglemenu').addEventListener('click',(e)=>{
    document.querySelector('.navmenu-box').style.display = "block";
});

// toggle menu hide 
document.querySelector('.closetoggle a').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.navmenu-box').style.display = "none";
});