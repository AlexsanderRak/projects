"use strict";

Vue.component("work-with-user", {
    mixins: [mixin],
    template: `
    <div>
<table>
    <thead>
        <tr>
            <th v-for="key in massTh" @click="sortUser(key)">
                {{ key.title }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in users">
            <td v-for="item in user">{{ item }}</td>
            <td>
                <button @click="deleteUser(user)">delete</button>
            </td>
        </tr>
    </tbody>
    </table>
</div>`,
    methods: {

        deleteUser: function (item) {

            this.users.splice(this.users.indexOf(item), 1);

        },

        sortUser: function (key) {

            for (let i = 0; i < this.massTh.length; i++) {
                var el = this.massTh[i];

                if (key === el) {
                    this.users.sort(function (obj1, obj2) {
                        // Сортировка по возрастанию

                        if (obj1[el.key] < obj2[el.key]) return -1;
                        if (obj1[el.key] > obj2[el.key]) return 1;
                        return 0;
                    });
                }
            }
        },

    },

})
