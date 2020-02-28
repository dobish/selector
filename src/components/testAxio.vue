<template>
<div>
    <ul
            class="test-list"
            v-for="todo in todosList"
            :key="todo.id">
        <li class="test-list--item">
            <div>{{ todo.id }}</div>
            <div>{{ todo.title }}</div>
        </li>
    </ul>
</div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "testAxio",
        data(){
            return {
                todosList: []
            };
        },
        mounted() {
            axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(response => {
                this.todosList = [...response.data].slice(0,10)
            })
            .catch(err => {
                console.log(err)
            })
        }
    };
</script>

<style scoped>
    .test-list {
        font-family: Roboto;
        list-style: none;
        margin: 20px auto;
        width: 50%;
    }

    .test-list--item {
        border: 1px solid rgb(41, 41, 41);
        border-radius: 5px;
        text-align: center;
        display: block;
        box-shadow: 2px 2px rgba(138, 124, 124, 0.4);
    }

    .test-list--id {
        font-weight: 300;
        margin: 10px auto;
    }

    .test-list--title {
        font-weight: 500;
        margin: 20px auto;
        text-transform: capitalize;
    }

    .test-list--complete {
        font-weight: 600;
        margin: 10px auto;
        color: #56ca86;
    }

    .test-list--incomplete {
        font-weight: 600;
        margin: 10px auto;
        color: #ca5656;
    }
</style>
