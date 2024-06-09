<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary text-center">
        <div class="container-fluid">
            <img class="logo" src="../assets/logotienda.jpg" alt="">
            <a class="navbar-brand" href="#">32 BITS</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto fs-4">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="/juegos" class="nav-link"
                        >Productos</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "NavbarComp",
}
</script>
<style scoped lang="scss">
nav {
    padding: 20px;
    background: radial-gradient(circle, rgb(96, 29, 132) 0%, rgb(194, 37, 37) 50%, rgb(159, 39, 172) 100%);

    a {
        font-weight: bold;
        color: #05519c;


        &.router-link-exact-active {
            color: #42b983;
        }
    }

    .logo{
        width: 60px;
        height: 60px;
        border-radius: 50px;
    }
    .navbar-brand {
        font-size: 30px;
       
    }
}
</style>