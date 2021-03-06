Vue.component("my-awesome-list",{
    template:'<ul>\n' +
    '  <slot name="item"\n' +
    '    v-for="item in items"\n' +
    '    :text="item.text">\n' +
    '    <!-- 这里写入备用内容 -->\n' +
    '  </slot>\n' +
    '</ul>',
    props:['items']
});
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        todos: [
            {
                text: "第一条消息"
            },
            {
                text: "第二条消息"
            },
            {
                text: "第三条消息"
            }],
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '奶酪'},
            {id: 2, text: '随便其它什么人吃的东西'}
        ],
        items: {
            name: 'czp',
            age: 20
        },
        lists:['第一个','第二个','第三个'],
        test:{
            a:'gg'
        },
        checkedNames:[]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        cc: function () {
            alert('haha')
        }
    },
    computed: {
        fuck: function () {
            return Date.now()
        }
    }
})
