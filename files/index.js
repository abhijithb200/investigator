
const textch = (e)=>{
    recon(e)
}
recon()

function recon(){
    document.getElementById('cards').innerHTML="";
    fetch("files/data.json")
.then(response => {
   return response.json();
})
.then(data => {
     datas = data;
    var dom = document.getElementById('index_input').value;
    for (let index = 0; index < Object.keys(datas).length; index++) {
        
        res = datas[index].link.replace(/domainname/gi, dom? (dom):("You need to enter a domain name"));
        document.getElementById('cards').innerHTML += `<div class='subcard'>
        <a class="link" href="${res}" target="_blank" >
        <div class='test'>
        <img src="${datas[index].img}"/>
        <p>${datas[index].name}</p>
        
        </div></a>
        </div>`
    }
});
}