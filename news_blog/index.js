"use strict";

new Vue({
    el: "#app",
    data: {
        news: news2,
        toggle: "Write",
        write: "Write",
        post: "Post",
        newComment: "",
        disabledInput:true,


    },

    methods: {
        onClick: function (newsITem) {

            for (let i = 0; i < this.news.length; i++) {
                let item = this.news[i];
                item.display = false;
            }
            if (newsITem.display) {
                newsITem.display = false;
            } else {
                newsITem.display = true;
            }
        },
        onChange: function (newsITem, event) {
            if (this.newComment) {

                if (this.toggle === this.post) {
                    newsITem.comment.push(this.newComment);
                    this.newComment = "";
                    this.toggle = this.write;
                    this.disabledInput = true;

                }
            }
              
        },
        onKeyup: function(){
            this.disabledInput = false;
        }

    },

})
