$(document).ready(function() {
			var colors = ["#FFD5CB", "#FFC879", "#DDFCFC", "#F8DDFC", "#BFEE8B", "FFE3EA", "FF907C"];
			var rand = Math.floor(Math.random() * colors.length);
			$('body').css("background-color", colors[rand]);
});
