$(document).ready(function() {
	let value = 0;
	let countClicked = 0;
	let clicked = false;

	function getPosition(position) {
		if (position <= 30) {
			alert('CHÚC MỪNG BẠN TRÚNG ĐƯỢC BAO NUÔI DŨNG.');
		} else if (position <= 90) {
			alert('CHÚC MỪNG BẠN TRÚNG ĐƯỢC MỘT THẺ CÀO 200K');
		} else if (position <= 150) {
			alert('CHÚC BẠN MAY MẮN LẦN SAU');
		} else if (position <= 210) {
			alert('CHÚC MỪNG BẠN TRÚNG ĐƯỢC MỘT CHUYẾN DU LỊCH VŨNG TÀU');
		} else if (position <= 270) {
			alert('CHÚC MỪNG BẠN TRÚNG ĐƯỢC MỘT THẺ CÀO 100K');
		} else if (position <= 330) {
			alert('CHÚC MỪNG BẠN TRÚNG ĐƯỢC MỘT CHUYẾN DU LỊCH MIỀN TÂY');
		} else {
			alert('CHÚC MỪNG BẠN TRÚNG ĐƯỢC BAO NUÔI DŨNG.');
		}
		$('.popup').removeClass('active');
		$('.congratulation').fadeIn();
		clicked = false;
		countClicked = 0;
	}

	$('.wheel-button').click(function() {
		if (clicked == true) {
			countClicked++;
			if (countClicked <= 2) {
				$('.popup__note').text("NGỪNG PHÁ ĐI CÔ NƯƠNG!");
			} else if (countClicked <= 4)
				$('.popup__note').text("LÌ QUÁ NGHEN!");
			else
				$('.popup__note').text("TÍNH PHÁ BANG NÚT CỦA TÔI, HAY GÌ!");
			if (!$('.popup').hasClass('active'))
				$('.popup').addClass('active');
		} else {
			let random = Math.floor((Math.random() * 360) + 720);
			value += random;
			$(".wheel-inner").css("transform", `rotate(${value}deg)`);
			setTimeout(() => {
				getPosition(value % 360);
			}, 5000);
		}
		clicked = true;
	})
})