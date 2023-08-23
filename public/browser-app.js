const items = document.getElementById('items')
const btnEle = document.getElementById('btnId')
const titleIn = document.getElementById('titleInput')
const numberIn = document.getElementById('numberInput')
const emailIn = document.getElementById('emailInput')
btnEle.addEventListener('submit',onSubmit)
items.addEventListener('click',onDelete)
const showAll = async() =>{
    while(items.firstChild){
        items.removeChild(items.firstChild)
    }
    try {
        const response = await axios.get('/api/v1/task')
        const user = response.data.users
        for (i=0;i<user.length;i++){
            showOutput(user[i])
        }
    } catch (error) {
        console.log(error)
    }
}

async function onSubmit(e){
    e.preventDefault()
    const data = {name:titleIn.value,number:numberIn.value,email:emailIn.value}
    try {
        await axios.post('/api/v1/task/add',data)
        showAll()
    } catch (error) {
        console.log(error)
    }
    titleIn.value=''
    numberIn.value=''
    emailIn.value=''
}

function showOutput(user){
    const item = document.getElementById('items')
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${user.name} - ${user.number} - ${user.email} `))
    const delBtn = document.createElement('button')
    delBtn.textContent = 'delete'
    delBtn.classList.add('delete')
    delBtn.dataset.id = user.id
    const editBtn = document.createElement('button')
    editBtn.textContent = 'edit'
    editBtn.classList.add('edit')
    editBtn.dataset.id = user.id
    li.appendChild(editBtn)
    li.appendChild(delBtn)
    item.appendChild(li)
}
document.addEventListener('DOMContentLoaded',showAll)

async function onDelete (e){
    if(e.target.classList.contains('delete')){
        try {
            const id = e.target.dataset.id
            await axios.delete(`/api/v1/task/${id}`)
            showAll()
        } catch (error) {
            console.log(error)
        }
    }
    if(e.target.classList.contains('edit')){
        try {
            const id = e.target.dataset.id
            const editUser = await axios.get(`api/v1/task/${id}`)
            const userdetail = editUser.data.response
            titleIn.value = userdetail.name
            numberIn.value = userdetail.number
            emailIn.value = userdetail.email
            await axios.delete(`api/v1/task/${userdetail.id}`)
            showAll()
        } catch (error) {
            console.log(error)
        }
    }
}