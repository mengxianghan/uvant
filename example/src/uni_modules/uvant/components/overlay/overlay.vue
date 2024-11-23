<script lang="ts" setup>
import { computed, normalizeStyle } from 'vue'
import { useGlobalZIndex } from '../../composables'
import { isDef } from '../../utils'
import VanTransition from '../transition/transition.vue'
import { overlayBem as bem, overlayName as name, overlayEmits, overlayProps } from './overlay'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(overlayProps)

const emit = defineEmits(overlayEmits)

const zIndex = computed(() => (isDef(props.zIndex) ? +props.zIndex : useGlobalZIndex()))

function onClick(evt: MouseEvent) {
    emit('click', evt)
}
</script>

<template>
    <VanTransition
        :show="props.show"
        :custom-class="[bem(), props.customClass]"
        :custom-style="normalizeStyle([props.customStyle, { zIndex }])"
        :duration="props.duration"
        :z-index="zIndex"
        :lock-scroll="props.lockScroll"
        :destroy-on-close="props.destroyOnClose"
        @click="onClick"
    >
        <slot />
    </VanTransition>
</template>

<style lang="scss">
@import './index';
</style>
