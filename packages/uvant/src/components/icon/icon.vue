<script lang="ts" setup>
import { computed, normalizeStyle } from 'vue'
import { addUnit, getSizeStyle, isImageUrl } from '../../utils'
import VanImage from '../image/image.vue'
import VcBadge from '../vc-badge/vc-badge.vue'
import { iconBem as bem, iconEmits, iconProps, iconName as name } from './icon'

defineOptions({
    name,
    options: {
        virtualHost: true,
        addGlobalClass: true,
        styleIsolation: 'shared',
    },
})

const props = defineProps(iconProps)

const emit = defineEmits(iconEmits)

const isImage = computed(() => isImageUrl(props.name))

const classes = computed(() => ({
    [`${props.classPrefix}`]: props.classPrefix,
    [`${props.classPrefix}-${props.name}`]: !isImage.value && !!props.name,
}))

const styles = computed(() => ({
    color: props.color || '',
    fontSize: props.size ? addUnit(props.size) : '',
}))

function onClick(evt: MouseEvent) {
    emit('click', evt)
}
</script>

<template>
    <VcBadge
        :dot="props.dot"
        :badge="props.badge"
        :badge-props="props.badgeProps"
    >
        <view
            :class="classes"
            :style="normalizeStyle([styles, props.customStyle])"
            @click="onClick"
        >
            <template v-if="isImage">
                <view
                    :class="bem('image')"
                    :style="getSizeStyle(props.size)"
                >
                    <VanImage
                        :src="props.name"
                        :height="props.size"
                        :show-loading="false"
                        :show-error="false"
                    />
                </view>
            </template>
        </view>
    </VcBadge>
</template>

<style lang="scss">
@import './index';
</style>
