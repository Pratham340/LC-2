function addUser(){
    user_name = document.getElementById("txt1").value;
    localStorage.setItem("txt1", user_name);

    pass_word = document.getElementById("psw1").value;
    localStorage.setItem("psw1", pass_word);

    window.location ="LetsChat_room.html";
}