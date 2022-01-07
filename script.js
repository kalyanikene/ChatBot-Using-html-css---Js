function talk(){
    let know = {
      "Hi" : "Hello, Developers Community Here.",
      "How are you" : "Good :)",
      "How to learn html" : "Please visit our page w3school.com",
      "ok" : "Thank You So Much <3",
      "Bye" : "Okay! Will meet soon. TC:).."
    };
    let user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML =user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "For more details please visit our page w3school.com <br>";
    }
   
  }

  const inputField = document.getElementById("userBox")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
  });