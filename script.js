document.addEventListener('DOMContentLoaded',()=>{
    const list = document.querySelector("#my-order ul");
    const forms = document.forms;
    const addform =forms['Order']

    // Remove order
    list.addEventListener("click",(e)=>{
        if(e.target.className =="Remove"){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li)
        }
    })
    // Make Order
    addform.addEventListener("submit",(e)=>{
        e.preventDefault();

        //Create elements
        const value =addform.querySelector('input[type="text"]').value;
        const li =document.createElement('li');
        const OrderName =document.createElement('span');
        const RemoveBtn = document.createElement('span');

        // add text context
        OrderName.textContent = value;
        RemoveBtn.textContent = "Remove Order";

        // add classes
        OrderName.classList.add('name');
        RemoveBtn.classList.add('Remove');
        // append to DOM
        if (value ===""){
            alert("Please enter a valid Order")
        }
        li.appendChild(OrderName);
        li.appendChild(RemoveBtn);
        list.appendChild(li);
        // clear inputs
        addform.querySelector('input[type="text"]').value='';

    })

})