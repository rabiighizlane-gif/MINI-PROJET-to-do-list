<script setup>
import TodoCreateButton from './components/TodoCreateButton.vue';
import TodoEditButton from './components/TodoEditButton.vue';
import TodoDeleteButton from './components/TodoDeleteButton.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
const tasks = ref([]);
const newTaskTitle = ref('');
const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/tasks');
    tasks.value = response.data;
  } catch (err) {
    console.error("Erreur f l-backend:", err);
  }
};
onMounted(fetchTasks);
const handleAdded = (newObject) => {
  tasks.value.push(newObject); 
  newTaskTitle.value = '';     
};

const handleDeleted = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id);
};
const selectedDate = ref(new Date().toISOString().split('T')[0]); 
const handleUpdated = (updatedObject) => {
  const index = tasks.value.findIndex(t => t.id === updatedObject.id);
  tasks.value[index] = updatedObject; 
};
const toggleStatus = async (task) => {
  const newStatus = task.status === 'done' ? 'en cours' : 'done';
  try {
    await axios.put(`http://localhost:3000/tasks/${task.id}`, {
      title: task.title,
      status: newStatus
    });
    task.status = newStatus; // Update f l-interface
  } catch (err) {
    console.error("Erreur status:", err);
  }
};
</script>
<template>
  <nav>
    <div class="navbar">
    <form @submit.prevent>
      <label for="week">Today is :</label>
      <input type="date" v-model="selectedDate" id="week"><br>
      <button id="save">enregistrer</button>
      <br>
      <p>organiser votre travaille ici</p>
    </form>
    </div>
  </nav>
  <img src="./assets/logo.png" alt="Logo" class="my-logo">
  <div class="container">
  <h1>To-do-list</h1>
  </div>
  <form class="ajouter">
  <label for="titre">Titre</label>
  <br>
  <input type="text" v-model="newTaskTitle" id="titre" placeholder="nouvelle tàche">
         <br>
      <TodoCreateButton :taskTitle="newTaskTitle" :taskDate="selectedDate" @task-added="handleAdded"/>
      </form>
<br>
<Ol>
  <li v-for="t in tasks" :key="t.id">
    <small v-if="t.task_date">
    <small>(Ajoutée le: {{ new Date(t.task_date).toLocaleDateString() }})</small>
            </small>
           <small v-else>
            (Pas de date définie)
                </small>
    {{ t.title }} <input type="checkbox" 
       :checked="t.status === 'done'" 
       @change="toggleStatus(t)">
    
    <br>
    
    <TodoEditButton :task="t" @task-updated="handleUpdated" />
    <TodoDeleteButton :taskId="t.id" @task-deleted="handleDeleted" />
  </li>
 </Ol>
</template>
<style>
.navbar{
  background-color:rgb(249, 249, 249);
  border:1px solid ;
  padding:5px;
  margin:5px;
  position: absolute; 
  top: 10%;
  right: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px; 
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
#save{
  width:50%;
  border:2px solid;
  padding: 0 ;
}
#save:hover{
  background-color:#0598ee ;
}
.container {
  grid-column: 1 / span 2; 
  text-align: center;
  font-family: sans-serif;
  color: #333;
  padding: 30px;
  max-width: 400px;
  margin: 0 auto; 
  border: 5px solid  #ffffff;
  border-radius: 100px;

}

button {
 text-align:centre;
  width: 20%;
  padding: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
body{
  display:flex;
  justify-content:center;
  padding:0;
  margin:0;
  background-color: #ffbdd0;
  min-height: 400vh;
}
  .ajouter{
    text-align:centre;
  }
  .my-logo{
border:2px solid #ffffff;
 border-radius: 100%;
 position:fixed;
 top:0%;
 left:0%;
  }
 </style>