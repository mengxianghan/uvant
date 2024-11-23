<script lang="ts" setup>
import { computed } from 'vue'
import { isDef } from '../../utils'
import VanBadge from '../badge/badge.vue'
import { vcBadgeProps } from './vc-badge'

defineOptions({
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(vcBadgeProps)

const disabled = computed(() => !props.dot || !isDef(props.badge))
</script>

<template>
    <template v-if="!disabled">
        <VanBadge
            v-bind="props.badgeProps"
            :dot="props.dot"
            :content="props.badge"
        >
            <slot />
        </VanBadge>
    </template>
    <template v-else>
        <slot />
    </template>
</template>

<style lang="scss"></style>
