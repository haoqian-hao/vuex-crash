<template>
    <v-row class="mt-3">
      <v-text-field
      v-model="title"
      label="What are you working on?"
      solo
      @keydown.enter="onSubmit"
      >
      </v-text-field>
      <v-btn
        v-if="title"
        @click="onSubmit"
        margin="centre"
      >
        Add Task
      </v-btn>
    </v-row>
</template>

<!--  <template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Task...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template> -->



<script>

import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddTask",
  data() {
      return {
        title: '', 

      };
  },
  computed: {
    ...mapGetters('tasks', ['checkUniqueTask']),
  },

  methods: {
    ...mapActions('tasks', ['addTask']),
    onSubmit(e) {
  
    e.preventDefault();

    if (this.title === '') {
        alert("please type task's title")
    } else if (this.checkUniqueTask(this.title)) {
        alert("duplicated task existing")
    } else {
        this.addTask(this.title);
        this.title = '';
    }
  }
}, 
  
};
</script>


<style >

</style>
