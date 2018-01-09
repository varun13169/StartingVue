<template>
    <div class="users">
      <h1>Users</h1>

      <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Enter Name"/>
        <br>
        <input type="text" v-model="newUser.email" placeholder="Enter email"/>
        <br><br>
        <input type="submit" value="submit"/>
      </form>

      <ul>
        <li v-for="user in userList">
          <input type="checkbox" class="toggle" v-model="user.contacted"/>
          <span :class="{contacted: user.contacted}">
            {{user.name}} : {{user.email}}   <button v-on:click="deleteUser(user)">Delete User</button>
          </span>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
      name: "Users",
      data(){
        return{
          newUser: {},
          userList: []
        }
      },
      methods:{
        addUser: function (e) {
          this.userList.push({
            name: this.newUser.name,
            email: this.newUser.email,
            contacted: false
          });
          e.preventDefault();
        },
        deleteUser: function (user) {
          this.userList.splice(this.userList.indexOf(user), 1)
        }
      },
      created: function () {
        console.log('created ran.......');
        this.$http.get('https://jsonplaceholder.typicode.com/users')
          .then(function (res) {
            // console.log(res.data);
            this.userList = res.data;
          });
      }
    }
</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }
</style>
