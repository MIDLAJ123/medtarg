$(function() {
  var list = $('.js-dropdown-list');
  var link = $('.js-link');
  link.click(function(e) {
    e.preventDefault();
    list.slideToggle(200);
  });
  list.find('li').click(function() {
    var text = $(this).html();
    var icon = '<i class="fa fa-chevron-down"></i>';
    link.html(text+icon);
    list.slideToggle(200);
    if (text === '* Reset') {
      link.html('Select one option'+icon);
    }
  });
});

function sendMail(){
  var params = {
    name: document.getElementById("username").value ,
    email: document.getElementById("email").value ,
    password: document.getElementById("Password").value ,
  };
  
  const serviceID ="service_k7vkv0a"
  const templateID ="template_pmmjkvd"
  
  emailjs.send(serviceID,templateID,params)
  .then(
    res =>{
      document.getElementById("username").value= "";
      document.getElementById("email").value= "";
      document.getElementById("Password").value= "";
      console.log(res);
      alert("Your massege sent successfully");
    })
    .catch((err) => console.log(err));
}
