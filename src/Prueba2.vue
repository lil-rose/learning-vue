<template lang="pug">
div(id="app")
    v-app
        v-toolbar
            h1 Menu  <code>&ltmás&gt</code>  Grande
                
        v-container
            v-layout(align-content-center)
                v-flex(align-self-center)
                    v-card
                        v-carousel
                            v-carousel-item(
                                v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                                )
        
</template>

<script>
export default {
    props: ['message'],
    data: function() {
        return {
            count: 0,
            time: 'times',
            size: 'sm',
            items: [
                {src: './assets/squirrel.jpg'
                },
                {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
                ],
        }
    },
}
</script>