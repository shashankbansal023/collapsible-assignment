$(document).ready(()=>{

	$('.sub-head').hide();

	$('.head').eq(0).click(()=>{
		$('.sub-head').eq(0).show()
		$('.sub-head').eq(1).hide();
		$('.sub-head').eq(2).hide();
	})

	$('.head').eq(1).click(()=>{
		$('.sub-head').eq(1).show()
		$('.sub-head').eq(0).hide();
		$('.sub-head').eq(2).hide();
	})

	$('.head').eq(2).click(()=>{
		$('.sub-head').eq(2).show()
		$('.sub-head').eq(0).hide();
		$('.sub-head').eq(1).hide();
	})

})