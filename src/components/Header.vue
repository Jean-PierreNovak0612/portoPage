<template>
    <header>
        <div class="logo">
            <h1>MyPortoPage</h1>
        </div>
        <nav>
            
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
        background-color: rgb(75, 97, 97);
        color: white;
    }
    h1 {
        color: #fff;
        font-weight: bolder;
        font-family: Tourney, monospace;
    }
</style>