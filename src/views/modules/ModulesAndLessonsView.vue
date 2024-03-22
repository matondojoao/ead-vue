<template>
    <div>
        <div class="pageTitle">
            <span class="title">Curso X</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
        <div class="content">
            <div class="container">

                <course-modules />

                <div class="right">
                    <div class="content">

                        <player-content />

                        <supports-lessons />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CourseModules from './components/CourseModules.vue'
import PlayerContent from './components/PlayerContent.vue'
import SupportsLessons from './components/SupportsLessons.vue'
export default {
    name: 'ModuleAndLesson',
    components: {
        CourseModules,
        PlayerContent,
        SupportsLessons
    }
}
</script>