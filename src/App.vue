<template lang="pug">
  v-app
    router-view
  //div(id="app")
    div(id="nav")
      router-link(to="/") Home
      router-link(to="/about") About
      router-view
</template>

<script>
//import SalePoint from '@/views/SalePoint/SalePoint'
import Prueba from '@/Prueba' // @/ se traduce como directorio src
import Carousel from '@/Prueba2'
import Home from '@/views/Home'
export default {
    name: 'salepoint-root',
    props: {},
    data: function() {
        return {
        }
    },
    computed: {},
    methods: {
    },
    watch: {},
    components: {
        //'sale-point': SalePoint,
        'prueba': Prueba,
        'carousel': Carousel,
        'home': Home
    },
    mixins: [],
    filters: {},
    // Lifecycle Methods
    //
    // beforeCreate: function(){...},
    // created: function(){...},
    // beforeMount: function(){...},
    // mounted: function(){...},
    // beforeUpdate: function(){...},
    // updated: function(){...},
    // beforeDestroy: function(){...},
    // destroyed: function(){...},
    //
    // End Lifecycle Methods
}
</script>

<style lang="scss">
</style>

