<template>
    <div>
        <AddTask/>
        <Tasks/>
    </div>
</template>


<script>
import Tasks from "../components/Tasks" 
import AddTask from "../components/AddTask"

export default ({
  components: {
    Tasks,
    AddTask,
  }
})
</script>

