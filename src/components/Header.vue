<template>
    <header>
        <div class="logo">
            <h1>MyPortoPage</h1>
        </div>
        <input type="checkbox" id="toggle-navigation" v-model="showNav">
        <label @click="toggleNav">
            <div></div>
            <div></div>
            <div></div>
        </label>
        <nav>
            <ul>
                <li v-for="link in links" :key="link.name">
                    <input v-if="link.sublinks" type="checkbox" :id='"sublink-toggle-" + link.name'/>
                    <label v-if="link.sublinks" :for='"sublink-toggle-" + link.name'>{{link.name}} <span>+</span></label>
                    <router-link v-if="link.sublinks" class="link-lg" :to="link.link">{{link.name}}</router-link>
                    <router-link v-else @click="hideNav" :to="link.link">{{link.name}}</router-link>
                    <ul v-if="link.sublinks">
                        <li v-for="sublink in link.sublinks" :key="sublink.name">
                            <router-link @click="hideNav" :to="sublink.link">{{ sublink.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { LINKS } from '../data'

export default {
    name: 'Header',
    data() {
        return { 
            links: LINKS,
            showNav: false,
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav;
        },
        hideNav() {
            this.showNav = false;
            console.log(this.showNav)
        },
        test() {
            console.log('clicked')
        }
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Tourney:wght@900&display=swap');

    header { 
        position: fixed;
        top: 0;
        background-color: rgb(75, 97, 97);
        width: 100%;
        height: 80px;
        margin: 0;
        text-align: center
    }

    #toggle-navigation + label {
        position: absolute;
        left: 10px;
        width: 35px;
        top: 30%
    }

    #toggle-navigation + label div {
        position: relative;
        top: 0;
        height: 5px;
        background-color: #fff;
        margin-bottom: 10px;
        transition: .3s ease transform, .3s ease top, .3s ease width, .3s ease right;
        border-radius: 2px;
    }

    #toggle-navigation + label div:first-child{
        transform-origin: 0;
    }

    #toggle-navigation + label div:last-child{
        margin-bottom: 0;
        transform-origin: 60px;
    }

    #toggle-navigation + label div:nth-child(2){
        right: 0;
        width: 35px
    }

    #toggle-navigation:checked + label div:first-child{
        top: -10px;
        width: 30px;
        transform: rotateZ(45deg);
    }

    #toggle-navigation:checked + label div:last-child{
        top: 20px;
        width: 17px;
        transform: rotateZ(45deg)
    }

    #toggle-navigation:checked + label div:nth-child(2){
        width: 40px;
        top: -10px;
        right: 7px;
        transform: rotateZ(-45deg);
    }

    nav{ 
        position: absolute;
        width: 100%;
        top: 100%;
        background-color: rgb(75, 97, 97);
        color: white;
        text-align: start;
        display: none;
    }

    input[type="checkbox"]:checked ~ nav {
        display: block;
    }

    ul {
        list-style: none;
        padding:2px 10px;
    }

    li {
        padding: 10px;
        font-weight:bolder;
        font-size: 1.3rem
    }

    a{
        text-decoration: none;
        color: #fff;
        font-family: Tourney, monospace;
        letter-spacing: .2rem;
    }

    .link-lg{
        display: none;
    }

    input {
        display: none;
    }

    input ~ ul {
        display: none;
    }

    input[type="checkbox"]:checked ~ ul {
        display: block;
        opacity: 1;
    }

    input[type="checkbox"]:checked + label span { 
        transform: rotateZ(675deg) scale(1.7);
    }

    label{
        font-family: Tourney, monospace;
        letter-spacing: .2rem;
        user-select: none;
    }

    span {
        font-size: 1.4rem;
        display: inline-block;
        transform: scale(1.8) rotateZ(0);
        transition: all .1s
    }

    h1 {
        color: #fff;
        font-weight: bolder;
        font-family: Tourney, monospace;
        letter-spacing: .2rem;
        user-select: none;
    }

</style>