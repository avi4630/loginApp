import React from 'react';

 const useFetch = (url,options) =>{

return fetch(url,options)
.then(resp => {
return resp.json();
})
.catch(error=> {
console.log("error :", error)
});
}
export default useFetch;