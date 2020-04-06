import React from 'react';

const useFetch=(url,option)=>{
    debugger
    return fetch(url,option).then(response=>{
        if(response.ok){
        console.log("res ok:"+response.json().token); 
        debugger
        return response.json();
        }else{
            throw new Error(response);   
        }
    }).catch(error=>{
        console.log("error:",error);
    })
};
export default useFetch;