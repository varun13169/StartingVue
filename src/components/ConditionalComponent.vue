<template>
  <div>
    <h1>Binding Example</h1>
    <input type="text" v-model="bind"/>
    <p>{{bind}}</p>

    <hr>
    <h1 v-if="showTest">{{test}}{{showTest}}</h1>
    <h1 v-else="showTest">{{test}}{{showTest}}</h1>

    <hr>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>

    <hr>
    <button v-on:click="greet(bind)">Press to generate Alert and try Binding Example</button>

    <hr>
    <h1>Info here will be displayed in console, simultaneously(KeyUp mappinmg)</h1>
    <input type="text" v-on:keyup="keyupPress" v-on:keyup.enter="hitEnter"/>

    <hr>
    <h1>This will display property</h1>{{property}}



  </div>
</template>

<script>
    export default {
      name: "conditional-component",
      props: {
        property:{
          type: String,
          default: 'Foobar'
        }
      },

      data(){
          return {
            test: 'Condition is set to: ',
            showTest: false,
            items: [
              {title: "Item 1"},
              {title: "Item 2"},
              {title: "Item 3"}
            ],
            bind: ""
          }
        },
      methods:{
        greet: function(bind){
          alert('Hi\n Your Binding data is "'+bind+'"');
        },
        keyupPress: function(e){
          console.log(e.target.value);
        },
        hitEnter: function () {
          console.log("You hit ENTER !!");
        }
      }
    }
</script>

<style scoped>

</style>
