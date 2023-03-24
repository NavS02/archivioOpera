<template>

    <main>
    <section class="layout">

            <Menu/>
            <Sidebar/>
            <router-view />
        </section>
        </main>
   
</template>

<script>
import Menu from '../components/Menu.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
    components: { Menu,Sidebar }
}
</script>

<style scoped>
section {
    /* display: grid; */
    grid-template-rows: max-content auto;
    grid-template-columns: auto auto;
}

</style>
