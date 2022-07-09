<template>
    <Header/>
    <main class="main">
        <h1 class="text-2xl font-bold">
            Welcome back, <span class="text-rose-600 capitalize">{{name}}</span>
        </h1>
        <div>
        <div class="container1">
            <p class="mx-5 mb-4">My Accounts</p>
            <hr>

            <div class="rounded-lg text-white w-3/4 mt-5 mx-5 py-4 bg-rose-900">
            <p class="text-xs mb-3 mx-4">
                TIER 3 SAVINGS ACCOUNT <span class="text-sm mx-4">History</span>
            </p>
            <hr>

            <div class="m-3 flex items-center justify-between">
                <p class="rounded-lg text-xs bg-rose-500 p-2 w-fit">
                    Acct No: 025****994
                </p>
                <div class="flex items-center">
                    <div class="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                    <p>Active</p>
                </div>
            </div>
            
            <div class="flex items-center my-4 w-fit mx-3 font-extrabold text-lg">
                <span> &#8358;</span>
                <span class="mx-2" v-if="showBalance">140 000</span>
                <span class="mx-2" v-if="!showBalance">*********</span>
                <div v-if="!showBalance" @click="toggleBalance"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg></div>
                <div v-if="showBalance" @click="toggleBalance"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg></div>
            </div>

                <p class="bg-white text-rose-600 w-fit p-3 m-3 rounded-lg font-semibold">Fund Account</p>
            </div>
        </div>

        <div class="container">
            <img src="@/assets/save.png" alt="">
            <p class="container-title">Start saving, earn up to <span class="text-rose-600">8.75%</span> interest</p>
            <p class="container-text">Create goals to meet your target and earn interest while doing so.</p>
            <a class="container-link" href="#">Discover More</a>
        </div>

        <div class="container">
            <img src="@/assets/createacct.png" alt="">
            <p class="container-title">Create a Domiciliary Account Today</p>
            <p class="container-text">Open ALAT FX account to send and receive foreign currency with ease</p>
            <a class="container-link" href="#">Create Account</a>
        </div>
        </div>
    </main>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name:'DashBoard',
    components:{
        Header
    },
    data(){
        return{
            name:'',
            showBalance:false
        }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name
      if(!user){
        this.$router.push({name:'SignUp'})
      }
    },
    methods:{
        toggleBalance(){
            this.showBalance = !this.showBalance
        }
    }
}
</script>

<style>

</style>