let rid = document.cookie;
if(!(rid.startsWith("cookieTest"))){
  alert("please login!!");
  location.href = "./rid.html";
}
