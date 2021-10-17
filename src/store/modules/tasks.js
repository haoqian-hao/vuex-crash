import axios from 'axios'

const state = {
    tasks: []
};

const getters={
    allTasks: (state) => state.tasks, 


    getTasklength: (state) => {
        console.log(state.tasks) 
        // return state.tasks.length;
        return state.tasks.length;
    },

    getCompleted: (state) => {return state.tasks.filter(task => task.completed).length}, 
    getRemaining: (state) => {return state.tasks.filter(task => !task.completed).length}, 
    getProgress (getters) {
        // console.log(getters.getCompleted / getters.getTasklength * 100)
        return getters.getCompleted / getters.getTasklength * 100
       
      },

    checkUniqueTask:(state) => (title) => {
        const finded = (element) => element.title==title;
        return state.tasks.some(finded)       
    },
};


const actions = {
    async fetchTasks({commit}) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(response.data)
        commit('setTasks', response.data )
    },

    async addTask({commit}, title) {
        commit('addTask', {title: title})
    },
    
    async removeTask({commit}, title) {
        commit('removeTaks', title)
    }
};

const mutations = {
    setTasks: (state, tasks) => state.tasks = tasks,
    addTask: (state, task) => state.tasks.unshift(task),
    removeTaks: (state, id) =>state.tasks = state.tasks.filter((ele) => ele.title !== id),
};  


export default {
    state,
    getters,
    actions,
    mutations
};