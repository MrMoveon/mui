
import ToastComponent from './src/Toast.vue'
let tid = 1
export default {
    install (Vue, options) {
        const ToastConstructor = Vue.extend(ToastComponent)
        let ToastInstance
        Vue.prototype.$Toast = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
            ToastInstance = new ToastConstructor().$mount(document.createElement('div'))
            let id = 'toast-' + tid++
            ToastInstance.msg = typeof options === 'string' ? options : options.msg              // 设置toast组件props的msg
            ToastInstance.position = options.position || 'middle'                                // 设置toast组件props的position
            ToastInstance.duration = options.duration || 1500                                    // 设置toast组件props的duration
            ToastInstance.color = options.color || 'rgba(0,0,0,0.6)'                             // 设置toast组件props的color
            ToastInstance.icon = options.icon || ''                                              // 设置toast组件props的icon
            ToastInstance.id = id                                                                // 设置toast组件id
            ToastInstance.tIndex = tid                                                           // 设置toast组件z-index
            ToastInstance.styles = options.styles
            document.body.appendChild(ToastInstance.$el)
            Vue.nextTick(() => {
                ToastInstance.visible = true
            })
        }
        Vue.prototype.$Toast['close'] = function (options) {
            if (!ToastInstance) return
            ToastInstance.visible = false
        }
    }
}
