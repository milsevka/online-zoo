export function validate(){
    let form = document.getElementsByClassName("submit");
    let email = document.getElementById("exampleInputEmail1").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern))
    {
        form.classList.add("valid");
        console.log('ndndndn')
        // form.classList.remove("invalid");
    }
    // else{
    //     form.classList.remove("valid");
    //     form.classList.add("invalid");
    // }
    // if (email == "") {
    //     form.classList.remove("valid");
    //     form.classList.remove("invalid");
    // }
} 
