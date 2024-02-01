const login = document.getElementById('login');
const signup = document.getElementById('signup');

const showText = {
  login : {
    header : 'Not yet a member?',
    byline : 'Sign up and discover what we can do for you',
    buttonText: 'Sign up'
  },
  
  signup : {
    header : 'Already a member?',
    byline : 'Sign in and see what\'s new since your last visit',
    buttonText: 'Sign in'    
  }
}
const switchButton = document.getElementById('switch-button');
const switchText =  document.getElementById('switch-text');

switchButton.addEventListener('click', () => {
  login.classList.toggle('hide-view');
  signup.classList.toggle('hide-view');
  login.classList.contains('hide-view') ? changeSwitchText('signup') : changeSwitchText('login')
})

function changeSwitchText(el){
  switchText.children[0].innerText = showText[el].header;
  switchText.children[1].innerText = showText[el].byline;
  switchButton.innerText = showText[el].buttonText;
}

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