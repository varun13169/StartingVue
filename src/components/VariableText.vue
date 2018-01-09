<template>
    <div class="varibletext">
      <h1>{{msg}}</h1>
      <hr>
      <p>Name: {{user.name}} <br>Company:{{user.company}} </p>
      <p v-text="user.vTextDirective"></p>
    </div>
</template>

<script>
    export default {
        name: "variable-text",
      data(){
          return{
            msg: 'Second Component: Varible Text',
            user:{
              name: 'varun',
              company: 'Think Future Tech.',
              vTextDirective: 'testing v-text directive'
            }
          }
      }
    }
</script>

<style scoped>

</style>
