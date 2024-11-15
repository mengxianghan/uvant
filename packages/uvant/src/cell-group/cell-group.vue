<script lang="ts" setup>
import { isDef } from '../utils'
import { bem, cellGroupProps, name } from './cell-group'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(cellGroupProps)
</script>

<template>
    <view
        :class="
            bem({
                'top-bottom': props.border && !props.inset,
                'inset': props.inset,
            })
        "
    >
        <template v-if="isDef(props.title)">
            <view :class="bem('title')">
                <slot name="title">
                    {{ props.title }}
                </slot>
            </view>
        </template>
        <slot />
    </view>
</template>

<style lang="scss">
@import './index';
</style>
