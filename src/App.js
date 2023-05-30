import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  let users = document.getElementById("users");

  const userList = []
  
  function createUser(event) {
    const payload = {
      email: "user",
      phoneNumber: "99999",
      name: "name user"
    }

    axios.post('http://localhost:3333/api/user/create', payload).then(response => {
      console.log('console', response.data);
    });
  }

  
  function updateUser(clickedIndex) {
    console.log('ping')
    // const userId = userList[clickedIndex].id
    // const payload = {
    //   email: "email Updated",
    //   phoneNumber: "88888",
    //   name: "name Updated"
    // }
    
    // axios.put(`http://localhost:3333/api/user/update/${userId}`, payload).then(response => {
      //   console.log('console', response.data);
      // });
    }
    
  const edit = document.getElementById('edit')
  if(edit){
    edit.addEventListener('click', updateUser, true);
  }


  function getUsers() {
    axios.get('http://localhost:3333/api/user').then(response => {
      if(response.data && users){
        users.innerHTML = "";
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
      }
    });
  }

  getUsers();

// var mytodo_list=["Do Exercise","Take Bath","Have Breakfast"];
  /*CREATE*/
  // function CreateTask()
  // {  
  //     var task=document.getElementById("add-task").value;
  //     mytodo_list.push(task);
  //     ReadAllTask();
  // }
  // // /*READ*/
  // function ReadAllTask()
  // {
  //     var data='';
  // for(var i=0;i<mytodo_list.length;i++)
  // {
  //     data+='<tr>';
  //     data+='<td>' + mytodo_list[i] + '</td>';
  //     data+='<td><button onclick=UpdateTask(' +i+ ')>Update</button></td>';
  //     data+='<td><button onclick=DeleteTask('+i+')>Delete</button></td>';
  //     data+='</tr>';
  // }
  // /*counter*/
  // document.getElementById("counter").innerHTML=mytodo_list.length +" Task";
  // document.getElementById("mytodo-tasks").innerHTML=data;
  // }
  // ReadAllTask();
  // // /*UPDATE*/
  // function UpdateTask(item) {
  //   document.getElementById("UpdateForm").style.display='block';
  //   document.getElementById("update-task").value=mytodo_list[item];
  //   document.getElementById("UpdateForm").onsubmit=function()
  //   {
  //       var task=document.getElementById("update-task").value;
  //       mytodo_list.splice(item,1,task.trim());

  //       ReadAllTask();
  //       CloseInput();
  //   }

  // }
  // // /*DELETE*/
  // function DeleteTask(item) {   
  //     mytodo_list.splice(item,1);
  //     ReadAllTask();
  // }

  // function CloseInput() {
  //     document.getElementById("UpdateForm").style.display='none';
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className="mytodo-container">
          <div className="mytodo-list">
            {/* action="javascript:void(0)" */}
          <form id="CreateUser">
              <input type="text" id="add-task" placeholder="New Task"/> 
              <input type="submit" value="Create" onClick={()=> createUser() }/>
            </form>
          <table>
            <thead>
              <tr>
                <th>Nomes</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody id="users">
            </tbody>
          </table>
          </div> 
        </div>
      </header>
    </div>
  );
}

export default App;
