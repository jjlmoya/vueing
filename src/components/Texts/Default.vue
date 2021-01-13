<template>
    <component :is="setTag"  class="vg-text-default">
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'VgTextDefault',
        props: {
            to: {
                type: String,
                default: undefined
            },
            tag: {
                type: String,
                default: undefined
            }
        },
        computed: {
            setTag () {
               return this.tag || 'span'
            }
        }
    }
</script>

<style lang="scss">
  .vg-text-default {
    line-height: var(--text-line-height, 1.4);
    min-height: calc(1em * var(--text-line-height, 1.4));
  }
</style>
