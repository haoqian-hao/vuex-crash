<template>
  <v-container>
    <v-row>
      <template v-for="n in 2">
        <v-col :key="n">
          <v-card
            class="pa-2"
            outlined
            tile
            height="100px"
          >
            Column
          </v-card>
        </v-col>
        <!-- <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive> -->
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "Reuse",

}
</script>

<style>

</style>