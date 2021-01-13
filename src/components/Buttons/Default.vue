<template>
    <div class="vg-default-button">

    </div>
</template>

<script>
    export default {
        name: 'VgButtonDefault',
        props: {
            ghost: {
                type: Boolean,
                default: false
            },
            primary: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss">
  .vg-default-button {
    background-color: var(--color-primary);
    color: var(--color-text-1);

    &--ghost {
      color: var(--color-primary);
      background-color: transparent;
      border: 1px solid var(--color-primary);
    }

    &--primary {
      color: var(--color-primary);
      background-color: transparent;
      border: 1px solid var(--color-primary);
    }
  }
</style>
