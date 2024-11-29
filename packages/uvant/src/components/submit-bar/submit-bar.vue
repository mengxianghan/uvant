<script lang="ts" setup>
import { computed, type CSSProperties, ref, useSlots, watchEffect } from 'vue'
import { createUniqueSelector, isNumeric } from '../../utils'
import VanButton from '../button/button.vue'
import VanIcon from '../icon/icon.vue'
import VcPlaceholder from '../vc-placeholder/vc-placeholder.vue'
import { submitBarBem as bem, submitBarName as name, submitBarEmits, submitBarProps } from './submit-bar'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(submitBarProps)

const emit = defineEmits(submitBarEmits)

const slots = useSlots()
const [rootSelector] = createUniqueSelector(name)

const integer = ref<number>(0)
const decimal = ref()

watchEffect(() => {
    const [_integer = 0, _decimal = ''] = (props.price / 100).toFixed(+props.decimalLength).split('.')
    integer.value = Number(_integer)
    decimal.value = props.decimalLength ? `.${_decimal}` : ''
})

const hasTipIcon = computed(() => props.tipIcon)
const hasTip = computed(() => props.tip || slots.tip)
const hasPrice = computed(() => isNumeric(props.price))
const textStyles = computed(() => {
    const { textAlign } = props
    const style: CSSProperties = {}

    if (textAlign) {
        let justifyContent: string

        switch (textAlign) {
            case 'left':
                justifyContent = 'flex-start'
                break
            case 'right':
                justifyContent = 'flex-end'
                break
        }

        style.justifyContent = justifyContent
    }

    return style
})

function onSubmit() {
    emit('submit')
}
</script>

<template>
    <VcPlaceholder
        :disabled="!props.placeholder"
        :bem="bem"
        :selector="rootSelector"
    >
        <view :class="[bem({ fixed: props.fixed }), { 'van-safe-area-bottom': props.safeAreaInsetBottom }, rootSelector]">
            <template v-if="hasTip">
                <view :class="bem('tip')">
                    <template v-if="hasTipIcon">
                        <view :class="bem('tip-icon')">
                            <VanIcon :name="props.tipIcon" />
                        </view>
                    </template>
                    <template v-if="tip">
                        <text :class="bem('tip-text')">
                            {{ props.tip }}
                        </text>
                    </template>
                    <template v-if="slots.tip">
                        <slot name="tip" />
                    </template>
                </view>
            </template>
            <view :class="bem('bar')">
                <slot />
                <template v-if="hasPrice">
                    <view
                        :class="bem('text')"
                        :style="textStyles"
                    >
                        <text>{{ props.label }}</text>
                        <view :class="bem('price')">
                            {{ props.currency }}<text :class="bem('price-integer')">
                                {{ integer }}
                            </text>{{ decimal }}
                        </view>
                        <text :class="bem('suffix-label')">
                            {{ props.suffixLabel }}
                        </text>
                    </view>
                </template>

                <slot name="button">
                    <VanButton
                        round
                        :class="bem('button')"
                        :disabled="props.disabled"
                        :border="false"
                        :type="props.buttonType"
                        :loading="props.loading"
                        :color="props.buttonColor"
                        @click="onSubmit"
                    >
                        {{ props.buttonText }}
                    </VanButton>
                </slot>
            </view>
        </view>
    </VcPlaceholder>
</template>

<style lang="scss">
@import './index';
</style>
