<template>
	<div v-bind:class="{ winner : winner == 'Player'}">
		<ul>
			<li>Round #: {{ number }}</li>
			<li>Winner: {{ winner }}</li>
			<li>
				<slot name="choice"></slot>
			</li>
			<li>
				<slot name="coin"></slot>
			</li>
		</ul>
		<button @click="$emit("delete-round", number)">Delete round</button>
	</div>
</template>


<script>
module.export = {
	data: function() {
		return {};
	},
	props: {
		number: {
			type: Number,
		},
		winner: {
			type: String,
			default: ""
		}
	},

	template: "#round-details"
};
</script>



  <style>
        [v-cloak] {
            display: none;
        }

        .winner {
            background-color: green;
        }
    </style>