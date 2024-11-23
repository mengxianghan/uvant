<script lang="ts" setup>
import { computed } from 'vue'
import { isDef } from '../../utils'
import VanIcon from '../icon/icon.vue'
import { cellBem, cellEmits, cellName, cellProps } from './cell'

defineOptions({
    name: cellName,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)
const slots = defineSlots()

const hasLabel = computed(() => isDef(props.label) || slots.label)
const hasLeftIcon = computed(() => isDef(props.icon) || slots.icon)
const hasTitle = computed(() => isDef(props.title) || slots.title || hasLabel.value)
const hasValue = computed(() => isDef(props.value) || slots.value)
const hasRightIcon = computed(() => slots['right-icon'] || props.isLink)
const arrow = computed(() => {
    const { arrowDirection } = props
    let name

    switch (arrowDirection) {
        case 'left':
            name = 'arrow-left'
            break
        case 'right':
            name = 'arrow'
            break
        case 'up':
            name = 'arrow-up'
            break
        case 'down':
            name = 'arrow-down'
            break
        default:
            name = 'arrow'
            break
    }

    return name
})

function onClick(evt: MouseEvent) {
    emit('click', evt)
}
</script>

<template>
    <view
        :class="
            cellBem({
                center: props.center,
                clickable: props.isLink || props.clickable,
                borderless: !props.border,
                [props.size]: props.size,
            })
        "
        @click="onClick"
    >
        <template v-if="hasLeftIcon">
            <view :class="cellBem('left-icon')">
                <slot name="icon">
                    <VanIcon :name="props.icon" />
                </slot>
            </view>
        </template>
        <template v-if="hasTitle">
            <view :class="cellBem('title')">
                <view>
                    <slot name="title">
                        {{ props.title }}
                    </slot>
                </view>
                <template v-if="hasLabel">
                    <view :class="cellBem('label')">
                        <slot name="label">
                            {{ props.label }}
                        </slot>
                    </view>
                </template>
            </view>
        </template>
        <template v-if="hasValue">
            <view :class="cellBem('value')">
                <slot name="value">
                    {{ props.value }}
                </slot>
            </view>
        </template>
        <template v-if="hasRightIcon">
            <view :class="cellBem('right-icon')">
                <slot name="right-icon">
                    <VanIcon :name="arrow" />
                </slot>
            </view>
        </template>
        <slot name="extra" />
    </view>
</template>

<style lang="scss">
@import './index';
</style>
