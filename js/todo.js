const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// 위 아래 같은 문장!
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// const toDos = []; //localStorage에는 오직 텍스트만 저장 가능. 리스트 불가능
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify 값이나 객체를 문자열로 변환
  //JSON.parse 살아있는 객체. array로 변환
}

function deleteToDo(event) {
  // console.dir(event.target.parentElement.innerText);
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  // console.log(typeof li.id); //id 출력 확인 - 타입확인(string)
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // toDos = toDos.filter((toDo) => string(toDo.id) !== li.id); // 이건 왜 안될까
  saveToDos(); //꼭!!! local에 저장도해야함!
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❤️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); //appent는 맨마지막!
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; //<---- 새로운 변수에 저장
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn off", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //arrow function(화살표 함수):sayHello함수와 같음
  // parsedToDos.forEach((item) => console.log("this is the turn off", item));
  parsedToDos.forEach(paintToDo);
}

// 문제발생! 버튼클릭->화면에서 리스트 삭제 but 로컬스토어에는 안지워짐
// 해결 1! 리스트 요소에 각자 ID를 주고싶다
// 고유한 랜덤 ID -> Date.now() 밀리초(1000분의 1초)를 주는 함수
// 해결 2! 해당하는 object를 지우고 다시 리스트 생성 -> .filter
// true면 남겨두고 flase면 지우기

// function sexyFilter() {
//   return false;
// }
// const list = [1, 2, 3, 4, 5];
// list.filter(sexyFilter);
// console.log(list.filter(sexyFilter)); //------> []

// function sexyFilter(item) {
//   return item !== 3;
// }
// const list = [1, 2, 3, 4, 5];
// list.filter(sexyFilter);
// console.log(list.filter(sexyFilter));  //-----> [1,2,4,5]

// const arr = [1, 2, 3, 4];
// const newArr = arr.filter((item) => item > 2);
// console.log(arr);
// console.log(newArr);
