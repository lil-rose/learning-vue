<template lang="pug">
  v-container
    v-card(class="ma-1 pa-5")
      h1(class="display-2 font-weight-bold mb-3") MIS LINKS
      v-layout(row wrap)
        v-flex(md3
        v-for="link in misLinks")
          v-card(class="mr-2 pa-3" width="200" height="300")
            //span {{link}}
            //https://codepen.io/pen/?&editable=true&editors=101
            v-card-title(align-center)
              span(class="headline") {{link.titulo}}
            span {{link.text}}
            v-card-actions
              v-btn(color="indigo darken-4" :href="link.href")
                span(class="white--text") Click
  
    HelloWorld(msg="Welcome to Your Vue.js App") 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' // Así se importa un componente

export default {
  name: 'home',
  data: () => ({
    misLinks: [
        {
          titulo: "Prueba 1",
          text: "Boton, charts, otros",
          href: "/pruebas"
        },
        {
          titulo: "Prueba 2",
          text: "Carousel (todavia me falta probar lo de poner imagenes propias en vez de sacadas de internet",
          href: "/carousel"
        },
        {
          titulo: "Prueba 3",
          text: "Datatable",
          href: "/datatable"
        },
      ],
  }),
  components: {
    HelloWorld
  }
}
</script>
