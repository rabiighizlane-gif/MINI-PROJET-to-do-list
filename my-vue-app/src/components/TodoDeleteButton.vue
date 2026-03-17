<script setup>
import axios from 'axios';

const props = defineProps(['taskId']); 
const emit = defineEmits(['task-deleted']);

const deleteMe = async () => {
  try {
    await axios.delete(`http://localhost:3000/tasks/${props.taskId}`);
    emit('task-deleted', props.taskId);
  } catch (err) {
    console.error("Erreur delete:", err);
  }
};
</script>
<template>
  <button @click="deleteMe" class="btn-delete">Supprimer🗑️</button>
</template>

<style scoped>
.btn-delete {
  background-color: #0598ee;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>