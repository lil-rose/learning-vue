export default {
    computed: {
        mixRules: function() {
            return {
                noSingleQuotes(value) {
                    let verificador = /(')/.exec(value)
                    if (!verificador) {
                        return "No se permite ingresar comillas simples en los campos del formulario (caracter ' )"
                    } else {
                        return true
                    }
                },
                required(value) {
                    if (!value) {
                        return 'Campo obligatorio'
                    } else {
                        return true
                    }
                },
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Ingrese un email válido'
                },
                isNotNegative(value) {
                    if (value >= 0) {
                        return true
                    } else {
                        return 'No se permiten números negativos'
                    }
                },
                isNotZero(value) {
                    if (value != 0) {
                        return true
                    } else {
                        return 'Debe ser distinto de cero'
                    }
                },
                charsOnly(value) {
                    if (!/[^a-z]/i.test(value)) {
                        return true
                    } else {
                        return 'Sólo se aceptan caractéres, sin espacios'
                    }
                },
                charsAndSpacesOnly(value){
                    if (!/[^a-z, \s]/i.test(value)) {
                        return true
                    } else {
                        return 'Sólo se aceptan caractéres, sin espacios'
                    }
                },
            }
        },
    },
}
