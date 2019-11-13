<template>
  <mdb-container>
    <mdb-btn color="default" @click.native="register = true">launch register modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal :show="register" @close="register = false">
    <mdb-modal-header class="text-center">
      <mdb-modal-title tag="h4" bold class="w-100">Sign up</mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body class="mx-3 grey-text">
      <mdb-input label="Your name" icon="user" class="mb-5"/>
      <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
      <mdb-input label="Your password" icon="lock" type="password"/>
    </mdb-modal-body>
    <mdb-modal-footer center>
      <mdb-btn @click.native="register = false" color="deep-orange">Sign Up</mdb-btn>
    </mdb-modal-footer>
  </mdb-modal>
 
</template>

<script>
import * as auth from "../services/AuthService";

export default {
	name: "Register",

	data: function() {
		return {
			userName: "",
			password: "",
			firstName: "",
			lastName: ""
		};
	},
	methods: {
		onSubmit: async function() {
			const user = {
				userName: this.userName,
				password: this.password,
				firstName: this.firstName,
				lastName: this.lastName
			};
			const registerPromise = auth.registerUser(user);
			const loginPromise = auth.login(user);
			await Promise.all([registerPromise, loginPromise]);
			this.$router.push({ name: "home" });
		}
	}
};
</script>

<style scoped>
</style>

	