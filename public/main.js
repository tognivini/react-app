/* eslint-disable no-undef */
let users = document.getElementById("users");
const userList = []
    
async function getUsers() {
    console.log('ping')
    axios.get('http://localhost:3333/api/user').then(response => {
        console.log('pinnng', response)
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
                  <button onclick="deleteUser(${index})" class="fas fa-trash-alt">REMOVE</button>
                </td>
              </tr>
            `);
        });
    })
}
    
getUsers()
