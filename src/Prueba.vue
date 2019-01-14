<template lang="pug">
div(id="app")
    //^- también puede ser #app
    v-app
        v-toolbar
            h1 Menu más grande
        v-container
            //v-layout(align-center justify-center row fill-height)
            v-layout(text-xs-center wrap)
                v-flex(align-self-center)
                    v-card
                        v-toolbar(dark color="info")
                            // Info toolbars: https://vuetifyjs.com/en/components/toolbars
                            v-toolbar-side-icon
                            h2 Menú
                            v-spacer
                            v-toolbar-items
                                v-btn(flat) Link One
                                v-btn(flat) Link Two
                                v-btn(flat) Link Three
                        v-card-title(primary-title)
                            h1(class="ma-1") Titulito
                        v-card-text(class="ma-1") hola soy un texto
                        v-card-actions
                            v-btn(@click="count++" large round class="ma-3")
                                div(class="ma-2")
                                    v-icon(color="rgba(0, 0, 255, 0.9)") touch_app
                                    span You clicked me {{count}} {{time}}
                        v-card-actions(class="md-3")
                            v-select(:items="items" v-model="size" label="Size" class="ma-3")
                            v-spacer
        
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
                { text: 'Extra small (2px)', value: 'xs' },
                { text: 'Small (4px)', value: 'sm' },
                { text: 'Medium (8px)', value: 'md' },
                { text: 'Large (16px)', value: 'lg' },
                { text: 'Extra large (24px)', value: 'xl' },
            ],
        }
    },
}
</script>

