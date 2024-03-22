<template>
    <div class="comments">
        <div class="header">
            <span class="title">Dúvidas</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

       <supports-comp />
    </div>
</template>

<script>

/* eslint-disable */

import SupportsComp from '@/components/SupportsComp.vue'

export default {
    name: 'SupportsLessons',
    components:{
        SupportsComp,
    }
}
</script>