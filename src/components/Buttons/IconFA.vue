<template>

    <span class="vg-icon-fa"
    :class="[
        {
            'vg-icon-fa--primary': primary,
            'vg-icon-fa--ghost': ghost,
            'fab': social,
            'fas': !social,
        },
        `fa-${symbol}`
    ]"
    >
    </span>
</template>

<script>
    export default {
        name: 'VgButtonIconFa',
         ghost: {
                type: Boolean,
                default: false
        },
        primary: {
            type: Boolean,
            default: false
        },
        props: {
            symbol: {
                type: String,
                default: 'clock'
            },
            social: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .vg-icon-fa {
    background-color: var(--color-primary);
    color: var(--color-text-one);

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
