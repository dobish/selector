/*
<ul >
<li v-for="(value, index) in parameters" v-bind:key="index">
    {{ log(value.types)}}
<template v-if="!Array.isArray(value)">
    <div>{{value.name}} </div>
<div v-for="type in value.types" :key="type" :class="{selected : type == isSelected  }"
@click="selectItem(type), toggleParameter(value)" class="parameter-button">{{ type }}</div>
<button @click="toggleParameter(index)">Click</button>
    </template>

    </li>
    </ul>
    </ul>*/
