<template>
    <header>
        <div class="logo">
            <h1>MyPortoPage</h1>
        </div>
        <nav>
            <ul>
                <li v-for="link in links" :key="link.name">
                    <router-link :to="link.link">{{link.name}}</router-link>
                    <ul v-if="link.sublinks">
                        <li v-for="sublink in link.sublinks" :key="sublink.name">
                            <router-link :to="sublink.link">{{ sublink.name}}</router-link>
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
        }
    }
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
    nav{ 
        position: absolute;
        width: 100%;
        top: 100%;
        background-color: rgb(75, 97, 97);
        color: white;
        text-align: start;
    }
    ul {
        list-style: none;
        padding:2px 10px;
    }
    li {
        padding: 5px;
        font-weight:bolder;
        font-size: 1.3rem
    }
    h1 {
        color: #fff;
        font-weight: bolder;
        font-family: Tourney, monospace;
    }
</style>