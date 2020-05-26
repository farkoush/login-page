<template>
<div>
    <form>
        <validate-input></validate-input>
    </form>
</div>
</template>
<script>
import Validate from './Validate.vue'
export default {
    components : {
        'validate-input' : Validate
    },
}
</script>