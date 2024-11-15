<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue'
import { useParent } from '../composables'
import { GRID_KEY } from '../grid'
import VanIcon from '../icon/icon.vue'
import { addUnit } from '../utils'
import VcBadge from '../vc-badge/vc-badge.vue'
import { bem, gridItemEmits, gridItemProps, name } from './grid-item'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(gridItemProps)

const emit = defineEmits(gridItemEmits)

const { parent, index } = useParent(GRID_KEY)

const styles = computed(() => {
    const { square, gutter, columnNum } = parent.props
    const percent = `${100 / +columnNum}%`
    const style: CSSProperties = {
        flexBasis: percent,
    }

    if (square) {
        style.paddingTop = percent
    }
    else if (gutter) {
        const gutterValue = addUnit(gutter)
        style.paddingRight = gutterValue

        if (index.value >= +columnNum) {
            style.marginTop = gutterValue
        }
    }

    return style
})
const contentStyles = computed(() => {
    const { square, gutter } = parent.props

    if (square && gutter) {
        const gutterValue = addUnit(gutter)
        return {
            right: gutterValue,
            bottom: gutterValue,
            height: 'auto',
        }
    }

    return {}
})

function onClick(evt: MouseEvent) {
    emit('click', evt)
}
</script>

<template>
    <view
        :class="bem()"
        :style="styles"
        @click="onClick"
    >
        <view
            :class="[
                bem('content', {
                    [parent.props.direction]: parent.props.direction,
                    center: parent.props.center,
                    square: parent.props.square,
                    reverse: parent.props.reverse,
                    clickable: parent.props.clickable,
                    surround: parent.props.border && parent.props.gutter,
                }),
                { 'van-hairline': parent.props.border },
            ]"
            :style="contentStyles"
        >
            <slot>
                <view :class="bem('icon')">
                    <VcBadge
                        :dot="props.dot"
                        :badge="props.badge"
                        :badge-props="props.badgeProps"
                    >
                        <slot name="icon">
                            <VanIcon
                                :name="props.icon"
                                :class-prefix="props.iconPrefix"
                                :color="props.iconColor"
                            />
                        </slot>
                    </VcBadge>
                </view>
                <view :class="bem('text')">
                    <slot name="text">
                        {{ props.text }}
                    </slot>
                </view>
            </slot>
        </view>
    </view>
</template>

<style lang="scss">
@import './index';
</style>
