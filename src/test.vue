<template lang="pug">
    CrudForm(v-bind="form")
</template>

<script>
import CrudForm from '@/components/CrudForm/CrudForm'
//import InputValidations from '@/mixins/InputValidations.js'
export default {
    name: 'component-name',
    props: {},
    data: function(){
        return {
            form: {
                toolbarTitle: 'Usuario',
                toolbarIcon: 'supervised_user_circle',
                fields: [
                    {
                        field: 'name',
                        type: 'text',
                        maxLength: 15,
                        value: '',
                        label: 'Nombre'
                    },
                    {
                        field: 'parent_surname',
                        type: 'text',
                        maxLength: 15,
                        value: '',
                        label: 'Apellido Paterno'
                    },
                    {
                        field: 'mother_surname',
                        type: 'text',
                        maxLength: 15,
                        value: '',
                        label: 'Apellido Materno'
                    },
                    {
                        field: 'city',
                        type: 'select',
                        value: 'La Serena',
                        label: 'Ciudad',
                        options: ['La Serena', 'Coquimbo', 'Copiapó', 'Santiago']
                    },
                    
                ]
            }
        }
    },
    computed: {},
    methods: {},
    watch: {},
    components: {CrudForm},
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