<template>

    <div>
    <h1 class="success--text">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${getTasklength}`">
          {{ this.getTasklength }}
        </span>
      </v-fade-transition>
    </h1>

    <v-divider class="mt-4"></v-divider>

    <v-row
      class="my-1"  
    >
        <v-flex class="mx-4 md2 success--text text--darken-2">
            Completed:{{getCompleted}}
        </v-flex>
        <v-divider vertical> </v-divider>
        <v-flex class="mx-4 md2">Remaining:{{getRemaining}}
        </v-flex>
    </v-row>

    <v-divider class="pt-10"></v-divider>

    <template v-for="(task, i) in allTasks">
      <v-divider
        v-if="i !== 0"
        :key="`${i}-divider`"
      ></v-divider>

      <v-list-item :key="`${i}-${task.title}`">
        <v-list-item-action>
          <v-checkbox
            v-model="task.completed"
            :color="task.completed && 'grey' || 'primary'"
            @click="handlechangecomplte(task)"
          >
            <template v-slot:label>
              <div
                :class="task.completed && 'grey--text' || 'primary--text'"
                class="ml-4"
                v-text="task.title"
              ></div>
            </template>
          </v-checkbox>
        </v-list-item-action>

        <v-spacer></v-spacer>

        <v-scroll-x-transition>
          <v-icon
            v-if="task.completed"
            @click="removeTask(task)"
          >
            fas fa-trash
          </v-icon>
        </v-scroll-x-transition>
      </v-list-item>
    </template>
      <!-- </v-slide-y-transition>
    </v-card> -->
    <!-- <div class="tasks">
        <div 
            v-for="task in allTasks" 
            :key="task.id" 
            class="task"
        >
            {{ task.title }}
            <i class="fas fa-trash-alt"></i>    

            <i @click="removeTask(task.title)" class="fas fa-trash-alt"></i>    
        </div>
    </div> -->
    
    
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex' 


export default {
    
    name: 'Tasks',
    methods: {
      ...mapActions('tasks', ['fetchTasks', 'updateTask', 'removeTask']),
      handlechangecomplte(task) {
        const upTask = {
          id: task.id,
          title: task.title, 
          completed: task.completed
        };
        console.log(task)
        console.log(upTask)
        this.updateTask(upTask)
      }
    },

    computed: {...mapGetters('tasks', ['allTasks', 'getTasklength', 'getCompleted', 'getRemaining', 'getProgress'])},
    created() {
      this.fetchTasks();
    },
    watch: {
      allTasks : { 
        handler : function (allTasks) {
        console.log("variable task changed store to local storage");
        const taskstolocal = JSON.stringify(allTasks);
        localStorage.setItem("tasks", taskstolocal);
        },
        deep: true
      }
    }
}
</script>

<style scoped>

.v-list-item {
    align-items: center;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
    overflow: hidden;
    padding: 12px 0;
}
.py-0 {
    padding-top: 0!important;
    padding-bottom: 0!important;
}


.my-1 {
    margin-top: 4px!important;
    margin-bottom: 4px!important;
}

.primary--text {
    color: #1867c0 !important;
    caret-color: #1867c0 !important;
}

.grey--text {
    color: #9e9e9e!important;
    caret-color: #9e9e9e!important;
}

</style>
