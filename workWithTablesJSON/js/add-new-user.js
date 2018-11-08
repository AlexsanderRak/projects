"use strict";

var mixin = {
    data: function () {
        return {

            users: users2,
            massTh: [{ title: "First Name", key: "firstName" }, { title: "Last Name", key: "lastName" }, { title: "E-mail", key: "email" }, "delete"],
        }
    }
}

Vue.component("add-new-user", {
    mixins: [mixin],
    template: `<div class="col-md-12">
    <div class="addUser">
        <form>
            <input v-model="firstName" v-on:keypress="noNumber(event)" type="text" placeholder="First name" id="firstName" :title="firstNameMassege"required >
            <input v-model="lastName" v-on:keypress="noNumber(event)" type="text" placeholder="Last name" id="lastName" :title="lastNameMassege"required>
            <input v-model="email" type="email" v-bind:pattern="r" placeholder="E-mail" id="email" :title="emailMassege" required pattern="r">
            <button @click="addNewUser">{{ textBt }}</button>
        </form>
    </div>
</div>`,

    data: function () {
        return {
            isActive: false,
            firstName: "",
            lastName: "",
            email: "",
            firstNameMassege: "write your First name",
            lastNameMassege: "write your Last name",
            emailMassege: "write your E-mail",
            textBt: "Add new user",
            r:null,


        }
    },

    methods: {

        addNewUser: function () {

            let istrue = this.validation();

            if (istrue) {
                this.users.push({ firstName: this.firstName, lastName: this.lastName, email: this.email });
                this.firstName = "";
                this.lastName = "";
                this.email = "";
            }
        },

        validation: function () {
            this.r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
            let result = true;

            if (!this.firstName) {
                result = false;
            }

            if (!this.lastName) {
                result = false;
            }

            if (!this.r.test(this.email)) {
                result = false;
            }
            return result;
        },

        noNumber: function (evt) {
            let regex = new RegExp("^[a-zA-Zа-яА-Я ]+$");
            let key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);

            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },

    },

})


