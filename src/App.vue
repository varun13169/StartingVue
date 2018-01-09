<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-first-component></my-first-component>
    <variable-text></variable-text>
    <conditional-component></conditional-component>
    <router-view/>
  </div>



</template>

<script>
  import MyFirstComponent from './components/myfirstcomponent';
  import VariableText from './components/variabletext';
  import ConditionalComponent from './components/conditionalcomponent';

  export default {
    components: {
      ConditionalComponent,
      VariableText,
      MyFirstComponent},
    name: 'app',
    component: {
      MyFirstComponent,
      VariableText,
      ConditionalComponent
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
