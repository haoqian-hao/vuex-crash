<template>
    <div>
        <v-container>
            <v-row>
            <template v-for="n in 2">
                <v-col :key="n">
                <v-card
                    outlined
                    tile
                    class="lines"
                >
                    <EchartLine :lineData="data[n-1]"/>
                </v-card>
                </v-col>
            </template>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import EchartLine from '../components/EchartLine.vue'


export default {
    name: "Reuse",
    components : {
        EchartLine, 
    }, 
    data() {
        return {
            data : {}
        }
    },
    methods : {
        async fetchData() {
            const res = await fetch(`http://localhost:5000/lineDATA`)
            const data = await res.json()
            console.log(data)
            console.log(typeof(data))
            return data
        },
    }, 

    async created() {
        this.data= await this.fetchData()
    }

}
</script>

<style>

div.lines {
    width: 550px;
    height: 700px;
}

</style>