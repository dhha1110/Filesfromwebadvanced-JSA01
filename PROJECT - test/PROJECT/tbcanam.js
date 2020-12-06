$(document).ready(function () {
    var monHoc = ["Toán", "Lý", "Hóa", "Sinh", "Văn", "Sử", "Địa", "Anh", "Công nghệ", "GDQP", "GDCD", "Tin"];

    // Bắt đầu code vẽ bảng điểm
    jQuery.each(monHoc, function (i, value) {
        var html = "";

        html += "<tr class='subject'>";
        html += "<td>" + value + "</td>";
        for (i = 1; i <= 17; i++) {
            if (i == 8) {
                html += "<td class='TBHK1'></td>";
            }
            if (i == 16) {
                html += "<td class='TBHK2'></td>";
            }
            if (i == 17) {
                html += "<td class='TBCN'></td>";
            }
            if (i != 8 && i != 16 && i != 17) {
                html += "<td><input></td>";
            }
        }
        html += "</tr>";
        $('#bangdiem').append(html);
    });
    // Kết thúc code vẽ bảng điểm

    // Tính điểm trung bình môn
    $("input").change(function () {
        // Lấy tất cả điểm của cùng một môn
        var danhSachDiem = $(this).parents('.subject').find('input');

        var tongDiemHK1 = 0, heSoHK1 = 0, tbHK1;
        var tongDiemHK2 = 0, heSoHK2 = 0, tbHK2;
        jQuery.each(danhSachDiem, function (i, value) {
            var diem = parseFloat($(this).val());
            // If kiểm tra xem ô điểm đã được nhập vào chưa
            if (!isNaN(diem)) {
                // console.log("Diem thu ",i," = ",diem);
                // Diem HK1
                // Diem mieng 1 - HK1
                if (i == 0 || i == 1 || i == 2 || i == 3) {
                    tongDiemHK1 += diem;
                    heSoHK1++;
                }

                // Diem HS 2 - HK1
                if (i == 4 || i == 5) {
                    tongDiemHK1 += 2 * diem;
                    heSoHK1 += 2;
                }

                // Diem HS 3 - HK1
                if (i == 6) {
                    tongDiemHK1 += 3 * diem;
                    heSoHK1 += 3;
                }

                // Diem HK2
                // Diem HS 1 - HK2
                if (i == 7 || i == 8 || i == 9 || i == 10) {
                    tongDiemHK2 += diem;
                    heSoHK2 += 1
                }

                // Diem HS 2 - HK2
                if (i == 11 || i == 12) {
                    tongDiemHK2 += 2 * diem;
                    heSoHK2 += 2
                }

                // Diem HS 3 - HK12
                if (i == 13) {
                    tongDiemHK2 += 3 * diem;
                    heSoHK2 += 3
                }

            }

        });

        tbHK1 = tongDiemHK1 / heSoHK1;
        tbHK2 = tongDiemHK2 / heSoHK2;
        tbCN = (tbHK1 + tbHK2 * 2) / 3;

        var tbhk1HTML = $(this).parents('.subject').find('.TBHK1');
        tbhk1HTML.text(tbHK1.toFixed(2));
        var tbhk2HTML = $(this).parents('.subject').find('.TBHK2');
        if (!isNaN(tbHK2)) {
            tbhk2HTML.text(tbHK2.toFixed(2));
        }
        var tbcnHTML = $(this).parents('.subject').find('.TBCN');
        if (!isNaN(tbCN)) {
            tbcnHTML.text(tbCN.toFixed(2));
        }
        

        // var tbcnHTML = $(this).parents('.subject').find('.TBCN');
        // tbcnHTML.text(tbcn.toFixed(2));
        /*
        var tbcn = $(".TBCN");
        jQuery.each(tbcn, function (i, value) {
            var diem = parseFloat($(this).val());
            console.log($(this).val());
        });
        */
    });
});