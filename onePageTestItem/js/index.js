"use strict";

new Vue({
    el: '#test',
    data() {
        return {
            dataArray: null,
            arrayLike: [],
            count: 0,
        };
    },
    methods: {
        likesCount: function (like) {
            let objektLike = { id: "", quantity: "" };
            objektLike.id = this.count + 1;
            objektLike.quantity = like;
            this.arrayLike.push(objektLike);
        },
    },

    mounted() {
        axios.get("js/data.JSON").then(response => (this.dataArray = response.data));
    },
});