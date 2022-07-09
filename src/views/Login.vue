<template>
  <div class="loginpage">
        <transition name="errorMsg" mode="out-in">
        <p v-if="showError" class="errorMsg">Please provide a Email or Password!</p>
      </transition>

      <div class="w-10/12">
        <h1 class="signUp-text">Welcome Back!</h1>
        <div class="borderb"></div>

      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Enter Email" class="input mb-7" required>
        <p class="ml-auto text-rose-600 text-sm w-fit"><a href="#">Forgot Password?</a></p>
        <div class="passworddiv">
            <input :type="showPassword ? 'password' : 'text'" v-model="password" placeholder="Enter Password" class="input" required>
            <div class="material-icons eye" v-if="showPassword" @click="togglePassword">visibility_off</div>
            <div class="material-icons eye" v-else @click="togglePassword">visibility</div>
        </div>
        <button type="submit" class="signup">Login</button>
    </form>

        <p class="loginlink">
          <router-link :to ="{name:'SignUp'}">Sign Up</router-link>
        </p>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:'',
            showError:false,
            showPassword: true
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            if(result.status == 200 && result.data.length>0){
                localStorage.setItem('user-info',JSON.stringify(result.data[0]))
                this.$router.push({name: 'DashBoard'})
            }
            else{
                this.showError = true;
                setTimeout(() => this.showError = false, 5000)
            }
            console.log(result)
        },
        togglePassword(){
            this.showPassword = !this.showPassword;
        }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name:'DashBoard'})
      }
    }
}
</script>

<style>

</style>