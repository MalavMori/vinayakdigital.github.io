const toggle_link = document.getElementById('toggle_link');
const nav_link_mobile = document.getElementById('nav_link_mobile');
const btn = document.getElementById('btn');

let is_link_mobile = false;

toggle_link.addEventListener('click',()=>{
    if (is_link_mobile == false) {
        nav_link_mobile.style.height = '175px';
        is_link_mobile = true;
        toggle_link.classList.add('active');
    }else{
        nav_link_mobile.style.height ='0px';
        is_link_mobile = false;
        toggle_link.classList.remove('active');
    }
})
nav_link_mobile.addEventListener('click',()=>{
    toggle_link.click();
});

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (username && email && message != '') {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "accodemo5@gmail.com",
            Password: "demopass@",
            To: 'sujaymori154@gmail.com',
            From: "accodemo5@gmail.com",
            Subject: `${username} sent you`,
            Body: `email: ${email} <br/> ${message}`
        }).then(
            message => alert('Message sent')
        );
    } else {
        alert('fill input fild')
    }
});