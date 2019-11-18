<template>
	<header>
		<!-- <div class="container"> -->
		<b-navbar toggleable="md" type="dark" class="nav-background">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand href="#">Wireless App</b-navbar-brand>
			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav>
					<b-nav-item v-for="link in links" :key="link">
						<router-link exact :to="{ name: link }">{{ link }}</router-link>
					</b-nav-item>
				</b-navbar-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<!-- Using button-content slot -->
						<template slot="button-content">
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Signout</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</header>
	<!-- </div> -->
</template>


<script>
import * as auth from "../services/AuthService";

export default {
	name: "Navbar",
	data() {
		return {
			links: [
				// "logIn",
				// "register",
				"home",
				"productList",
				"addProduct",
				"users"
			]
		}; //return
	}, //data

	methods: {
		logout: function() {
			auth.logout();
			this.$router.push({ name: "home" });
		}
	}
};
</script>

<style lang="scss">
header {
	align-items: space-between;
	justify-content: space-between;
}
nav.navbar {
	height: 6rem;
}

a.navbar-brand {
	text-transform: uppercase;
	letter-spacing: 3px;
}

nav ul {
	list-style-type: none;

	li {
		display: inline-block;

		a:link,
		a:visited,
		a:active,
		a:hover {
			text-transform: capitalize;
			padding: 5px;
			margin: 5px;
			cursor: pointer;
			color: white;
		}

		a:hover {
			background-color: rgb(82, 59, 59);
			color: rgb(82, 4, 105);
			text-decoration: none;
		}

		a.router-link-active:link,
		a.router-link-active:visited,
		a.router-link-active:active,
		a.router-link-active:hover {
			text-decoration: none;
			color: yellowk;
			background-color: white;
			cursor: inherit;
		}
	}
}

nav.navbar {
	height: 6rem;
}

a.navbar-brand {
	text-transform: uppercase;
	letter-spacing: 3px;
}

li.nav-item a {
	text-transform: uppercase;
}

li.nav-item a {
	text-transform: uppercase;
}

div > h2 {
	margin: 0 auto;
	margin-top: 30px;
}

.nav-background {
	background: #353535;
}
.nav-link a {
	text-decoration: none;
	color: #e9ecef;
	display: block;
}
</style>

