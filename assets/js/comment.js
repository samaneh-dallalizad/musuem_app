let url_string = window.location.href;
let url = new URL(url_string);
let page = url.searchParams.get("page");

let pagePic=document.getElementById('gallry_details').getElementsByTagName( 'img' )[0];
    pagePic.setAttribute('src',data.artObjects[page].webImage.url);
console.log(pagePic);







document.getElementById('send_msg').addEventListener('click', function(event){
    event.preventDefault();
    const name=document.getElementById('name');
    const msg=document.getElementById('message');
    const nameValue=name.value;
    const msgValue=msg.value;

    if(formValidation(nameValue,msgValue)){
        console.log("form_validation");
    }else{
        const comment = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        
        h3.innerHTML = `${nameValue} said:`;
        p.innerHTML = msgValue;
        comment.classList.add('user_comment');
        comment.appendChild(h3);
        comment.appendChild(p);
        document.getElementById("comments").appendChild(comment); 
    }       
      
});

function formValidation(name,msg){
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!')
        return true;
      }
    
      if(msg.length > 280) {
        alert('Your comment is too long')
        return true
      }
    
      return false
}


