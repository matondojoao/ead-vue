<template>
  <div>
    <div class="pageTitle">
      <span class="title">Minhas Dúvidas</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li>Todos</li>
                <li>Aguardando Minha Resposta</li>
                <li>Aguardando Professor</li>
                <li>Finalizados</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="comments">
              <supports-comp />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupportsComp from '@/components/SupportsComp.vue';
export default {
  name: 'ModuleAndLesson',
  components: {
    SupportsComp
  }
}
</script>