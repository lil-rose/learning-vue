<template lang="pug">
div(id="app")
    v-app
        //v-icon border_color
        v-data-table(:headers="headers" :items="rows")
            template(slot='items' slot-scope='props')
                td {{ props.item.cant }}
                td {{ props.item.detalle }}
                td {{ props.item.precio }}
                td(v-if="props.item.dcto != null") {{props.item.dcto}}
                td(v-else) Sin dcto.
                //td {{props.item.dcto}}
                td 
                    v-icon(color='rgba(0, 150, 136, 1)') {{ props.item.acciones }}
        
</template>

<script>
export default {
    //props: ['message'],
    data: function() {
        return {
            headers: [
                { text: 'Cantidad',/*align: 'left', sortable: false,*/ value: 'cant'},
                { text: 'Detalle', value: 'detalle' },
                { text: 'Precio', value: 'precio' },
                {text: 'Descuento', value: 'dcto'},
                { text: 'Acciones', value: 'acciones' },
            ],
            rows: [
                { cant: 3, detalle: 'Gorro Cumpleaños', precio: 300, dcto: '50%', acciones: 'border_color' },
                { cant: 3, detalle: 'Gorro Navidad', precio: 300, dcto: '30%', acciones: 'border_color' },
                { cant: 3, detalle: 'Mustache', precio: 300, dcto: null, acciones: 'border_color' },
                { cant: 3, detalle: 'Lentes', precio: 300, dcto: null, acciones: 'border_color' },
                { cant: 3, detalle: 'Corbata', precio: 300, dcto: null, acciones: 'border_color' },
            ],
        }
    },
}
</script>