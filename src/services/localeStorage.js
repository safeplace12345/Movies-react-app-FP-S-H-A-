const userInfo = e => {
    if(localStorage){
        localStorage.setItem("userInfo" ,e.target.value )
    }
    return 
}
 
export default userInfo;