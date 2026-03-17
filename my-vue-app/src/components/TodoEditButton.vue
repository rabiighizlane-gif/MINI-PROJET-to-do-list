<script setup>
import axios from 'axios';

const props = defineProps(['task']); 
const emit = defineEmits(['task-updated']);

const editMe = async () => {
  
  const newTitle = prompt("Modifier la tâche :", props.task.title);
  
  if (newTitle && newTitle.trim() !== "") {
    try {
     
      await axios.put(`http://localhost:3000/tasks/${props.task.id}`, {
        title: newTitle,
        status: props.task.status 
      });
      
      
      emit('task-updated', { ...props.task, title: newTitle });
    } catch (err) {
      console.error("Erreur update:", err);
    }
  }
};
</script>

<template>
  <button @click="editMe" class="btn-edit">modifier📝</button>
</template>

<style scoped>
.btn-edit {
  background-color: #0598ee;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>