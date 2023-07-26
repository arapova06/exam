const save = document.querySelector('.save')
const name = document.querySelector('.name')
const valid=document.querySelector('.valid')
const inputValid=document.querySelector('.input-valid')
const inputName=document.querySelector('.input-name')
const proceed =document.querySelector('.proceed')
const cardNum =document.querySelector('.card-num')

save.addEventListener('click',() => {
addList()
addListt()
// namee.innerText=inputName.value
// cardNum.innerText=+inputValid.value
})
function getResult() {
    let list=JSON.parse(localStorage.getItem('list'))||[];
    // console.log(test);
    let newList=''
    list.map(el=>{
       newList+=[el.name]
    })
    name.innerHTML = newList
}

function addList() {
    let list = JSON.parse(localStorage.getItem('list')) || [];
    let newList = {
        name:inputName.value
    }
    list = [...list,newList]
    localStorage.setItem('list', JSON.stringify(list))
    getResult()
}


localStorage.setItem('list', JSON.stringify([{name: 'fghjk', number: 556545}]))

function getResultt() {
    let listt=JSON.parse(localStorage.getItem('listt'))||[];
    // console.log(test);
    let newListt=''
    listt.map(el=>{
       newListt+=[el.cardNum]
    })
    cardNum.innerHTML = newListt
}

function addListt(){
    let listt =JSON.parse(localStorage.getItem('listt'))||[];
    let newListt={
        cardNum:inputValid.value
    }
    listt = [...listt,newListt]
    localStorage.setItem('listt', JSON.stringify(listt))
    getResultt()
}


localStorage.setItem('listt', JSON.stringify([{name: 'fghjk', number: 556545}]))