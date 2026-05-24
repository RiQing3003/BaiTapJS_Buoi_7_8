function getArray() {
        return document.getElementById("arrayInput")
            .value
            .split(",")
            .map(Number);
    }

    function showResult(text) {
        document.getElementById("result").innerHTML = text;
    }
    /**
     * Bài 1: Tổng các số dương trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Duyệt mảng, nếu phần tử > 0 thì cộng vào tổng
     *     Bước 3: Hiển thị kết quả
     */
    
    function tongSoDuong() {
        let arr = getArray();

        let sum = 0;

        for (let x of arr) {
            if (x > 0) {
                sum += x;
            }
        }

        showResult("Tổng số dương: " + sum);
    }

    /**
     * Bài 2: Đếm số dương trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Duyệt mảng, nếu phần tử > 0 thì tăng biến đếm lên 1
     *     Bước 3: Hiển thị kết quả
     */
    function demSoDuong() {
        let arr = getArray();

        let count = 0;

        for (let x of arr) {
            if (x > 0) {
                count++;
            }
        }

        showResult("Có " + count + " số dương");
    }

   /**
     * Bài 3: Tìm số nhỏ nhất trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Duyệt mảng, tìm phần tử nhỏ nhất
     *     Bước 3: Hiển thị kết quả
     */
    function timSoNhoNhat() {
        let arr = getArray();

        let min = Math.min(...arr);
        showResult("Số nhỏ nhất: " + min);
    }

    /**
     * Bài 4: Tìm số dương nhỏ nhất trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Lọc ra các số dương
     *     Bước 3: Tìm số nhỏ nhất trong các số dương
     *     Bước 4: Hiển thị kết quả
     */
    function timSoDuongNhoNhat() {
        let arr = getArray();

        let positive = arr.filter(x => x > 0);

        if (positive.length === 0) {
            showResult("Không có số dương");
            return;
        }

        let min = Math.min(...positive);

        showResult("Số dương nhỏ nhất: " + min);
    }

    /**
     * Bài 5: Tìm số chẵn cuối cùng trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Duyệt mảng từ phải sang trái, tìm phần tử chẵn đầu tiên
     *     Bước 3: Hiển thị kết quả
     */
    function timSoChanCuoi() {
        let arr = getArray();

        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] % 2 === 0) {
                showResult("Số chẵn cuối cùng: " + arr[i]);
                return;
            }
        }

        showResult("Không có số chẵn");
    }

    /**
     * Bài 6: Đổi chỗ 2 phần tử trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Lấy các vị trí cần đổi chỗ
     *     Bước 3: Tạo biến tạm để đổi chỗ
     *     Bước 4: Hiển thị kết quả
     */
    function doiCho() {

    let arr = getArray();

    // Lấy vị trí cần đổi
    let vt1 = Number(document.getElementById("index1").value) - 1;
    let vt2 = Number(document.getElementById("index2").value) - 1;

    // Biến tạm
    let temp = arr[vt1];

    // Đổi chỗ
    arr[vt1] = arr[vt2];
    arr[vt2] = temp;

    showResult("Mảng sau khi đổi chỗ: " + arr.join(", "));
}

    /**
     * Bài 7: Sắp xếp mảng tăng dần
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Sắp xếp mảng tăng dần
     *     Bước 3: Hiển thị kết quả
     */
    function sapXepTangDan() {

    let arr = getArray();

    // Sắp xếp tăng dần
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            // Nếu phần tử trước lớn hơn phần tử sau
            if (arr[i] > arr[j]) {

                // Hoán đổi vị trí
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    showResult("Mảng tăng dần: " + arr.join(", "));
}

    /**
     * Bài 8: Kiểm tra số nguyên tố
     *     Bước 1: Lấy số từ input
     *     Bước 2: Kiểm tra xem số đó có phải là số nguyên tố không
     *     Bước 3: Hiển thị kết quả
     */
    function laSoNguyenTo(n) {

        if (n < 2) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    function timSoNguyenToDauTien() {

        let arr = getArray();

        for (let x of arr) {
            if (laSoNguyenTo(x)) {
                showResult("Số nguyên tố đầu tiên: " + x);
                return;
            }
        }

        showResult("-1");
    }

    /**
     * Bài 9: Đếm số nguyên trong mảng
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Duyệt mảng, đếm số nguyên
     *     Bước 3: Hiển thị kết quả
     */
    function demSoNguyen() {

        let arr = getArray();

        let count = 0;

        for (let x of arr) {
            if (Number.isInteger(x)) {
                count++;
            }
        }

        showResult("Có " + count + " số nguyên");
    }

    /**
     * Bài 10: So sánh số dương và số âm
     *     Bước 1: Lấy mảng từ input
     *     Bước 2: Đếm số dương và số âm
     *     Bước 3: So sánh và hiển thị kết quả
     */
    function soSanhDuongAm() {

        let arr = getArray();

        let duong = 0;
        let am = 0;

        for (let x of arr) {
            if (x > 0) duong++;
            else if (x < 0) am++;
        }

        if (duong > am) {
            showResult("Số dương nhiều hơn");
        }
        else if (am > duong) {
            showResult("Số âm nhiều hơn");
        }
        else {
            showResult("Số dương và số âm bằng nhau");
        }
    }