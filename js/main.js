$(function () {
	//移到图片上时
	var me_tag_ids = ["#p1", "#p2", "#p3"];
	var me_tag_details = ["My repository", "My blog", "My cloud disk"];
	for (let i = 0; i < me_tag_ids.length; i++) {
		$(me_tag_ids[i]).hover(
			function () {
				$("#detail").html(me_tag_details[i]);
			},
			function () {
				$("#detail").html("These are my websites")
			}
		)
	}
});