<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { addUnit, createNamespace, getSystemInfoSync } from '../utils'
import VcPlaceholder from '../vc-placeholder/vc-placeholder.vue'
import { fixedProps } from './fixed'

const { name, bem } = createNamespace('fixed')

export default defineComponent({
    name,
    components: { VcPlaceholder },
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
    props: fixedProps,
    slots: ['default'],
    setup(props) {
        const styles = computed(() => {
            const { windowTop, windowBottom } = getSystemInfoSync()

            return {
                zIndex: props.zIndex,
                [`${props.position}`]: `calc(${addUnit(props.offset)} + ${addUnit(props.position === 'top' ? windowTop : windowBottom)})`,
            }
        })

        return {
            ...toRefs(props),
            bem,
            styles,
        }
    },
})
</script>

<template>
    <template v-if="disabled">
        <slot />
    </template>
    <template v-else>
        <view
            :class="bem()"
            :style="styles"
        >
            <VcPlaceholder :disabled="!placeholder">
                <slot />
            </VcPlaceholder>
        </view>
    </template>
</template>

<style lang="scss">
@import './index';
</style>
