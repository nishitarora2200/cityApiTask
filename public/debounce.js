
const getdata =  ()=>{
    const city= document.getElementById('search').value;
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?
access_token=pk.eyJ1IjoibmlzaGl0YXJvcmEyMjAwIiwiYSI6ImNrNm02bXh2ZTBrdzQzbGxrNGt1dXA2YzYifQ.
4dXxuUSi35sjgWH7lRVKwA`).then(result=>{
    return result.json();

}).then(data=>{
  let panelHtml=``;
    data.features.forEach(element => {
        console.log(element.text);
       
    panelHtml+=`<option value=${element.text}>` 
    
        
    })
    document.getElementById('cities').innerHTML = panelHtml;  
   })
  }
const debounce = (callback,delay)=>{
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callback();
        },delay);
    }
}

const debounceApi = debounce(getdata,500);


