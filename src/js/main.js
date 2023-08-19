
const searchBtn= document.getElementById('search-bar');
const navHeader= document.getElementById('nav-header');
const searchBox= document.getElementById('text-container');
const closeBtn= document.getElementById('close-button');
const dropDownBtn= document.getElementById('drop-down');

searchBtn.addEventListener('click',()=>{
    navHeader.style.display='none';
    searchBtn.style.display='none';
    searchBox.style.display='flex';
})

navHeader.addEventListener('click',()=>{
  dropDownBtn.classList.toggle('dropdown-container')

  if(dropDownBtn.style.display=='none'){
    dropDownBtn.style.display='flex';
  }
  else{
    dropDownBtn.style.display='none';
  }
  
   
})

closeBtn.addEventListener('click',()=>{
    navHeader.style.display='flex';
    searchBtn.style.display='flex';
    searchBox.style.display='none';
})



