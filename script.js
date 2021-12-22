const toggle=document.getElementById('tgl-div');

function openToggle(){
    if (toggle.style.display==="block"){
        toggle.style.display="none";
        console.log(3);
    }
    else {
        toggle.style.display="block";
    }
}

function validation(){
    console.log("read");
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let txtarea=document.getElementById('txtarea').value;

    if (name==""){
        document.getElementById('name-span').innerHTML="***Please fill the name field...";
        return false;
    }
    if ((name.length<=2) || (name.length>20)){
        document.getElementById('name-span').innerHTML="***user name length must be between 2 to 20..."
        return false;
    }
    if (isNaN(name)==false){
        document.getElementById('name-span').innerHTML="***only characters are allowed...";
        return false;
    }
    document.getElementById('name-span').innerHTML="";

    if (email==""){
        document.getElementById('email-span').innerHTML="***Please fill the email field...";
        return false;
    }
    if (email.indexOf('@')==0){
        document.getElementById('email-span').innerHTML="***Invalid Position for @..."
        return false;
    }
    if (email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.'){
        document.getElementById('email-span').innerHTML="***Invalid Position for .";
        return false;
    }
    document.getElementById('email-span').innerHTML="";

    if (phone==""){
        document.getElementById('phone-span').innerHTML="***Please fill the mobile number field...";
        return false;
    }
    if (isNaN(phone)){
        document.getElementById('phone-span').innerHTML="***only numbers are allowed...";
        return false;
    }
    if (phone.length!=10){
        document.getElementById('phone-span').innerHTML="***mobile must be 10 digits...";
        return false;
    }
    document.getElementById('phone-span').innerHTML="";

    if (txtarea==""){
        document.getElementById('txtarea-span').innerHTML="***Please fill this field...";
        return false;
    }
    document.getElementById('txtarea-span').innerHTML="";

    alert('Form has been submitted successfully');

    return true;
}

const hide_show=document.getElementById('hide-show');
document.getElementById('btn-1').addEventListener('click',()=>{
    if (hide_show.style.display=="none"){
        hide_show.style.display="block";
        hide_show.innerHTML="This is the content of the btn-1 and here we can put as much content as we want...";
        hide_show.style.fontSize="2.5rem";
        hide_show.style.fontWeight="bold";
        hide_show.style.background="green";
        hide_show.style.color="white";
        hide_show.style.paddingLeft="30px";
        hide_show.style.paddingRight="30px";
        hide_show.style.textAlign="center";
        hide_show.style.borderTopLeftRadius="50px";
        hide_show.style.borderBottomRightRadius="50px";
    }
    else {
        hide_show.style.display="none";
    }
})
document.getElementById('btn-2').addEventListener('click',()=>{
    if (hide_show.style.display=="none"){
        hide_show.style.display="block";
        hide_show.innerHTML="This is the content of the btn-2 and here we can put as much content as we want...";
        hide_show.style.fontSize="2.5rem";
        hide_show.style.fontWeight="bold";
        hide_show.style.background="blue";
        hide_show.style.color="white";
        hide_show.style.paddingLeft="30px";
        hide_show.style.paddingRight="30px";
        hide_show.style.textAlign="center";
        hide_show.style.borderTopLeftRadius="50px";
        hide_show.style.borderBottomRightRadius="50px";
    }
    else {
        hide_show.style.display="none";
    }
})
document.getElementById('btn-3').addEventListener('click',()=>{
    if (hide_show.style.display=="none"){
        hide_show.style.display="block";
        hide_show.innerHTML="This is the content of the btn-3 and here we can put as much content as we want...";
        hide_show.style.fontSize="2.5rem";
        hide_show.style.fontWeight="bold";
        hide_show.style.background="#333";
        hide_show.style.color="white";
        hide_show.style.paddingLeft="30px";
        hide_show.style.paddingRight="30px";
        hide_show.style.textAlign="center";
        hide_show.style.borderTopLeftRadius="50px";
        hide_show.style.borderBottomRightRadius="50px";
    }
    else {
        hide_show.style.display="none";
    }
})
document.getElementById('btn-4').addEventListener('click',()=>{
    if (hide_show.style.display=="none"){
        hide_show.style.display="block";
        hide_show.innerHTML="This is the content of the btn-4 and here we can put as much content as we want...";
        hide_show.style.fontSize="2.5rem";
        hide_show.style.fontWeight="bold";
        hide_show.style.background="crimson";
        hide_show.style.color="white";
        hide_show.style.paddingLeft="30px";
        hide_show.style.paddingRight="30px";
        hide_show.style.textAlign="center";
        hide_show.style.borderTopLeftRadius="50px";
        hide_show.style.borderBottomRightRadius="50px";
    }
    else {
        hide_show.style.display="none";
    }
})

const lightbox=document.createElement('div');
lightbox.id='lightbox';
document.body.appendChild(lightbox);
const images=document.querySelectorAll('.pop');
images.forEach(image => {
    image.addEventListener('click',e => {
        lightbox.classList.add('active-lightbox');
        const img=document.createElement('img');
        img.src=image.src;
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener('click',e => {
    if (e.target!==e.currentTarget){
        return;
    }
    lightbox.classList.remove('active-lightbox');
})

const input_value = document.getElementById('subscribe-input');
document.getElementById('subscribe-btn').addEventListener('click',()=>{
    if (input_value.value==""){
        alert('please provide a valid email...');
    }
    else {
        alert('Thanks for subscribing to our news channel...');
        input_value.value="";
    }
})


