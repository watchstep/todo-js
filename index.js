/**
 * 1. 새로운 할 일을 입력하는 추가 기능이 있어야 한다.
2. 할 일 완료 시 취소선이 생기고 완료 처리 버튼이 미완료 처리 버튼으로 변경되어야 한다.
3. 자기 입맛대로 디자인을 (최소한 오늘의 디자인보다는 예쁘게 ㅎㅎ) 수정해야한다.
4. 이미 작성한 할 일을 수정할 수 있어야 한다.
5. (Optional) 카테고리 별로 할 일을 묶을 수 있다.
 */

var todoInput = document.getElementById('todoInput');
var addBtn = document.getElementById('addBtn');
var todoList = document.getElementById('todoList');
var clear = document.getElementById('clear');

addBtn.addEventListener('click', addTodo);
clear.addEventListener('click', clearTodo);

function addTodo(){
  const newTodo = todoInput.value.trim();

  if (!newTodo){
    alert('할 일을 적어주세요');
  } else {
    var item = document.createElement('div')
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('change', (event)=>{
      if(checkbox.checked){
        text.style.textDecorationLine = 'line-through'
      }else{
        text.style.textDecorationLine = 'none'
      }
    });
    
    var text = document.createElement('span')
    text.textContent = newTodo;

    var removeBtn =  document.createElement('button');
    removeBtn.textContent = '−'
    removeBtn.addEventListener('click', removeTodo);
   
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(removeBtn);

    todoList.appendChild(item);
    todoInput.value = '';
  }
}

function checkTodo(){

}

function editTodo(event){
}

function removeTodo(event){
  event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
}

function clearTodo(){
  var ul = document.getElementById('todoList');
  ul.innerHTML = '';
}