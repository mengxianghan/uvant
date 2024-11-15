<script lang="ts" setup>
import { useChildren } from '../composables'
import { addUnit } from '../utils'
import { bem, GRID_KEY, gridProps, name } from './grid'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(gridProps)

const { linkChildren } = useChildren(GRID_KEY)
linkChildren({ props })
</script>

<template>
    <view
        :class="[
            bem(),
            {
                'van-hairline--top': props.border && !props.gutter,
                'van-hairline--left': props.border && !props.gutter,
            },
        ]"
        :style="{
            paddingLeft: addUnit(props.gutter),
        }"
    >
        <slot />
    </view>
</template>

<style lang="scss">
@import './index';
</style>
