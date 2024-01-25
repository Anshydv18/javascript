const api_url = 'https://api.github.com/users/anshydv18';

const xhr = new XMLHttpRequest();
xhr.open('GET',api_url);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4) {
    let data =JSON.parse(this.responseText);
    //the data we getten from the api is string
    
    console.log(data);
}
}
xhr.send();