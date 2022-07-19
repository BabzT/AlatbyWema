<template>
    <header class="header">
    <nav class="nav">
      <div class="logodiv">
        <img class="logo w-9" src="@/assets/alatlogo.png" alt="">
        </div>  
        <ul v-show="!mobile" class="navigation">
            <li class="li"><router-link class="link" :to="{name:'DashBoard'}">Home</router-link></li>
            <li class="li"><router-link class="link" :to="{name:'Transfer'}">Add</router-link></li>
            <li class="li"><router-link class="link" :to="{name:'About'}">About</router-link></li>
            <li class="logout uppercase font-medium cursor-pointer ml-4 p-4" @click="logout">Logout</li>
        </ul>
        
        <div class="icon" v-if="!mobileNav" v-show="mobile" @click="toggleMobileNav">
            <span class="material-icons menu">menu</span>
        </div>
        <div class="icon" v-if="mobileNav" v-show="mobile" @click="toggleMobileNav">
            <span class="material-icons menu">close</span>
        </div>
        <transition name="mobile-nav">
        <div v-show="mobileNav" class="dropdown-nav">
            <div class="flex items-center justify-between mx-3 my-3">
                <div>
                    <p class="text-2xl font-bold">Welcome, <span class="text-base capitalize">{{name}}</span></p> 
                    <p class=" text-sm">What would you like to do today?</p>
                </div>
                <div class="profilepic">

                </div>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">house</span>
                <router-link class="dp-link" :to="{name:'DashBoard'}">Dashboard</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">swap_horizontal_circle</span>
                <router-link class="dp-link" :to="{name:'Transfer'}">Send Money</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">account_balance</span>
                <router-link class="dp-link" :to="{name:'About'}">My Accounts</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">assignment</span>
                <router-link class="dp-link" :to="{name:'About'}">Buy Airtime & Data</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">assignment</span>
                <router-link class="dp-link" :to="{name:'About'}">Pay Bills</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">movie</span>
                <router-link class="dp-link" :to="{name:'About'}">Lifestyle</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">savings</span>
                <router-link class="dp-link" :to="{name:'About'}">Savings</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">inventory_2</span>
                <router-link class="dp-link" :to="{name:'About'}">Get A Loan</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">subtitles</span>
                <router-link class="dp-link" :to="{name:'About'}">Cards</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">admin_panel_settings</span>
                <router-link class="dp-link" :to="{name:'About'}">Buy Insurance</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">flag_circle</span>
                <router-link class="dp-link" :to="{name:'About'}">Western Union</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons">add_card</span>
                <router-link class="dp-link" :to="{name:'About'}">eNaira Wallet</router-link>
            </div>
            <div class="dropdown-link">
                <span class="material-icons rotate-180">logout</span>
                <a class="dp-link" @click="logout">Logout</a>
            </div>
            <div class="text-sm ml-3 mr-8">
                <p>Talk to us</p>
                <p>We are happy to assist</p>
                <div class="flex justify-between">
                    <span>help@alat.ng</span>
                    <span>0810 0000 3333</span>
                </div>
            </div>
        </div>
        </transition>
    </nav>
    </header>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            mobile:null,
            mobileNav:null,
            windowWidth:null,
            name:'',
        }
    },
    created(){
        window.addEventListener('resize',this.checkScreen);
        this.checkScreen();
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        window.addEventListener('scroll',this.updateScroll);
    },
    methods:{
        logout(){
            this.$router.push({name:'Login'})
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>

<style>
</style>