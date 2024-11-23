<script lang="ts" setup>
import { ref, useSlots } from 'vue'
import { useTouch } from '../../composables'
import { createNamespace, preventDefault } from '../../utils'
import VanLoading from '../loading/loading.vue'
import { numberKeyboardKeyProps } from './number-keyboard'

defineOptions({
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(numberKeyboardKeyProps)

const emit = defineEmits(['press'])

const { bem } = createNamespace('number-keyboard-key')

const slots = useSlots()

const touch = useTouch()

const active = ref(false)

function onTouchStart(evt) {
    touch.start(evt)
    active.value = true
}

function onTouchMove(evt) {
    touch.move(evt)

    if (touch.direction.value) {
        active.value = false
    }
}

function onTouchEnd(evt) {
    if (active.value) {
        if (!slots.default) {
            preventDefault(evt)
        }
        active.value = false
        emit('press', props.text, props.type)
    }
}
</script>

<template>
    <view
        :class="bem('wrapper', { wider: props.wider })"
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
    >
        <view
            :class="
                bem([
                    props.color,
                    {
                        large: props.large,
                        active,
                        delete: props.type === 'delete',
                    },
                ])
            "
        >
            <template v-if="props.loading">
                <view :class="bem('loading-icon')">
                    <VanLoading />
                </view>
            </template>

            <slot />
        </view>
    </view>
</template>

<style lang="scss">
@import './index';
</style>
