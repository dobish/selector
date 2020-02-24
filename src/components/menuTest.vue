<template>
<div id="app">
    <test-filter v-for="node in nodes" v-bind:key="node"></test-filter>
</div>
</template>

<script>
    import TestFilter from "@/components/testFilter";
    export default {
        name: "menuTest",
        components: {TestFilter},
        data: function () {
            return {

            }
        }

    }
</script>

<style scoped>

</style>
