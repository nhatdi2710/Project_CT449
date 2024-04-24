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
</style>
<template>    
    <table class="table">
        <thead>
            <tr>
                <th>Tên Sách - Tác Giả</th>
                <th class="text-center">Giá</th>
                <th class="text-center">SL</th>
                <th class="text-center">Năm Xuất Bản</th>
                <th class="text-center">Nhà Xuất Bản</th>
                <th class="text-center" v-if="this.$route.path.split('/')[2] != 'muonsach'">Chọn</th>
            </tr>
        </thead>

        <tbody>
            <tr 
                v-for="(book, index) in books"
                :key="book._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >
                <td>{{ book.tensach }} - {{ book.tacgia }}</td>
                <td class="text-center">{{ book.dongia }}</td>
                <td class="text-center">{{ book.soquyen }}</td>
                <td class="text-center">{{ book.namxuatban }}</td>
                <td class="text-center">{{ book.manxb }}</td>
                <td class="text-center" v-if="this.$route.path.split('/')[2] != 'muonsach'"><input class="form-check-input check-all" type="checkbox" name="sachchon" v-bind:value="book._id"></td>
            </tr>
        </tbody>
    </table>
        
    <div class="tools" v-if="this.$route.path.split('/')[2] != 'muonsach'"><p @click="selectAll"><b>Chọn tất cả</b></p> | <p @click="removeAll">Bỏ chọn</p></div>
</template>

<script>
export default {
    props: {
        books: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
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