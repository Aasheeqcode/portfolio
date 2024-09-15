let light=false;
document.getElementById("move").onclick=function(e){
    document.getElementById("move").classList.toggle("active");
    light=!light;
    console.log(light);
    let title=document.querySelectorAll(".title");
    let points=document.querySelectorAll(".point");
    if(!light){
        document.querySelector("header").style.background="#151414";
        title.forEach((t)=>{
            t.style.color="#fff"
        })
        points.forEach((point)=>{
            point.style.backgroundColor="#fafafa";
        })
        document.querySelector(".hero").style.background="#151414";
        document.getElementById("tored").style.color="#eee";
        document.getElementById("tored").style.border="1px solid #eee";
        document.querySelector("#works").style.background="#141413";
        document.getElementById("edu").style.background="#010101"
        document.getElementById("eduhead").style.background="#141415";
        document.getElementById("keep").style.background="#010101";
    }
    else{
        document.querySelector("header").style.background="#fff";
        title.forEach((t)=>{
            t.style.color="#333"
        })
        points.forEach((point)=>{
            point.style.backgroundColor="#141414";
        })
        document.querySelector(".hero").style.background="#fff";
        document.getElementById("tored").style.color="#333";
        document.getElementById("tored").style.border="1px solid #333";
        document.querySelector("#works").style.background="#fff";
        document.getElementById("edu").style.background="#fefefe";
        document.getElementById("eduhead").style.background="#ddd";
        document.getElementById("keep").style.background="#fff";
    }
}
let viewport=document.getElementById("viewport");
document.getElementById("p1").onclick=function(){
   viewport.innerHTML=`
   <p id="blink">CLICK ANY HEADING CORRESPONDING TO THE POINT IN TIMELINE</p>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5558170425!2d80.15842187466438!3d12.936245387375882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525eff0f424581%3A0x4677671c009fb9e3!2sZion%20Matriculation%20Higher%20Secondary%20School%20Sembakkam!5e0!3m2!1sen!2sin!4v1726379424624!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   <h1>ZION MATRICUALATION SCHOOL,SEMBAKKAM</h1>`;
}
document.getElementById("p2").onclick=function(){
    viewport.innerHTML=`
    <p id="blink">CLICK ANY HEADING CORRESPONDING TO THE POINT IN TIMELINE</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.175064770658!2d80.05065757484118!3d12.960647087353692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1726379838283!5m2!1sen!2sin" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <h1>SRI SAIRAM INSTITUTE OF TECHNOLOGY</h1>
    <p>B.tech INFORMATION TECHNOLOGY,2ND YEAR</p>`;
 }
 document.getElementById("p3").onclick=function(){
    viewport.innerHTML=`
    <p id="blink">CLICK ANY HEADING CORRESPONDING TO THE POINT IN TIMELINE</p>
    <img src="./WhatsApp Image 2024-09-15 at 11.35.25_60a4db24.jpg" width=400 height=200>
    <h1>SAIRAM TECHNOINCUBATION</h1>
    <p>I HAD ATTENDED MY FIRST FS BOOTCAMP PROGRAM ON THEIR THEN I DONE SOME SMALL PROJECTS LIKE QUIZ WEB APP,ETC</p>`;
 }
 document.getElementById("p4").onclick=function(){
    viewport.innerHTML=`
    <p id="blink">CLICK ANY HEADING CORRESPONDING TO THE POINT IN TIMELINE</p>
    <img src="WhatsApp Image 2024-09-15 at 11.41.42_0430684b.jpg" width=300 height=300>
    <h1>MAESTROMIND</h1>
    <p>WORKING WITH MAESTROMIND AND BEING A PART OF MAESTROMIND, DOING CLIENT PROJECTS</p>
    `
 }
 document.getElementById("p5").onclick=function(){
    viewport.innerHTML=`
    <p id="blink">CLICK ANY HEADING CORRESPONDING TO THE POINT IN TIMELINE</p>
        <h1>SKILLS</h1>
        <img src="./mysql_PNG23.png.crdownload" width="120" style="padding: 15px;" alt="">
        <img src="./PHP-logo.svg.png" width="120" style="padding: 15px;" alt="">
        <img src="./MongoDB_Logo.jpg" width="120" style="padding: 15px;" alt="">
        <img src="./th (1).jpeg" width="120" style="padding: 15px;" alt="">
        <img src="./th (2).jpeg" width="120" style="padding: 15px;" alt="">
        <img src="./th.jpeg" width="120" style="padding: 15px;" alt="">
        <img src="./3d-javascript-logo-design-free-png.webp" width="120" style="padding: 15px;" alt="">
        <img src="./image-59.webp" width="120" style="padding: 15px;" alt="">
        <img src="./node-png-3.png" width="120" style="padding: 15px;" alt="">
    `;
 }