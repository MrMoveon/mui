<template>
    <mui-page>
        <mui-header mode='light' fixed title="Spinner 加载器">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
             <mui-cell-group>
                <mui-cell title="vue+mui"></mui-cell>
             </mui-cell-group>
            <mui-wing-blank>
				<div class="sub-title">
					图标
				</div>
			</mui-wing-blank>

            <mui-cell-group>
                <mui-cell title="vue+mui" icon='home' iconColor="#e1278d"></mui-cell>
                <mui-cell title="vue+mui" img="../../../assets/logo.png"></mui-cell>
            </mui-cell-group>
            <mui-wing-blank>
				<div class="sub-title">
					右侧值
				</div>
			</mui-wing-blank>

            <mui-cell-group>
                <mui-cell title="vue+mui"  value="20"></mui-cell>
            </mui-cell-group>

            <mui-wing-blank>
				<div class="sub-title">
					组合Badge组件
				</div>
			</mui-wing-blank>

            <mui-cell-group>
                <mui-cell title="Dot Badge"><mui-badge slot="extra" type="danger" size="normal">12</mui-badge></mui-cell>
                <mui-cell>
                    <template slot="title">
                        <span class="title">上新啦</span>
                        <mui-badge slot="extra" type="danger" size="normal">new</mui-badge>
                    </template>
                </mui-cell>
                <mui-cell>
                    <template slot="title">
                        <span class="title">上新啦</span>
                        <mui-badge slot="extra" type="dot" size="normal"></mui-badge>
                    </template>
                </mui-cell>
            </mui-cell-group>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'button',
    mixins: [back]
}
</script>

<style>

</style>
