<template>
    <div class="container">
        <HeaderBar></HeaderBar>
        <ContentBar></ContentBar>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';
import ContentBar from '@/components/ContentBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    ContentBar,
    FooterBar,
  }
}
</script>

<style lang="scss">
#app {}
</style>
