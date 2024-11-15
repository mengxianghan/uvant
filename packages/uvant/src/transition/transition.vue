<script lang="ts" setup>
import { normalizeStyle } from 'vue'
import { useTransition } from '../composables'
import { preventDefault } from '../utils'
import { bem, name, transitionEmits, transitionProps } from './transition'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(transitionProps)

const emit = defineEmits(transitionEmits)

const { initialized, classes, styles } = useTransition(props, { emit })

function onClick(evt: MouseEvent) {
    emit('click', evt)
}

function onTouchmove(evt: TouchEvent) {
    if (props.lockScroll) {
        preventDefault(evt, true)
    }
    emit('touchmove', evt)
}
</script>

<template>
    <view
        v-if="initialized"
        :class="[bem(), customClass, classes]"
        :style="normalizeStyle([styles, customStyle])"
        @click="onClick"
        @touchmove.stop="onTouchmove"
    >
        <slot />
    </view>
</template>

<style lang="scss">
@import './index';
</style>
