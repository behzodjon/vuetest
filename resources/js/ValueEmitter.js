export default {
    props: ['value'],

    data() {
        return {
            local: this.value,
        }
    },

    watch: {
        local: {
            deep: true,
            handler(newVal) {
                this.$emit('input', newVal)
            }
        }
    }
}