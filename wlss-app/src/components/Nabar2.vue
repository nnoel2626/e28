<template>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
			<router-link to="/" class="navbar-brand">
				<!-- <img style="max-height:25px;" src="../assets/logo.png" /> Task Manager -->
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<router-link to="/" class="nav-link" exact>Home</router-link>
					</li>

					<li v-if="$store.state.isLoggedIn" class="nav-item">
						<router-link to="/showProducts" class="nav-link" exact>showProducts</router-link>
					</li>

					<li v-if="$store.state.isLoggedIn" class="nav-item">
						<router-link to="/searchProducts" class="nav-link" exact>searchProducts</router-link>
					</li>

					<li v-if="$store.state.isLoggedIn" class="nav-item">
						<router-link to="/addProducts" class="nav-link" exact>addProducts</router-link>
					</li>

					<li v-if="$store.state.isLoggedIn" class="nav-item">
						<router-link to="/users" class="nav-link" exact>users</router-link>
					</li>

					<li v-if="!$store.state.isLoggedIn" class="nav-item">
						<router-link to="/register" class="nav-link" exact>Register</router-link>
					</li>

					<li v-if="!$store.state.isLoggedIn" class="nav-item">
						<router-link to="/login" class="nav-link" exact>Login</router-link>
					</li>

					<li v-if="$store.state.isLoggedIn" class="nav-item">
						<a v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>



						<b-form @submit="onSubmit" v-if="show">
							<b-form-group id="exampleInputGroup1" label="firstName:" label-for="firstName">
								<b-form-input
									id="firstName"
									type="firstName"
									v-model="form.firstName"
									required
									placeholder="Enter firstName"
								></b-form-input>
							</b-form-group>
							<b-form-group label="lastName:" label-for="lastName">
								<b-form-input
									id="lastName"
									type="lastName"
									v-model="form.lastName"
									required
									placeholder="Enter lastName"
								></b-form-input>
							</b-form-group>
							<b-form-group label="email:" label-for="email">
								<b-form-input
									id="email"
									type="email"
									v-model="form.email"
									required
									placeholder="Enter email"
								></b-form-input>
							</b-form-group>
							<b-form-group label="Password:" label-for="password">
								<b-form-input
									id="password"
									type="password"
									v-model="form.password"
									required
									placeholder="Enter password"
								></b-form-input>
							</b-form-group>
							<div class="d-flex justify-content-between">
								<div>
									<b-button type="submit" variant="primary">Submit</b-button>
								</div>
							</div>
						</b-form>


						<template>
	<div id="app">
		<b-container>
			<b-row align-h="center" class="mt-5">
				<b-col cols="5">
					<b-card class="p-3">
						<h3 class="mb-4">Register</h3>
						<b-form @submit="onSubmit" v-if="show">
							<b-form-group id="exampleInputGroup1" label="firstName:" label-for="firstName">
								<b-form-input
									id="firstName"
									type="firstName"
									v-model="form.firstName"
									required
									placeholder="Enter firstName"
								></b-form-input>
							</b-form-group>
							<b-form-group label="lastName:" label-for="lastName">
								<b-form-input
									id="lastName"
									type="lastName"
									v-model="form.lastName"
									required
									placeholder="Enter lastName"
								></b-form-input>
							</b-form-group>
							<b-form-group label="userName:" label-for="userName">
								<b-form-input
									id="userName"
									type="userName"
									v-model="form.userName"
									required
									placeholder="Enter userName"
								></b-form-input>
							</b-form-group>
							<b-form-group label="Password:" label-for="password">
								<b-form-input
									id="password"
									type="password"
									v-model="form.password"
									required
									placeholder="Enter password"
								></b-form-input>
							</b-form-group>
							<div class="d-flex justify-content-between">
								<div>
									<b-button type="submit" variant="primary">Submit</b-button>
								</div>
							</div>
						</b-form>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>



