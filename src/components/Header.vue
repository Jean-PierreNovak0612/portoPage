<template>
    <header>
        {{ language() }}
        <div class="logo">
            <router-link @click="hideNav" to="/"><h1>MyPortoPage</h1></router-link>
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
                <li>
                    <input type="checkbox" id="switch-language" />
                    <label for="switch-language">{{lang}} <span>+</span></label>
                    <p>{{lang}}</p>
                    <ul>
                        <li @click="changeLang('eng')"><img src="../images/englishFlag.png"> English</li>
                        <li @click="changeLang('deu')"><img src="../images/germanFlag.png"> Deutsch</li>
                        <li @click="changeLang('hrv')"><img src="../images/croatianFlag.png"> Hrvatski</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { LINKS_ENG } from '../data/engdata.js'
import { LINKS_DEU } from '../data/deudata.js'
import { LINKS_HR } from '../data/hrvdata.js'

export default {
    name: 'Header',
    data() {
        return { 
            links: [],
            showNav: false,
            lang: ''
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
        changeLang(lang){
            this.showNav = false;
            localStorage.setItem("language",lang)
            this.language();
        },
        language() {
            if(localStorage.getItem("language") === null || localStorage.getItem("language") === 'eng') {
                this.links = LINKS_ENG;
                this.lang = 'Language'
            }
            else if( localStorage.getItem("language") === 'deu'){
                this.links = LINKS_DEU;
                this.lang = "Sprache"
            }
            else {
                this.links = LINKS_HR;
                this.lang = "Jezik"
            }
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

    img {
        width: 20px;
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
        transform: scale(1, 0);
        transition: transform 400ms ease-in-out;
        transform-origin: top;
    }

    input[type="checkbox"]:checked ~ nav {
        transform: scale(1,1)
    }
    
    ul {
        list-style: none;
        padding:2px 10px;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
    }

    input[type="checkbox"]:checked ~ nav > ul {
        opacity: 1;
        transition: opacity 200ms ease-in-out 100;
    }

    li {
        padding: 10px;
        font-weight:bolder;
        font-size: 1.3rem;
        cursor: pointer
    }

    a, li{
        text-decoration: none;
        color: #fff;
        font-family: Tourney, monospace;
        letter-spacing: .2rem;
    }

    .link-lg, p{
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

    @media(min-width: 1100px) {

        header{
            text-align: start;
        }

        h1 {
            max-width: 60ch;
            padding: 0 30px;
        }

        label{
            display: none;
        }

        nav{
            display: block;
            top: 0;
            width: 70%;
            right: 0;
            transform: scale(1,1)
        }

        nav ul {
            width: 100%;
            opacity: 1;
        }

        li,
        .link-lg,
        p {
            display: inline;
            padding: 30px 10px 0;
            position: relative;
            font-family: Tourney, monospace;
        }

        li::before {
            content: '';
            display: block;
            height: 5px;
            background-color: #fff;
            position: absolute;
            bottom: -.3em;
            left: 0;
            right: 0;
            transform: scale(0,1);
            transition: transform ease-in-out 250ms
        }

        li:hover::before {
            transform: scale(1,1);
        }

        li > ul {
            display: block;
            opacity: 0;
            border-top: 3px solid #fff;
            visibility: hidden;
            padding-bottom: 10px;
            position: absolute;
            background-color: rgb(75, 97, 97);
            width: 300px;
            z-index: 1;
            left: 5%;
            top: 150%;
            transition: top .3s ease-in-out, opacity 600ms ease-in-out;
        }

        li > ul li {
            display: block;
            width: 100%;
        }

        li:hover > ul {
            top: 100%;
            opacity: 1;
            visibility: visible;
        }
    }
</style>