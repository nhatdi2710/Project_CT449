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
                <th class="text-center">Mã NXB</th>
                <th>Tên NXB</th>
                <th>Địa Chỉ</th>
                <th class="text-center">Chọn</th>
            </tr>
        </thead>

        <tbody>
            <tr 
                v-for="(pc, index) in pcs"
                :key="pc._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            >
                <td class="text-center">{{ pc.manxb }}</td>
                <td>{{ pc.tennxb }}</td>
                <td>{{ pc.diachi }}</td>
                <td class="text-center"><input class="form-check-input check-all" type="checkbox" name="nxbchon" v-model="pc._id"></td>
            </tr>
        </tbody>
    </table>
        
    <div class="tools" v-if="$route.path == '/admin/pcomp'"><p @click="selectAll"><b>Chọn tất cả</b></p> | <p @click="removeAll">Bỏ chọn</p></div>
</template>

<script>
export default {
    props: {
        pcs: { type: Array, default: [] },
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