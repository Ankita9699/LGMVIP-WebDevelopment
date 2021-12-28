'use strict';

const btn = document.querySelector('.get_users');
const loader = document.querySelector('#loader');
const country = document.querySelector('.country');
const body = document.querySelector('body');
loader.style.display = 'none';

const fetchUsers = async function(){
    country.style.display = 'none';
    loader.style.display = 'block';
    let temp =`https://reqres.in/api/users?page=1`;
    const res = await fetch(temp);
    //console.log(res);
    const response = await res.json();
    console.log(response);
    const dataAr = [response.data];
    console.log(dataAr[0].length);
    let details = [];
    let html;
    for(let i = 0; i< dataAr[0].length; i++){
        details[i] = `${dataAr[0][i].first_name} ${dataAr[0][i].last_name}` ;
    }
    const str = details.join(', ');
    console.log(str);
    html = `<div class="country">
            <h2 class="api">Users from API call:</h2>
            
            <h3 class="country users"> ${str}</h3>
            </div>
            `; 
    body.insertAdjacentHTML('beforeend',html);
    loader.style.display = 'none';
}


btn.addEventListener('click',function(){
    fetchUsers();    
});