<template>
    <div class="dialog" v-if="show === true">
        <div class = dialog_content>
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "MyDialog",
        props: {
            show:  {
                type: Boolean,
                default: false
            }
        }
    }

</script>

<style>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
    }


</style>