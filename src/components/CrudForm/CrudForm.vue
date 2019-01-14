<template lang="pug">
    v-container
        v-toolbar.headline.font-weight-bold(color="primary" dark)
            v-icon {{toolbarIcon}}
            span.ml-4 {{toolbarTitle}}
        v-card.px-2.py-3
            v-form(ref="form")
                v-layout(row wrap)
                    v-flex(xs12 md6 v-for="(field, idx) in fields" :key="idx")
                        v-text-field.mx-3(v-if="field.type == 'text'" :label="field.label" :rules="[]")
                        v-select.mx-3(v-else-if="field.type == 'select'" :label="field.label" :items="field.options")
                    v-flex.px-3(xs12 md4 offset-md4)
                        v-btn.subheading.mt-3(block color="secondary") Enviar
</template>

<script>
import InputValidations from '@/mixins/InputValidations.js'

export default {
    name: 'component-name',
    props: {
        fields: {
            type: Array,
            default: () => []
        },
        toolbarTitle: {
            type: String,
            default: () => 'title'
        },
        toolbarIcon: {
            type: String,
            default: () => 'info'
        }
    },
    data: function(){
        return {}
    },
    computed: {
        formIsValid: function(){
            return this.refs.form.validate()
        }
},
    methods: {
        resetForm: function(){
            this.refs.form.reset()
        },
        submitForm: function(){
            if(!this.formIsValid) return
            // Form submit logic
            this.resetForm()
        }
    },
    watch: {},
    components: {},
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