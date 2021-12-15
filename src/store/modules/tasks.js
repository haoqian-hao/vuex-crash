import axios from 'axios'

const state = {
    tasks: [],
    tasksadded: 0
};

const getters={
    allTasks: (state) => state.tasks, 


    getTasklength: (state) => {
        return state.tasks.length;
    },

    getCompleted: (state) => {return state.tasks.filter(task => task.completed).length}, 
    getRemaining: (state) => {return state.tasks.filter(task => !task.completed).length}, 
    getProgress (getters) {
        return getters.getCompleted / getters.getTasklength * 100
    },

    checkUniqueTask:(state) => (title) => {
        const finded = (element) => element.title==title;
        return state.tasks.some(finded)       
    },
};


const actions = {
    fetchTasks({commit}) {
        let tasks = localStorage.getItem("tasks");
        if (tasks!== null) {
            console.log("tasks loaded by localstorage")
            tasks = JSON.parse(tasks);
            commit('setTasks', tasks)
        } else {
            axios.get(
                "http://localhost:5000/tasks"
            ).then(
                response=> {
                    commit('setTasks', response.data)                    
                }
            )
        } 
    },
    
    async updateTask({commit}, task) {
        const reposne = await axios.put(`http://localhost:5000/tasks/${task.id}`, task)
        commit('updateTask', reposne)
    },

    async addTask({commit}, title) {
        const id = this.state.tasks.length + 1;
        const task = {
            "id": id,
            "title": title,
            "completed": false
        }
        await axios.post(`http://localhost:5000/tasks`, task)

        commit('addTask', task)
    },
    
    async removeTask({commit}, task) {
        // console.log(task.id)
        commit('removeTaks', task.id)
        await axios.delete(`http://localhost:5000/tasks/${task.id}`);
    },
    
};

const mutations = {
    setTasks: (state, tasks) => state.tasks = tasks,
    addTask: (state, task) => {
        state.tasks.unshift(task)
        state.tasksadded.unshift(task)
    },
    updateTask: (state, reposne)=>{console.log(state, reposne)},
    removeTaks: (state, id) => {
        state.tasks = state.tasks.filter((ele) => ele.id  !== id)
    }
};  

export default {
    namespaced:true, 
    state,
    getters,
    actions,
    mutations
};