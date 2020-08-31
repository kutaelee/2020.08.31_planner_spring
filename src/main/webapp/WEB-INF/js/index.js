$(document).ready(() => {
    $(document).on('click', '.month-btn', (e) => {
        let id = e.target.id;
        let currentMonth = parseInt($('#month').text().split('월')[0]);
        if (id == 'right-month-btn') {
            if (currentMonth < 12) {
                currentMonth++;
            } else {
                currentMonth = 1;
            }
        } else {
            if (currentMonth > 1) {
                currentMonth--;
            } else {
                currentMonth = 12;
            }
        }
        $('#month').text(currentMonth + '월');
    });
});
