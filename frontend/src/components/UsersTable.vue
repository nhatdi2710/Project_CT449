<style>
    .tools {
        display: flex;
        justify-content: space-around;
        width: 200px;
    }

    .tools p:hover {
        cursor: pointer;
        opacity: 0.75;
    }

    .pointer:hover {
        cursor: pointer;
    }
</style>
<template>    
    <table class="table">
        <thead>
            <tr>
                <th class="text-center">Mã Độc Giả</th>
                <th>Họ Tên</th>
                <th>Số Điện Thoại</th>
                <th class="text-center">Thao tác</th>
            </tr>
        </thead>

        <tbody>
            <tr 
                v-for="(user, index) in users"
                :key="user._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >
                <td class="text-center">{{ user.madocgia }}</td>
                <td>{{ user.holot }} {{ user.ten }}</td>
                <td>{{ user.dienthoai }}</td>
                <td class="text-center pointer">
                    <p class="mb-0" v-if='user.chan == "khong"'>Chặn</p>
                    <p class="mb-0" v-else>Gỡ</p>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        users: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    methods: {
        selectAll() {
            const selected = "check-all";
            for (var i = 0; i < document.getElementsByClassName(selected).length; i++) {
                document.getElementsByClassName(selected)[i].checked = true;
            }
        },
        removeAll() {
            const selected = "check-all";
            for (var i = 0; i < document.getElementsByClassName(selected).length; i++) {
                document.getElementsByClassName(selected)[i].checked = false;
            }
        }
    }
};

</script>