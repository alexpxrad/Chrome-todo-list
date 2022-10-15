



const items = [{"item": "Record next video", "status": 0},
{"item": "Record next video", "status": 1}]

const itemsStr = JSON.stringify(items)

console.log(itemsStr);
console.log(itemsStr);

function fetchItems() {


    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    let newItemHTML = '';
    try {
    let items = localStorage.getItem("todo-items")
    let itemsArr = JSON.parse(items);

    for (var i = 0; i < items.length; i++) {
        let status = ''
        if(itemsArr[i].status == 1) {
            status = 'class="done"'

        }
       newItemHTML += `<li data-itemindex="${i}" ${status}>
       <span class="item">${itemsArr[i].item} </span> 
       <div> <span>✅</span><span>🗑</span></div>
       </li>`;
       
    }

    itemsList.innerHTML = newItemHTML
}catch(e) {


}

}
function saveItems(obj) {

    let string = JSON.stringify(obj);

    localStorage.setItem('todo-items', string)


}

fetchItems()