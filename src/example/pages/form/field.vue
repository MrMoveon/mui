<template>
    <mui-page>
        <mui-header mode='light' fixed title="Field 输入框">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    基础
                </div>
            </mui-wing-blank>
           
            <mui-cell-group>
                <mui-field v-model="base"  type="text" placeholder='请输入用户名'></mui-field>
            </mui-cell-group>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    清除及必填
                </div>
            </mui-wing-blank>
           
            <mui-cell-group>
                <mui-field v-model="username" label="用户名" type="text" placeholder='请输入用户名' clear required></mui-field>
                <mui-field v-model="paswword" label="密码" type="password" placeholder='请输入密码' clear required></mui-field>
            </mui-cell-group>

            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    禁用输入
                </div>
            </mui-wing-blank>

            <mui-cell-group>
                <mui-field v-model="disabled" label="用户名" type="text"  disabled></mui-field>
            </mui-cell-group>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    自适应高度
                </div>
            </mui-wing-blank>

            <mui-cell-group>
                <mui-field v-model="message" label="评价"  type="textarea" placeholder='请给我们留言吧' :rows='1' autosize></mui-field>
            </mui-cell-group>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import { Toast } from '@/components'
export default {
    name: 'field',
    mixins: [back],
    data () {
        return {
            base: '',
            username: '',
            paswword: '',
            disabled: '已禁用输入',
            message: ''
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
