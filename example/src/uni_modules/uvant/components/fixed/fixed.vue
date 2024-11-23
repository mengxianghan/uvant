<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, getSystemInfoSync } from '../../utils'
import VcPlaceholder from '../vc-placeholder/vc-placeholder.vue'
import { bem, fixedProps, name } from './fixed'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(fixedProps)

const styles = computed(() => {
    const { windowTop, windowBottom } = getSystemInfoSync()

    return {
        zIndex: props.zIndex,
        [`${props.position}`]: `calc(${addUnit(props.offset)} + ${addUnit(props.position === 'top' ? windowTop : windowBottom)})`,
    }
})
</script>

<template>
    <template v-if="disabled">
        <slot />
    </template>
    <template v-else>
        <view
            :class="bem()"
            :style="styles"
        >
            <VcPlaceholder :disabled="!props.placeholder">
                <slot />
            </VcPlaceholder>
        </view>
    </template>
</template>

<style lang="scss">
@import './index';
</style>
