<template>
  <div class="loginpage">
    <transition name="errorMsg" mode="out-in">
        <p v-if="showError" class="errorMsg">Username or Email Already Exist!</p>
      </transition>

    <div class="w-10/12">
      <h1 class="signUp-text">Sign Up Here!</h1>
      <div class="borderb"></div>

    <form @submit.prevent="signUp">
        <input type="text" v-model="name" placeholder="Enter Name" class="input mb-7" required>
        <input type="email" v-model="email" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="input mb-7" required>
        
        <p class="ml-auto text-rose-600 text-sm w-fit"><a href="#">Forgot Password?</a></p>
        <div class="passworddiv">
            <input :type="showPassword ? 'password' : 'text'" v-model="password" placeholder="Enter Password" 
            minlength="6"  class="input" required>
            <div class="material-icons eye" v-if="showPassword" @click="togglePassword">visibility_off</div>
            <div class="material-icons eye" v-else @click="togglePassword">visibility</div>
        </div>
        <button type="submit" class="signup">Sign Up</button>
    </form>

    <p class="loginlink">
      <router-link :to ="{name:'Login'}">Login</router-link>
    </p>
    
    <div class="help-center">
      <span>help@alat.ng</span>
      <span>0810 0000 3333</span>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data(){
      return{
        name:'',
        email:'',
        password:'',
        showError:false,
        showPassword: true,
      }
    },
    methods:{
      signUp(){
        let user = localStorage.getItem('user-info');
        let email= JSON.parse(user).email;
        let name = JSON.parse(user).name;

        if(email === this.email || name === this.name){
            this.showError = true;
            setTimeout(() => this.showError = false, 5000)
        }
        else{
          let result = {
          email:this.email,
          password:this.password,
          name:this.name
        }
        localStorage.setItem("user-info",JSON.stringify(result));
        this.$router.push({name:'DashBoard'})
        }
      },
      togglePassword(){
            this.showPassword = !this.showPassword;
      },
    },
    
}
</script>

<style>

</style>