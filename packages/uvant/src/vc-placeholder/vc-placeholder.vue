<script lang="ts" setup>
import { getCurrentInstance, onMounted, onUpdated, ref } from 'vue'
import { useRect } from '../composables'
import { addUnit } from '../utils'
import { vcPlaceholderProps } from './vc-placeholder'

defineOptions({
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(vcPlaceholderProps)

const instance = getCurrentInstance()
const height = ref(0)

onMounted(() => {
    init()
})

onUpdated(() => {
    init()
})

function init() {
    if (props.disabled || !props.selector)
        return

    useRect(`.${props.selector}`, instance).then((data) => {
        if (!data) {
            return
        }
        height.value = data.height
    })
}
</script>

<template>
    <template v-if="props.disabled">
        <slot />
    </template>
    <template v-else>
        <view
            :class="props.bem('placeholder')"
            :style="{ height: addUnit(height) }"
        >
            <slot />
        </view>
    </template>
</template>

<style lang="scss">
</style>
