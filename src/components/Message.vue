<template>
    <div>
        <h2>The numbers are {{ numbers }}</h2>
    </div>
</template>

<script>

    export default {
        components: {

        },
        data() {
            return {
                message: {
                    msg: 'He llo World'
                },
                props: {
                    numbers: Array
                }
            }
        }
    }
</script>

<style scoped>

</style>