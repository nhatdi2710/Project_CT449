<style>

    .loan-guide {
        width: 55%;
        text-align: center;
    }

    .loan-info {
        justify-content: space-around;
    }

</style>

<template>
    <h2>Sách đã chọn</h2>

    <center>
        <p class="mt-4 loan-guide">Để Mượn Sách, bạn cần điền vào thông tin bên dưới và gửi yêu cầu mượn cho Nhân Viên của Libra. Sách sẽ được gửi về địa chỉ của bạn sau khi được nhân viên duyệt.</p>
    </center>

    <div class="row mt-4 loan-info">
        <div class="col-4">
            <label for="ngaymuon" class="form-label">Ngày mượn:</label>
            <input type="date" name="ngaymuon" id="ngaymuon" class="form-control">
        </div>
        <div class="col-4">
            <label for="ngayhentra" class="form-label">Ngày hẹn trả:</label>
            <input type="date" name="ngayhentra" id="ngayhentra" class="form-control">
        </div>
    </div>

    <div class="mt-4 text-center">
        <p>Số điện thoại: 0901014368</p>
        <p>Địa chỉ: tp Cần Thơ</p>
    </div>
</template>