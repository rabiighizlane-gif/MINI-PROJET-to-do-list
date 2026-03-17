<script setup>
import axios from 'axios';
const props = defineProps(['taskTitle', 'taskDate']);
const emit = defineEmits(['task-added']);

const addTask = async () => {
  if (props.taskTitle.trim() === '') return;
  
  try {
    const response = await axios.post('http://localhost:3000/tasks', {
      title: props.taskTitle,
      task_date: props.taskDate,
      completed: false
    });
    emit('task-added', response.data);
  } catch (err) {
    console.error("Erreur d'ajout:", err);
  }
};
</script>
<template>
  <button @click="addTask" class="btn-create">Ajouter➕</button>
</template>
<style scoped>
.btn-create {
  background-color: #0598ee;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>