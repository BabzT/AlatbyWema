<template>
    <Header/>
    <main class="main">
        <h1 class="title">Send Money</h1>
        <div class="subheader">
            <router-link :to="{name:'Transfer'}" class="subheader-link">Bank Transfer</router-link>
            <a href="#" class="subheader-link">FX Transfer</a>
            <a href="#" class="subheader-link">Fund My Account</a>
        </div>

        <div class="container1">
            <p class="divhead">New Transfer</p>
            <hr>
            <div class="btdiv">
                <div>
                    <label class="label">Select Bank</label>
                    <input type="text" placeholder="Please select an option" class="input mb-7">
                </div>
                <div>
                    <label class="label">Account Number</label>
                    <input type="text" class="input mb-7">
                </div>
                <button class="getDetails" disabled="disabled" type="submit">Get Details</button>
            </div>
        </div>
        <div class="bg-white p-3 rounded-full">
            <input class="search" type="text" placeholder="Search for Beneficiaries">
        </div>
    </main>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name:'Transfer',
    components:{
        Header,
    },
}
</script>

<style>

</style>