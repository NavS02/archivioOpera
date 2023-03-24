<template>
    <div>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    setup(props, context) {

    },
    props: {
        collection: { type: String, default: '' },
    },
}
</script>

<style scoped>

</style>