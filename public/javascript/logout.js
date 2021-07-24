async function logoutHandler() { //this fxn will handle the logout process
const response = await fetch('/api/users/logout',{ //post request to this api route
    method:'post',
    headers:{'Content-Type':'application/json'} //meta data format
})
if(response.ok) {
    document.location.replace('/')//if response is ok then navigate user to landing page
}
else {
    alert(response.statusText)//if not ok then return a alert
}
}