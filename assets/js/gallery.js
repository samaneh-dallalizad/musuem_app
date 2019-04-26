let i=0;
for(i; i<data.artObjects.length ;i++){ 
    const link= document.createElement('a');
    const img = document.createElement('img');
       

    link.setAttribute('href',"detailpage.html?page="+i);
    img.setAttribute('src',data.artObjects[i].webImage.url);
    img.classList.add('pic');
    link.appendChild(img);
    
    document.getElementById("gallery").appendChild(link);
    

       // console.log(data.artObjects[i].webImage.url);
    }