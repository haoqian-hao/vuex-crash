import axios from 'axios'


const state = {
    data : [] 
};

const getters={
    getData: (state) => state.data, 
    
    splitData: (state) => {
        const categoryData = [];
        const values = [];
        for (var i = 0; i < state.data.length; i++) {
            categoryData.push( state.data[i][0]);
            state.data[i][0] = i;
            values.push( state.data[i]);
        }
        return {
            categoryData: categoryData,
            values: values
        };
    },
};


const actions = {
    async fetchdata({commit}) {
        const response = await axios.get(
            "https://raw.githubusercontent.com/apache/echarts-website/asf-site/examples/data/asset/data/stock-DJI.json"
            // "https://jsonplaceholder.typicode.com/todos"
        )
        console.log(response.data)
        commit('setData', response.data)
    }
};

const mutations = {
    setData: (state, data) =>state.data = data
};


export default {
    namespaced:true, 
    state,
    getters,
    actions,
    mutations
};