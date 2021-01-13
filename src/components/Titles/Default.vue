<template>
    <div class="vg-title">
        <TextDefault :tag="tag" class="vg-title__title" :class="[ size && `vg-title__title--${size}` ]">
            <slot />
        </TextDefault>
        <TextDefault v-if="$slots.subtitle" class="vg-title__subtitle" :class="[ size && `vg-title__subtitle--${size}`]">
            <slot name="subtitle" width="8em" />
        </TextDefault>
    </div>
</template>

<script>
    import TextDefault from '@/components/Texts/Default'

    export default {
        components: {
            TextDefault
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            size: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
  .vg-title {
    $this: &;

    position: relative;
    padding-left: 19px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 4px;
    padding-bottom: 2px;

    @include breakpoint(768px) {
      padding-left: 27px;
    }

    &::before {
      content: "";
      width: 3px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      background-color: var(--color-primary);
      border-radius: 1.5px;
    }

    &__title {
      text-transform: uppercase;
      color: var(--color-text-two);
      font-weight: 800;
      font-size: 20px;

      @include breakpoint(768px) {
        --text-line-height: 1.2;

        font-size: 30px;
      }

      &--small {
        font-size: 18px;
      }

      &--tiny {
        font-size: 14px;
        font-weight: 700;
      }
    }

    &__subtitle {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding-bottom: 2px;

      @include breakpoint(768px) {
        font-size: 14px;
      }

      &--small {
        padding-bottom: 0;

        @include breakpoint(768px) {
          font-size: 12px;
        }
      }
    }
  }
</style>
