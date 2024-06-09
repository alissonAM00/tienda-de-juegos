<template>
    <div class="footer">
        <div class="container d-flex justify-content-evenly align-items-center fs-4">
                <div>
                    <img class="logo" src="../assets/logotienda.jpg" alt="">
                </div>
                <div >
                    <p>32 BITS</p>
                </div>
                <div>
                    <p>Alisson Ávalos 2024</p>
                </div> 
                <div>
                    <p>derechos reservados <img class="logo-footer" src="../assets/copyright.png" alt=""></p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"FooterView"
}
</script>

<style scoped>
.logo{
    width: 60px;
    height: 60px;
    border-radius: 50px;
}
.logo-footer{
    width: 20px;
}
.footer{
    padding: 20px;
    background: radial-gradient(circle, rgb(96, 29, 132) 0%, rgb(194, 37, 37) 50%, rgb(159, 39, 172) 100%);
    font-weight: bold;
    color: #05519c;
}
</style>