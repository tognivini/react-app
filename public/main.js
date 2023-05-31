/* eslint-disable no-undef */
let users = document.getElementById("users");
let userList = []

const create = document.getElementById('create')
if(create){
    create.addEventListener('click', createUser, true);
}

const edit = document.getElementById('edit')
if(edit){
    edit.addEventListener('click', updateUser, true);
}

const delUser = document.getElementById('delete')
if(delUser){
    delUser.addEventListener('click', deleteUser, true);
}
    
async function getUsers() {
    userList = []
    users.innerHTML = ''
    axios.get('http://localhost:3333/api/user').then(response => {
        if(response.data){
            userList.push(...response.data)
            response.data.map((user, index) => {
                return (users.innerHTML += `
                  <tr id=${index}>
                    <td class="fw-bold">${user.name}</td>
                    <td class="small text-secondary">${user.email}</td>
                    <td class="small text-secondary">${user.phoneNumber}</td>
                    <td class="options">
                      <button id="edit" onclick="updateUser(${index})">EDIT</button>
                    </td>
                    <td>
                      <button id="delUser" onclick="deleteUser(${index})" class="fas fa-trash-alt">REMOVE</button>
                    </td>
                  </tr>
                `);
            });
        }
    })
}

async function createUser(event) {
    event.preventDefault()
    const payload = {
      email: "user",
      phoneNumber: "99999",
      name: "name user"
    }
    await axios.post('http://localhost:3333/api/user/create', payload);
    getUsers()
}

async function updateUser(clickedIndex) {
    const userId = userList[clickedIndex].id
    const payload = {
        email: "email Updated",
        phoneNumber: "88888",
        name: "name Updated"
    }
    await axios.put(`http://localhost:3333/api/user/update/${userId}`, payload).then(response => {
       console.log('console', response.data);
    });
    getUsers()
}

async function deleteUser(clickedIndex) {
    const userId = userList[clickedIndex].id
    await axios.delete(`http://localhost:3333/api/user/delete/${userId}`);
    getUsers()
}
    
getUsers()
