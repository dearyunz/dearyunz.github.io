// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function handleLoginBtnClick() {
//     //   console.log("Hello", loginInput.value); //value가 궁금
//     const userName = loginInput.value;
//     //   if (userName === "") {
//     //     alert("Pleas write your name.");
//     //   } else if (userName.length > 15) {
//     //     alert("Your name is too long.");
//     //   }
//     console.log(userName);
//   }

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 떄 사용
// 같은 string을 여러번 사용할 떄 유용

// 공간만 제공해주면 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣는다.
// event로 하는 것이 관행이다
function onLoginSubmit(event) {
  //preventDefault: 어떤 event의 기본 행동이 발생되지 않도록 막는 것
  //기본행동: 어떤 function에 대해 브라우저가 기본적을 수행하는 동작
  //ex. form을 submit하면 브라우저는 기본적으로 페이지를 새로고침
  //onLoginSubmit({information})

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  console.log(userName);
  // 문자열 합치기 방법 1
  // greeting.innerText = "Hello! " + userName + "!";
  // 문자열 합치기 방법 2 (백틱: ~ 표 기억)니코쌤 추천
  // 규칙1, ${} 규칙2 ``(백틱사용) '' "" 이거 절대 아님!
  paintGreetings(userName);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit); //if로 옮김
// link.addEventListener("click", handleLinkClick);
//함수 뒤 ()(괄호) 하지 않는 것 ! 괄호는 실행을 의미
//handleLinkClick({information about the event that just happend})

function paintGreetings(userName) {
  greeting.innerText = `Hello! ${userName}! KEEP GOING!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreetings(savedUsername);
}

// 두번째방법_출력할때 두번 검색

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "userName";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(USERNAME_KEY, userName);
//   paintGreetings();
// }

// function paintGreetings() {
//   const userName = localStorage.getItem(USERNAME_KEY); //두번째 검색
//   greeting.innerText = `Hello! ${userName}! KEEP GOING!`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY); //<-첫번째 검색

// if (savedUsername === null) {
//   //여기서 첫번째 검색
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   paintGreetings();
// }
