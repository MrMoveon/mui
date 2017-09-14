export default{
    methods: {
        success (msg) {
            this.$Toast({
                msg: msg,
                position: 'top',
                duration: 1000,
                icon: 'yuanxingxuanzhong-o',
                styles: {
                    width: '100%',
                    maxWidth: '100%',
                    background: '#31c27c',
                    top: '0px',
                    height: '1.173rem',
                    lineHeight: '1.173rem',
                    textAlign: 'left',
                    textIndent: '0.266rem',
                    display: 'flex'
                }
            })
        }
    }
}