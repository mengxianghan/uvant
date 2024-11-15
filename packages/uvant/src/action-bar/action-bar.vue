<script lang="ts" setup>
import { useChildren } from '../composables'
import { createUniqueSelector } from '../utils'
import VcPlaceholder from '../vc-placeholder/vc-placeholder.vue'
import { ACTION_BAR_KEY, actionBarProps, bem, name } from './action-bar'

defineOptions({
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(actionBarProps)

const { linkChildren } = useChildren(ACTION_BAR_KEY)
const [rootSelector] = createUniqueSelector(name)

linkChildren()
</script>

<template>
    <VcPlaceholder
        :disabled="!props.placeholder"
        :bem="bem"
        :selector="rootSelector"
    >
        <view
            :class="[
                bem({ fixed: props.fixed }),
                rootSelector,
                {
                    'van-safe-area-bottom': props.safeAreaInsetBottom,
                },
            ]"
        >
            <slot />
        </view>
    </VcPlaceholder>
</template>

<style lang="scss">
@import './index';
</style>
