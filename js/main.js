var loginBtn = document.getElementById('loginBtn')
var signUpBtn = document.getElementById('signUpBtn')
var logoutBtn=document.getElementById('logoutBtn')

var emailLogin = document.getElementById('emailLogin')
var passwordLogin = document.getElementById('passwordLogin')

var nameSignUp = document.getElementById('nameSignUp')
var emailSignUp = document.getElementById('emailSignUp')
var passwordSignUp = document.getElementById('passwordSignUp')

var signUp = document.getElementById('signUp')
var login = document.getElementById('login')

var signUpMsg = document.getElementById('signUpMsg')
var loginMsg = document.getElementById('loginMsg')

var signUpCard = document.getElementById('signUpCard')
var loginCard = document.getElementById('loginCard')
var home=document.getElementById('home')

login.addEventListener('click', showSignUp)
signUp.addEventListener('click', showLogin)

function showSignUp() {
  loginCard.classList.add("d-none");
  loginCard.classList.remove("d-flex");
  signUpCard.classList.add("d-flex");
  signUpCard.classList.remove("d-none");
  home.classList.add("d-none")
  home.classList.remove("d-flex")
  loginMsg.innerHTML = '';
}

function showLogin() {
  loginCard.classList.add("d-flex");
  loginCard.classList.remove("d-none");
  signUpCard.classList.add("d-none");
  signUpCard.classList.remove("d-flex");
  home.classList.add("d-none")
  home.classList.remove("d-flex")
  signUpMsg.innerHTML = '';
}
var welcomeName=document.getElementById('welcomeName')
var username;
function showHome(username) {
  welcomeName.innerHTML='Welcome '
  loginCard.classList.add("d-none");
  loginCard.classList.remove("d-flex");
  signUpCard.classList.add("d-none");
  home.classList.remove("d-none");
  home.classList.add("d-flex")
  welcomeName.innerHTML+=username
}


var emailsArr;

(function () {
  if (localStorage.getItem('data') == null)
    emailsArr = [];
  else {
    emailsArr = JSON.parse(localStorage.getItem('data'));
  }
})();

signUpBtn.addEventListener('click', signUpAcc);

function signUpAcc() {

  if (signUpCheck()) {
    signUpMsg.innerHTML = `<span style="color: rgb(40, 167, 69);">sucess</span>`;
    var account = {
      aName: nameSignUp.value,
      aEmail: emailSignUp.value,
      aPass: passwordSignUp.value
    }

    emailsArr.push(account);
    localStorage.setItem('data', JSON.stringify(emailsArr))
  }

}

loginBtn.addEventListener('click', loginAcc);

function loginAcc() {
  if (loginCheck())
    showHome(username);
}

logoutBtn.addEventListener('click',function() {
emailLogin.value='';
passwordLogin.value='';
  showLogin();
});

function signUpCheck() {
  var checkResult = true;

  if (nameSignUp.value == '' || nameSignUp.value == '' || nameSignUp.value == '') {
    checkResult = false;
    signUpMsg.innerHTML = `<span style="color: #DC3541;">All inputs are required</span>`
  }

  for (var i = 0; i < emailsArr.length; i++) {
    if (emailSignUp.value == emailsArr[i].aEmail) {
      checkResult = false;
      signUpMsg.innerHTML = `<span style="color: #DC3541;">email already exists</span>`
      break;
    }
  }

  return checkResult
}

function loginCheck() {


  if (emailLogin.value == '' || passwordLogin.value == '') {
    loginMsg.innerHTML = `<span style="color: #DC3541;">All inputs are required</span>`
    return false;
  }

  for (var i = 0; i < emailsArr.length; i++) {
    if (emailLogin.value == emailsArr[i].aEmail && passwordLogin.value == emailsArr[i].aPass) {
      username=emailsArr[i].aName;
      return true;
    }
  }

  loginMsg.innerHTML = `<span style="color: #DC3541;">incorrect email or password</span>`
return false;

}