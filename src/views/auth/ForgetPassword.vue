<template>
    <section id="loginPage" :style="{backgroundImage: 'url('+ require('@/assets/images/bgLogin.jpg')+')'}">
        <div class="loginContent">
            <div class="loginCard">
                <div class="decor" :style="{backgroundImage: 'url(' + require('@/assets/images/building.jpg') +')'}">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTi">
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            <p>
                                Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                            </p>
                        </span>
                        <span class="copyright fontSmall">
                            Todos os Direitos reservados - <b>Especializati</b>
                        </span>
                    </div>
                </div>
                <div class="login">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logoDark.svg')" alt="">
                        </span>
                        <span>
                            <p>Seja muito bem vindo!</p>
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            Recupere sua senha e acesse nossa plataforma para desfrutar de cursos completos para sua especialização.
                        </span>
                        <form action="/dist/index.html" method="">
                            <div class="groupForm">
                                <i class="far fa-envelope"></i>
                                <input type="email" name="email" placeholder="Email" required>
                            </div>
                            <button class="btn primary" type="submit">Recuperar</button>
                        </form>
                        <span>
                            <p class="fontSmall">Acessar? 
                                <router-link :to="{name:'auth'}" class="link primary">Clique aqui</router-link>
                            </p>
                        </span>
                    </div>
                    <span class="copyright fontSmall">
                        Todos os Direitos reservados - <b>Especializati</b>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name:'ForgetPassword'
}
</script>