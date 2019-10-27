<template>
	<div v-bind:class="{ winner : winner == 'playName'}">
   
        <ul>
             <li> {{ winner }}: here is your score so far:</li>
                <li>WinCount : {{ win }}</li>
                <li>LostCount : {{ lost }}</li>             
        </ul>
     </div>
             
</template>

<script>
module.exports = {
 data: function () {
        return {};
    },
    props: {
        'win': {
            type: Number,
            default: 0
        },
        'lost': {
            type: Number,
            default: 0
        },

        'winner': {
            type: String,
            default: ''
        }
    },
    template: "#round-detail",
}

</script>


<style scoped>
ul {
    list-style-type: none;
}

</style>