<script lang="ts" setup>
import { computed, normalizeStyle, ref, useSlots } from 'vue'
import { bem as bemCell } from '../cell/cell'
import { bem as bemField } from '../field/field'
import VanIcon from '../icon/icon.vue'
import { debounce, isDef, type Numeric } from '../utils'
import { bem, name, searchProps } from './search'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(searchProps)

const emit = defineEmits([
    'search',
    'focus',
    'blur',
    'clickInput',
    'clickLeftIcon',
    'clickRightIcon',
    'clear',
    'cancel',
    'change',
])

const slots = useSlots()

const modelValue = defineModel<Numeric>()
const isFocus = ref(false)

const hasLeftIcon = computed(() => isDef(props.leftIcon) || slots.leftIcon)
const hasLabel = computed(() => isDef(props.label) || slots.label)
const hasClear = computed(() => {
    const checkValue = isDef(modelValue.value)

    if (props.clearTrigger === 'focus') {
        return props.clearable && checkValue && isFocus.value
    }

    return props.clearable && checkValue
})
const hasRightIcon = computed(() => isDef(props.rightIcon) || slots.rightIcon)

const onInput = debounce(() => {
    if (props.formatTrigger === 'onChange') {
        modelValue.value = props.formatter(modelValue.value)
    }

    emit('change', modelValue.value)
}, 10)

function onClickCancel() {
    emit('cancel')
}

function onClickInput(e) {
    emit('clickInput', e)
}

function onClickLeftIcon(e) {
    emit('clickLeftIcon', e)
}

function onClickRightIcon(e) {
    emit('clickRightIcon', e)
}

function onClear() {
    modelValue.value = ''
    emit('clear')
}

function onFocus(e) {
    isFocus.value = true
    emit('focus', e)
}

function onBlur(e) {
    setTimeout(() => {
        isFocus.value = false
    }, 5)

    if (props.formatTrigger === 'onBlur') {
        modelValue.value = props.formatter(modelValue.value)
    }

    emit('blur', e)
}

function onSearch(e) {
    emit('search', e.detail.value)
}
</script>

<template>
    <view
        :class="bem()"
        :style="normalizeStyle(props.customStyle, { background: props.background })"
    >
        <view
            :class="
                bem('content', [props.shape])
            "
        >
            <template v-if="hasLabel">
                <view :class="bem('label')">
                    <slot name="label">
                        {{ props.label }}
                    </slot>
                </view>
            </template>
            <view :class="[bemCell(['borderless']), bemField(), bem('field', { disabled: props.disabled })]">
                <template v-if="hasLeftIcon">
                    <view
                        :class="bemField('left-icon')"
                        @click="onClickLeftIcon"
                    >
                        <VanIcon :name="props.leftIcon" />
                    </view>
                </template>
                <view
                    :class="[bemCell('value'), bemField('value')]"
                    @click="onClickInput"
                >
                    <view :class="bemField('body')">
                        <input
                            :id="id"
                            v-model="modelValue"
                            :disabled="props.disabled"
                            :placeholder="props.placeholder"
                            :class="bemField('control', [props.inputAlign])"
                            :maxlength="props.maxlength"
                            :focus="props.autofocus"
                            type="search"
                            @input="onInput"
                            @focus="onFocus"
                            @blur="onBlur"
                            @confirm="onSearch"
                            @search="onSearch"
                        >

                        <!-- 清除按钮 -->
                        <template v-if="hasClear">
                            <view
                                :class="bemField('clear')"
                                @click="onClear"
                            >
                                <VanIcon :name="props.clearIcon" />
                            </view>
                        </template>

                        <!-- 右侧 icon -->
                        <template v-if="hasRightIcon">
                            <view
                                :class="bemField('right-icon')"
                                @click="onClickRightIcon"
                            >
                                <slot name="right-icon">
                                    <VanIcon :name="props.rightIcon" />
                                </slot>
                            </view>
                        </template>
                    </view>
                </view>
            </view>
        </view>
        <template v-if="props.showAction">
            <view
                class="van-search__action"
                @click="onClickCancel"
            >
                {{ props.actionText }}
            </view>
        </template>
    </view>
</template>

<style lang="scss">
@import './index';
</style>
