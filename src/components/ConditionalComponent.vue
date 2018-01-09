<template>
  <div>
    <h1 v-if="showTest">{{test}}</h1>
  </div>
</template>

<script>
    export default {
      name: "conditional-component",
      data(){
          return {
            test: 'Conditional',
            showTest: false
          }
        }
    }
</script>

<style scoped>

</style>
