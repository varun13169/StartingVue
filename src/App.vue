<template>
  <div id="app">
    <img src="./assets/logo.png">

    <hr>
    <my-first-component></my-first-component>

    <hr>
    <variable-text></variable-text>

    <hr>
    <conditional-component property="My prop"></conditional-component>

    <hr>
    <user-component></user-component>

    <hr>
    <router-view/>
  </div>



</template>

<script>
  import MyFirstComponent from './components/myfirstcomponent';
  import VariableText from './components/variabletext';
  import ConditionalComponent from './components/conditionalcomponent';
  import UserComponent from './components/Users';

  export default {
    name: 'app',
    components: {
      ConditionalComponent,
      VariableText,
      MyFirstComponent,
      UserComponent
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
