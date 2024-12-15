<script lang="ts" setup>
import { computed, normalizeStyle } from 'vue'
import { addUnit, createUniqueSelector, getSystemInfoSync } from '../../utils'
import VcPlaceholder from '../vc-placeholder/vc-placeholder.vue'
import { fixedBem, fixedName, fixedProps } from './fixed'

defineOptions({
    name: fixedName,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(fixedProps)

const [fixedSelector] = createUniqueSelector(fixedName)

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
        <VcPlaceholder
            :disabled="!props.placeholder"
            :selector="fixedSelector"
        >
            <view
                :class="[fixedBem(), props.customClass, {
                    'van-safe-area-bottom': props.safeAreaInsetBottom,
                    'van-safe-area-top': props.safeAreaInsetTop,
                }, fixedSelector]"
                :style="normalizeStyle([styles, props.customStyle])"
            >
                <slot />
            </view>
        </VcPlaceholder>
    </template>
</template>

<style lang="scss">
@import './index';
</style>
