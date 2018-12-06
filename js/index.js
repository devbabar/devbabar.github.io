$(document).ready(function(){
    
  //   $(window).on('scroll', fixHeader);
		// var header = $('nav');
		// var headerOffset = header.offset().top;
		// function fixHeader(evt){
		// 	var currentScroll = $(window).scrollTop()
		// 	console.log(headerOffset, currentScroll);
		// 	if(headerOffset < currentScroll){

		// 		// header.addClass('navbar-fixed-top').css({"right":"10px","left":"10px"});
		// 		header.addClass('navbar-fixed-top');
		// 		$(".about").css({"margin-top":"88px"});
		// 	}
		// 	else {
		// 	 header.removeClass('navbar-fixed-top');
		// 	 $(".about").css({"margin-top":"0px"});
		// 	}
		// }


  $(window).on('scroll', fixHeader);
	var header = $('nav');
	var headerOffset = header.offset().top;
	function fixHeader(evt){
		var currentScroll = $(window).scrollTop()
		// console.log(headerOffset, currentScroll);
		if(headerOffset < currentScroll){

			// header.addClass('navbar-fixed-top').css({"right":"10px","left":"10px"});
			header.addClass('navbar-fixed-top');
			$(".about, .project, .education, .contact").css({"margin-top":"88px"});
		}
		else {
		 header.removeClass('navbar-fixed-top');
		 $(".about, .project").css({"margin-top":"0px"});
		}
	}

	// ==========calculate screen width============
	// var width = $(window).width();
	// $("#mywidth").text(width);
	

	// ========Navbar color ===========
	$("ul.nav a").click(function(){
		$("ul.nav a").css({"background-color": "transparent","color":"#777"});
		$("ul.nav a:focus").css({"background-color": "transparent","color":"#E31B6D"});
	});

	// ========= on click button goes to certain div ========
	// $("#about-btn, #project-btn").click(function() {
 //    $('html,body').animate({
 //        scrollTop: $(".about, .project").offset().top -88},
 //        'slow');
	// });


	var aboutSec = $(".about");
	var projectSec = $(".project");
	var eduSec = $(".education");
	var conSec = $(".contact");

	function navigateSection(section){
		$('html,body').animate({
        scrollTop: $(section).offset().top - 80},
        'slow');
	};

	$("#about-btn, #project-btn, #edu-btn, #con-btn").click(function() {
		var id = $(this).attr("id");
		if (id=="about-btn"){
			navigateSection(aboutSec);
		} else if (id=="project-btn"){
			navigateSection(projectSec);
		} else if (id=="edu-btn"){
			navigateSection(eduSec);
		} else if (id=="con-btn"){
			navigateSection(conSec);
		}
	});

	// ================= Progress Bar ====================
	 // var progress = setInterval(function() {
  //       var $bar = $('.bar');

  //       if ($bar.width()>=300) {
  //           clearInterval(progress);
  //           $('.progress').removeClass('active');
  //       } else {
  //           $bar.width($bar.width()+40).css({"background-color":"red"});

  //       }
  //       $bar.text($bar.width()/4 + "%");
  //   }, 100);



// -----------------final start
	// function progressBar(bar,percentage,val,divide){
	// 	var progress = setInterval(function() {
	// 		// console.log(bar.width());
	//         if (bar.width()>=percentage) {
	//             clearInterval(progress);
	//             $('.progress').removeClass('active');
	//         } else {
	//             bar.width(bar.width()+val).css({"background-color":"red"});
	//         }
	//         bar.text(bar.width()/divide + "%").css({"font-size":"25px","height":"100%"});
 //    	}, 100);
	// 	};

	// // console.log($(window).width());
	// var papa = $('.bar');
	// var mama = $(".mama");
	// progressBar(papa,550,55,5.5);
	// progressBar(mama,550,50,275);
// -----------------final end
	// ==========test start ==========
	// function progressBar(bar,percentage,val,divide){
	// 	var progress = setInterval(function() {
	// 		// console.log(bar.width());
	//         if (bar.width()>=percentage) {
	//             clearInterval(progress);
	//             $('.progress').removeClass('active');
	//         } else {
	//             bar.width(bar.width()+val).css({"background-color":"red"});
	//         }
	//         bar.text(bar.width()/divide + "%").css({"font-size":"25px","height":"100%"});
 //    	}, 100);
	// 	};

	// // console.log($(window).width());
	// var papa = $('.bar');
	// var mama = $(".mama");
	// // // progressBar(papa,550,55,5.5);
	// // progressBar(mama,400,40,5);




	// var $windowSize = $(window).width();
			
	// if ($windowSize >= 1796){
	// 	progressBar(papa,666,34,6.8);
	// } else if ($windowSize >= 1321 && $windowSize <= 1795){
	// 	progressBar(papa,500,50,5);
	// } else if ($windowSize >= 1069 && $windowSize <= 1322){
	// 	progressBar(papa,400,40,4);
	// } else if ($windowSize >= 1024 && $windowSize <= 1068){
	// 	progressBar(papa,400,40,4);
	// } else if ($windowSize >= 991 && $windowSize <= 1023){
	// 	progressBar(papa,450,45,4.5);
	// } else if ($windowSize >= 768 && $windowSize <= 991){
	// 	progressBar(papa,450,45,4.5);
	// } 
	// ==========test ends ==========

	function progress(percent, $element) {
	    var progressBarWidth = percent * $element.width() / 100;
	    $element.find('div').animate({ width: progressBarWidth }, 1000).html(percent + "% ");
	}


	// console.log($('#progressBar1').width());
	// progress(90, $('#progressBar1'));
	// progress(89, $('#progressBar2'));
	// progress(35, $('#progressBar3'));


	// $.fn.revealOnScroll = function(direction, speed){
	// 	return this.each(function(){

	// 		// console.log($(this));
	// 		// var objectOffset = $(this).offset();
	// 		// var objectOffsetTop = objectOffset.top + 400;
	// 		var win = $(window).height()/2;
	// 		// console.log("offset",objectOffsetTop);

	// 		// we need to run this code only once we scroll
	// 		// Do NOT use hidden class if your are using Bootstrap, name something else like "closed"
	// 		if (!$(this).hasClass("closed")){

	// 			// Run the code by checking it's direction
	// 			if (direction == "right"){
	// 				$(this).css({
	// 					"opacity" : 0,
	// 					"right"	  : "700px",
	// 					"position": "relative"
	// 				});
	// 			} else if (direction == "left"){
	// 				$(this).css({
	// 					"opacity" : 0,
	// 					"right"	  : "-700px",
	// 					"position": "relative"
	// 				});
	// 			} else {
	// 				$(this).css({
	// 					"opacity" : 0						
	// 				});
	// 			}

	// 			$(this).addClass("closed");
	// 		} //------checking direction ends
			
	// 		// we don't want the code to be keep running after animation is completed
	// 		if(!$(this).hasClass("animation-complete")){
	// 			// if(windowScrollPositionBottom > objectOffsetTop){
	// 			if(win === win){
	// 				$(this).animate({"opacity":1, "right":0}, speed).addClass("animation-complete");
	// 			}
	// 		}
	// 	});

	// }; //function ends

		$.fn.revealOnScroll = function(direction, speed){
		return this.each(function(){

			// console.log($(this));
			// var objectOffset = $(this).offset();
			// var objectOffsetTop = objectOffset.top + 400;
			var win = $(window).height()/2;
			// console.log("offset",objectOffsetTop);

			// we need to run this code only once we scroll
			// Do NOT use hidden class if your are using Bootstrap, name something else like "closed"
			if (!$(this).hasClass("closed")){

				// Run the code by checking it's direction
				if (direction == "right"){
					$(this).css({
						"opacity" : 0,
						"right"	  : "700px",
						"position": "relative"
					});
				} else if (direction == "left"){
					$(this).css({
						"opacity" : 0,
						"right"	  : "-700px",
						"position": "relative"
					});
				} else if (direction == "visible"){
					$(this).css({
						"opacity" : 0,
						// "top"	  : "700px",
						"position": "relative"
					});
				} else {
					$(this).css({
						"opacity" : 0						
					});
				}

				$(this).addClass("closed");
			} //------checking direction ends
			
			// we don't want the code to be keep running after animation is completed
			if(!$(this).hasClass("animation-complete")){
				// if(windowScrollPositionBottom > objectOffsetTop){
				if(win === win){
					$(this).animate({"opacity":1, "right":0}, speed).addClass("animation-complete");
				}
			}
		});

	}; //function ends

	var fadeOutOnScroll = function(icons){
		(icons).each(function(i) {
			if (!$(this).hasClass("closed")){

				// $(this).delay(500*(i+1)).fadeIn(1000); //Uses the each methods index+1 to create a multiplier on the delay
				// $(this).css("visibility","visible").hide().delay(500*(i+1)).fadeIn(1000);
				$(this).css("opacity",0).delay(500*(i+1)).animate({opacity:1},1000);

				$(this).addClass("closed");
			}
		});
	};

	// var icons = $('.icons');
	// $(window).scroll(function(){
	// 	var win = $(window).height()/2;
	// 	console.log("window",win);

	// 	var iconsFromTop = $(".about-1-icons").offset().top - $(window).scrollTop();
	// 	var progressBarFromTop = $("#progress-bar-section").offset().top - $(window).scrollTop();
	// 	console.log("ele from top",iconsFromTop);

	// 	if (iconsFromTop <= win +100 ){
	// 		fadeOutOnScroll(icons);
	// 	}
	// 	if (progressBarFromTop <= win +100 && (!$(this).hasClass("animation-complete")) ){
	// 		progress(90, $('#progressBar1'));
	// 		progress(89, $('#progressBar2'));
	// 		progress(35, $('#progressBar3'));
	// 	}

	// });
// ==================final start=======================
	// var icons = $('.icons');
	// $(window).scroll(function(){
	// 	var win = $(window).height()/2;
	// 	console.log("window",win);

	// 	var xx= $(".about-2").offset().top - $(window).scrollTop();
	// 	var iconsFromTop = $(".about-1-icons").offset().top - $(window).scrollTop();
	// 	var progressBarFromTop = $("#progress-bar-section").offset().top - $(window).scrollTop();
	// 	// console.log("ele from top",progressBarFromTop);

	// 	if (iconsFromTop <= win +100 ){
	// 		fadeOutOnScroll(icons);
	// 	}

	// 	if (progressBarFromTop <= win +100 || xx <= win +100 ){
				
	// 		$(".about-2").revealOnScroll("right", 1000);
	// 		$("#progress-bar-section").revealOnScroll("left",1000);
			
	// 			progress(90, $('#progressBar1'));
	// 			progress(89, $('#progressBar2'));
	// 			progress(35, $('#progressBar3'));
	// 			progress(90, $('#progressBar4'));
	// 			progress(89, $('#progressBar5'));
	// 			progress(35, $('#progressBar6'));
	// 			progress(90, $('#progressBar7'));
	// 			progress(89, $('#progressBar8'));
	// 			progress(35, $('#progressBar9'));
	// 			progress(90, $('#progressBar10'));
	// 	}

	// });

// =================final ends================

	var icons = $('.icons');
	var gradProj = $(".graduate_proj");
	$(window).scroll(function(){
		var win = $(window).height()/2;

		var djangoSection= $(".django-section").offset().top - $(window).scrollTop();
		var flaskSection= $(".flask-section").offset().top - $(window).scrollTop();
		var pythonSection= $(".python-section").offset().top - $(window).scrollTop();
		var graduateProj= $(".edu-head3").offset().top - $(window).scrollTop();
		// var helloCont= $(".hello1").offset().top - $(window).scrollTop();
		var about2= $(".about-2").offset().top - $(window).scrollTop();
		var iconsFromTop = $(".about-1-icons").offset().top - $(window).scrollTop();
		var progressBarFromTop = $("#progress-bar-section").offset().top - $(window).scrollTop();
		// console.log("hello1 cont",helloCont);

		if (iconsFromTop <= win +100 ){
			fadeOutOnScroll(icons);
		}

		if (progressBarFromTop <= win +100 || about2 <= win +100 ){
			
			$.when( $(".about-2").revealOnScroll("right", 1000),
				$("#progress-bar-section").revealOnScroll("left",1000)
				// $(".hello1").revealOnScroll("left",1000)
			 ).done(function(){
			    progress(90, $('#progressBar1'));
				progress(89, $('#progressBar2'));
				progress(35, $('#progressBar3'));
				progress(90, $('#progressBar4'));
				progress(89, $('#progressBar5'));
				progress(100, $('#progressBar6'));
				progress(90, $('#progressBar7'));
				progress(89, $('#progressBar8'));
				progress(35, $('#progressBar9'));
				progress(90, $('#progressBar10'));

			});
			
	
		}

		// if (djangoSection <= win || flaskSection <= win || pythonSection <= win){
		// 	$(".proj-exp-1,.proj-exp-3").revealOnScroll("right",1000);
		// 	// $(".hello2").revealOnScroll("visible",1000);
		// 	$(".proj-exp-2").revealOnScroll("left",1000);
		// }

		if (djangoSection <= win){
			$(".proj-exp-1,.proj-exp-3").revealOnScroll("right",1000);
			// $(".hello2").revealOnScroll("visible",1000);
			$(".proj-exp-2").revealOnScroll("left",1000);
		}

		if (graduateProj <= win +100 ){
			fadeOutOnScroll(gradProj);
		}

	});

	// $(window).scroll(function(){

	// 	windowHeight = $(window).height();
	// 	windowScrollPositionTop = $(window).scrollTop();
	// 	windowScrollPositionBottom = windowHeight + windowScrollPositionTop;
	// 	// console.log(windowScrollPositionBottom);
	
	// 	// Calling revealOnScroll()
	// 	// $(".display-gallery").revealOnScroll("",10000);

	// 	// $('.icons').hide();
	// 	// $('.icons').each(function(i) {
 //  //   		$(this).delay(500*(i+1)).fadeIn(1000); //Uses the each methods index+1 to create a multiplier on the delay
	// 	// });

	// 	// Calling revealOnScroll() with arguments, Left, Right & Speed
	// 	// $(".icons").fadeInOnScroll();
	// 	$(".about-2").revealOnScroll("right", 1000);
	// 	$("#progress-bar-section").revealOnScroll("left",1000);
	// 	// $(".project-1").revealOnScroll("right", 2000);
	// 	// $(".about3").revealOnScroll("left",2000);

	// });

	$(".flask-section,.python-section,.analysis-section").hide();
	$("#flask-link").click(function(e){
		e.preventDefault();
		$("#django, #python, #analysis").hide();
		$("#flask").show();
	});

	$("#python-link").click(function(e){
		e.preventDefault();
		$("#django, #flask, #analysis").hide();
		$("#python").show();
	});

	$("#django-link").click(function(e){
		e.preventDefault();
		$("#flask, #python, #analysis").hide();
		$("#django").show();
	});

	$("#data-analysis-link").click(function(e){
		e.preventDefault();
		$("#flask, #python, #django").hide();
		$("#analysis").show();
	});

	$("#project-nav>ul>li>.btn").click(function(){
		$("#project-nav>ul>li>.btn").removeClass('active');
		$(this).addClass("active");

	});

	// ===========modal start ============

	// var imageArray = ["img/django/house1.jpeg","img/django/house2.jpg","img/django/house3.jpg"];
	// var imageIndex = 0;
	// $(".proj-exp-1>a").click(function(){
	// 	// var mama = $(this).attr("data-target");
	// 	var lol = $(this).data("name");
	// 	console.log(lol);
	// 	// $("#baba").attr("id",mama);
	// 	if (lol==="koko"){
	// 		$(".item>img").attr('src',imageArray[imageIndex]);
	// 		if (imageIndex >= imageArray.length) {
 //            	imageIndex = 0;
 //        	}
	// 	}

	// });
	
	// var screenSize = $(window).width();
	// alert("your size" + screenSize);
	// var pythonSectionImg = function(myScreenWidth){
	// 	if (myScreenWidth == 1680){
	// 		$(".img-style-project").css("max-height","60vh");
	// 		$(".modal-body").css({"height":"initial","overflow":"hidden"});
	// 	}
	// };
	
	// *************** Django Section Images ****************
	var djangoImg1 = ["img/django/mycar/home.png","img/django/mycar/home-hover.jpg","img/django/mycar/search-res.png"];
	var djangoImg2 = ["img/django/expressit/home.png","img/django/expressit/nav.jpg","img/django/expressit/reg2.jpg"];
	var djangoImg3 = ["img/django/blog/welcome_page.png","img/django/blog/nav_down.png","img/django/blog/dashboard_options.jpg","img/django/blog/calender.png"];

	// *************** Flask Section Images ****************
	var flaskImg1 = ["img/flask/realestate/welcome.png","img/flask/realestate/search.png","img/flask/realestate/res2.png"];
	var flaskImg2 = ["img/flask/adv-blog/welcome.png","img/flask/adv-blog/articles.png","img/flask/adv-blog/create.png"];
	var flaskImg3 = ["img/flask/mongoCURD/home.png","img/flask/mongoCURD/delete.png","img/flask/mongoCURD/update.png"];

	// *************** Python Section Images ****************
	var pythonImg1 = ["img/python/my_company/2-select-choice-1.png","img/python/my_company/4-opt-3-upgrade-emp.png","img/python/my_company/5-opt-3-emp-than-dept.png"];
	var pythonImg2 = ["img/python/mysql_to_json_csv/3-csv-result.png","img/python/mysql_to_json_csv/4-json-result.png","img/python/mysql_to_json_csv/6-error-handling.png"];
	var pythonImg3 = ["img/python/read_api_save_into_mysql_db/result.png","img/python/read_api_save_into_mysql_db/json.png","img/python/read_api_save_into_mysql_db/connection.png"];
	var pythonImg4 = ["img/python/read_api_save_into_mysql_db/result.png","img/python/read_api_save_into_mysql_db/json.png","img/python/read_api_save_into_mysql_db/connection.png"];
	var pythonImg5 = ["img/python/read_api_save_into_mysql_db/result.png","img/python/read_api_save_into_mysql_db/json.png","img/python/read_api_save_into_mysql_db/connection.png"];

	// *************** data analysis Section Images ****************
	var dataImg1 = ["img/data_analysis/python_pandas_operations/1.png","img/data_analysis/python_pandas_operations/2.png","img/data_analysis/python_pandas_operations/3.png"];
	var dataImg2 = ["img/data_analysis/realestate_data_analysis/1.png","img/data_analysis/realestate_data_analysis/2.png","img/data_analysis/realestate_data_analysis/3.png"];
	var dataImg3 = ["img/data_analysis/data_analysis_using_database/1.png","img/data_analysis/data_analysis_using_database/2.png","img/data_analysis/data_analysis_using_database/3.png"];
	var dataImg4 = ["img/data_analysis/realestate_data_analysis_visualization/1.png","img/data_analysis/realestate_data_analysis_visualization/2.png","img/data_analysis/realestate_data_analysis_visualization/3.png"];
	var dataImg5 = ["img/data_analysis/ecommerce_purchases/1.png","img/data_analysis/ecommerce_purchases/2.png","img/data_analysis/ecommerce_purchases/3.png"];
	var dataImg6 = ["img/data_analysis/sales_data_analysis/1.png","img/data_analysis/sales_data_analysis/2.png","img/data_analysis/sales_data_analysis/3.png"];
	var dataImg7 = ["img/data_analysis/salaries_data_analysis/1.png","img/data_analysis/salaries_data_analysis/2.png","img/data_analysis/salaries_data_analysis/3.png"];
	var dataImg8 = ["img/data_analysis/911_calls/1.png","img/data_analysis/911_calls/2.png","img/data_analysis/911_calls/3.png"];


	var img1 = $("#img1>img");
	var img2 = $("#img2>img");
	var img3 = $("#img3>img");

	modalBodyH2 = $(".modal-body>h2");
	modalBodyUl = $(".modal-body>ul");
	modalBodyP = $(".modal-body>.modal-p>ul");
	modalFooterA = $(".modal-footer>a");

	var modalFunction = function(){
		var start = performance.now();
		var dataName = $(this).data("name");

		// *************** Django Section Start ****************

		if (dataName==="django1"){
			img1.attr('src',djangoImg1[0]); img2.attr('src',djangoImg1[1]); img3.attr('src',djangoImg1[2]);
			modalBodyH2.html("MyCar");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Django</li>"+"<li>MySQL</li>"+"<li>Jquery</li>"+
				"<li>Bootstrap</li>"+"<li>Html</li>"+"<li>CSS</li>"+"<li>Responsive Design</li>");
			modalBodyP.html(
				"<li>Mycar is a simple application for sale listing and create new list.</li>"+
				"<li>A dynamic search engine which used optimized querysets “Q() object” to search car by make, model or keyword. If no match found, it will display a message</li>"+
				"<li>Django messaging framework to display custom messages</li>"+
				"<li>Custom navbar to stay visible on scrolldown</li>"+
				"<li>Bootstarp carousel is being used to animate the welcome images.</li>"+
				"<li>Scalable pagination which only display three or six post at a homepage. If number of post exceeds six, than it will show a navigation bar to go to next page.</li>"+
				"<li>Custom 'make/model' and 'Type' dropdown option which display the number of make/model and type of vehicle available at real-time database synchronization.</li>"+
				"<li>Key features modal dialog popup window displays key information for that particular post.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/django-mycar");

		} else if (dataName==="django2"){
			$("#img1>img").attr('src',djangoImg2[0]);
			$("#img2>img").attr('src',djangoImg2[1]);
			$("#img3>img").attr('src',djangoImg2[2]);
			modalBodyH2.html("Express it");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Django</li>"+"<li>MySQL</li>"+"<li>Jquery</li>"+
				"<li>Bootstrap</li>"+"<li>Html</li>"+"<li>CSS</li>"+"<li>Responsive Design</li>");
			modalBodyP .html(
				"<li>Express-it homepage where users can view posted images, content, register, login and logout options.</li>"+
				"<li>Users can only view the limited details of each image (title and author name). To view details of the post, create post, they must need to register and login.</li>"+
				"<li>Register new user, login and logout sessions. The Django authentication system is being used handles both authentication and authorization.</li>"+
				"<li>@Login_required decoraters is being used to only allow logged in users to view profile and create post.</li>"+
				"<li>Django messaging framework to display custom messages. Each message will disappeared after 5 seconds using javascript.</li>"+
				"<li>During registraion of new user, check if username exists in real-time through Ajax without reloading the page.</li>"+
				"<li>Custom navbar to stay visible on scrolldown and back to the top button to get back to the top of the page.</li>"+
				"<li>Responsive design for any screensize. Django form validation for registration and login.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/django-express-it");

		} else if (dataName==="django3"){
			$("#img1>img").attr('src',djangoImg3[0]);
			$("#img2>img").attr('src',djangoImg3[1]);
			$("#img3>img").attr('src',djangoImg3[2]);
			modalBodyH2.html("Advance Blog");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Django</li>"+"<li>MySQL</li>"+"<li>jQuery</li>"+
				"<li>Bootstrap</li>"+"<li>Html</li>"+"<li>CSS</li>"+"<li>Responsive Design</li>"+
				"<li>Ajax</li>"+"<li>Media Queries</li>"+"<li>Template Inheritance</li>"+"<li>jQueryUI</li>");
			modalBodyP .html(
				"<li>Blog home page where users can see all the blog posts, login and logout options.</li>"+
				"<li>Users can only view the limited details of each blog. For advance features like to create post and comment on any post, they must need to register and login.</li>"+
				"<li>Register new user, login and logout sessions. The Django authentication system is being used handles both authentication and authorization.</li>"+
				"<li>@Login_required decoraters is being used to only allow logged in users to view dashboard, create, comment and edit post.</li>"+
				"<li>Custom dashboard for each user to create and view draft and future date posts. Django messaging framework to display custom messages.</li>"+
				"<li>Custom navbar to stay visible on scrolldown and back to the top button to get back to the top.</li>"+
				"<li>Slide in effects on scrolldown from left to right and responsive design for any screensize.</li>"+
				"<li>Scalable pagination to display only three post at single page with navigation bar for next page.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/django-blog");

		// *************** Django Section Ends ****************

		// *************** Flask Section Ends ****************

		} else if (dataName==="flask1"){
			$("#img1>img").attr('src',flaskImg1[0]);
			$("#img2>img").attr('src',flaskImg1[1]);
			$("#img3>img").attr('src',flaskImg1[2]);
			modalBodyH2.html("Realestate Data Analysis");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Flask</li>"+"<li>MySQL-Database</li>"+"<li>jQuery</li>"+
				"<li>Bootstrap</li>"+"<li>Html</li>"+"<li>CSS</li>"+"<li>Responsive Design</li>"+"<li>SqlAlchemy</li>");
			modalBodyP .html(
				"<li>Display all the listed properties from the database.</li>"+
				"<li>Search listing by City name.</li>"+
				"<li>Advance search option to check property by city name and number of bedrooms.</li>"+
				"<li>Display search result into tabular form.</li>"+
				"<li>Helper function to check whether city name exists or not using jquery</li>"+
				"<li>Generate distribution graph using Seaborn library</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/flask_data_analysis");

		} else if (dataName==="flask2"){
			$("#img1>img").attr('src',flaskImg2[0]);
			$("#img2>img").attr('src',flaskImg2[1]);
			$("#img3>img").attr('src',flaskImg2[2]);
			modalBodyH2.html("Advance Blog");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Flask</li>"+"<li>MySQL</li>"+"<li>jQuery</li>"+
				"<li>Bootstrap</li>"+"<li>Html</li>"+"<li>CSS</li>"+"<li>Responsive Design</li>"+
				"<li>Jinja2</li>"+"<li>WTforms</li>"+"<li>Template Inheritance</li>");
			modalBodyP .html(
				"<li>Blog home page where users can see all the blog posts, login and logout options.</li>"+
				"<li>Users can only view the limited details of each blog. For advance features like to create post and comment on any post, they must need to register and login.</li>"+
				"<li>Register new user, login and logout sessions.</li>"+
				"<li>Custom @is_logged_in decoraters is being used to only allow logged in users to view dashboard, create, delete and edit article.</li>"+
				"<li>Custom dashboard for each user to create, edit and delete articles.</li>"+
				"<li>Flask flash message framework to display messages.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/advance_blog");

		} else if (dataName==="flask3"){
			$("#img1>img").attr('src',flaskImg3[0]);
			$("#img2>img").attr('src',flaskImg3[1]);
			$("#img3>img").attr('src',flaskImg3[2]);
			modalBodyH2.html("CURD operations with MongoDB");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Flask</li>"+"<li>MongoDB</li>"+"<li>jQuery</li>"+"<li>PyMongo</li>"+
				"<li>Bootstrap</li>"+"<li>Html</li>"+"<li>CSS</li>"+"<li>Ajax</li>"+"<li>WTforms</li>");
			modalBodyP .html(
				"<li>Simple application to perform basic Create, read, update, and delete (CRUD) operations using Python's framework Flask and MongoDB as database.</li>"+
				"<li>Flask WTForms to handle adding and Updating database.</li>"+
				"<li>List all the users at home page.</li>"+
				"<li>Create new document in the collection.</li>"+
				"<li>Updating Document in the collection.</li>"+
				"<li>Deleting Document from the collection</li>"+
				"<li>Ajax calls to handle operations without reloading the page.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/crud-mongodb");

		// *************** Flask Section Ends ****************

		// *************** Python Section start ****************

		} else if (dataName==="python1"){
			$("#img1>img").attr('src',pythonImg1[0]);
			$("#img2>img").attr('src',pythonImg1[1]);
			$("#img3>img").attr('src',pythonImg1[2]);
			// pythonSectionImg(screenSize);
			modalBodyH2.html("My Company");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>MySQLdb</li>");
			modalBodyP .html(
				"<li>Simple script to show basic operation in any organization</li>"+
				"<li>Operation includes display all employee, create new employee, assign department and positions.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/my_company");		
		} else if (dataName==="python2"){
			$("#img1>img").attr('src',pythonImg2[0]);
			$("#img2>img").attr('src',pythonImg2[1]);
			$("#img3>img").attr('src',pythonImg2[2]);
			modalBodyH2.html("MySQL to Json & CSV files.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>MySQLdb</li>"+"<li>Json</li>"+"<li>CSV</li>");
			modalBodyP .html(
				"<li>This script converts MySQL database tables to Json and CSV files as an output files.</li>"+
				"<li>On execution, it will ask Json & CSV file name separately.</li>"+
				"<li>Error handling if file name is not correct according to the defined file name pattern.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/mysql_to_json_csv");
		} else if (dataName==="python3"){
			$("#img1>img").attr('src',pythonImg3[0]);
			$("#img2>img").attr('src',pythonImg3[1]);
			$("#img3>img").attr('src',pythonImg3[2]);
			modalBodyH2.html("Read Json data from an API and store into MySQL database.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>MySQLdb</li>"+"<li>Json</li>"+"<li>urllib2</li>"+"<li>API</li>");
			modalBodyP .html(
				"<li>Create a database and table</li>"+
				"<li>Read json-api and store it into mysql database.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/read_api_save_into_mysql_db");
		} else if (dataName==="python4"){
			$("#img1>img").attr('src',pythonImg4[0]);
			$("#img2>img").attr('src',pythonImg4[1]);
			$("#img3>img").attr('src',pythonImg4[2]);
			modalBodyH2.html("Search from CSV file & display results.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>CSV</li>");
			modalBodyP .html(
				"<li>This script will read the data from CSV files and search location by user input.</li>"+
				"<li>Display 'no result found' if there is no match in CSV file.</li>"+
				"<li>It will also display the total number of properties found at a given location and the average price is a particular city.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/read_csv_and_search");
		} else if (dataName==="python5"){
			$("#img1>img").attr('src',pythonImg5[0]);
			$("#img2>img").attr('src',pythonImg5[1]);
			$("#img3>img").attr('src',pythonImg5[2]);
			modalBodyH2.html("Generate CSV & Json file from search results.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>CSV</li>"+"<li>Json</li>"+"<li>Prettyprint</li>"+"<li>Unittest</li>");
			modalBodyP .html(
				"<li>This program will get the user input location and display the output if found any match is csv file. If match found, it will create the csv and the json file for that particular location, otherwise keep asking to enter a valid location.</li>"+
				"<li>Find the 'Location' from user input and search the match from given CSV file and group by the city name, price, Bedrooms,Bathrooms,Size,Price/SQ.Ft,Status.</li>"+
				"<li>Display the resultant data in tabular form.</li>"+
				"<li>Find and display the total number of properties, most expensive property, Least expensive property, average property price and average property price per sq/ft in a matched result.</li>"+
				"<li>Calculate and display the execution time and the total number of rows in the CSV file.</li>"+
				"<li>If found a matching location, create a csv and json files for that particular location.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/read_write_csv_json");

		// *************** Python Section Ends ****************

		// *************** Data Analysis Section start ****************

		} else if (dataName==="analysis1"){
			$("#img1>img").attr('src',dataImg1[0]);
			$("#img2>img").attr('src',dataImg1[1]);
			$("#img3>img").attr('src',dataImg1[2]);
			// pythonSectionImg(screenSize);
			modalBodyH2.html("Pandas Operations");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Pandas</li>"+"<li>Numpy</li>"+"<li>Jupyter Notebook</li>");
			modalBodyP .html(
				"<li>This script will demonstrate several operations for data manipulation and analysis using python's Pandas software library.</li>"+
				"<li>How to grab any column, it return a Series. Grab multiple columns, it will return a DataFrame.</li>"+
				"<li>Insert a new column, add two columns and add sum of values into new column.</li>"+
				"<li>Drop or delete any column. Deleting any row.</li>"+
				"<li>Selecting rows using loc( ) and iloc( ) method. Multiple rows return Dataframe.</li>"+
				"<li>Select a specific item in the DataFrame. Get a subset of any 2 rows.</li>"+
				"<li>Show values which are greater than 0, return boolean values. Apply condition on only one column, it will return boolean.</li>"+
				"<li>Reset index and create a new column. Insert new column and set it as index.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/python_pandas_operations");		
		} else if (dataName==="analysis2"){
			$("#img1>img").attr('src',dataImg2[0]);
			$("#img2>img").attr('src',dataImg2[1]);
			$("#img3>img").attr('src',dataImg2[2]);
			modalBodyH2.html("Realestate Data Analysis.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Pandas</li>"+"<li>Numpy</li>"+"<li>CSV</li>"+"<li>Jupyter Notebook</li>");
			modalBodyP .html(
				"<li>Create readable DataFrame using pandas, verify head and tail of the dataset</li>"+
				"<li>Import Sacramento_realestate_transactions.csv using getfromtxt() method, converting into 2-dimensional array.</li>"+
				"<li>Display first 5 rows and only (stree, city, zip, state) columns.</li>"+
				"<li>Display result in boolean, True where zip is equal to for example '95815'.</li>"+
				"<li>Display the index where zip is equal to 95815 using where( ) method.</li>"+
				"<li>Now save this array into new file called 'result.csv' using savetxt() method. Display 'result.csv' through pandas.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/realestate_data_analysis");
		} else if (dataName==="analysis3"){
			$("#img1>img").attr('src',dataImg3[0]);
			$("#img2>img").attr('src',dataImg3[1]);
			$("#img3>img").attr('src',dataImg3[2]);
			modalBodyH2.html("Data Analysis Using Database");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>MySQL</li>"+"<li>Pandas</li>"+"<li>Numpy</li>"+"<li>PyMySQL</li>"+"<li>Jupyter Notebook</li>");
			modalBodyP.html(
				"<li>This project will demonstrate the data analysis of real estate data set stored into Mysql database.</li>"+
				"<li>Create engine to establish connection with mysql database using sqlalchemy and pymysql.</li>"+
				"<li>Generate dataframes using pandas.</li>"+
				"<li>Display sections of dataframe, e.g Location and Price.</li>"+
				"<li>Display number of properties at each location.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/data_analysis_using_database");
		} else if (dataName==="analysis4"){
			$("#img1>img").attr('src',dataImg4[0]);
			$("#img2>img").attr('src',dataImg4[1]);
			$("#img3>img").attr('src',dataImg4[2]);
			modalBodyH2.html("Realestate Data Analysis & Visualization");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Seaborn</li>"+"<li>Pandas</li>"+"<li>Numpy</li>"+"<li>Matplotlib</li>"+"<li>Jupyter Notebook</li>"+"<li>CSV</li>");
			modalBodyP .html(
				"<li>Data Analysis and visualization of realestate dataset using matplotlib, pandas, seaborn.</li>"+
				"<li>Read csv dataset and pandas dataframes.</li>"+
				"<li>Display the Bedrooms and Price/SQ.Ft listed at any particular city e.g 'San Luis Obispo'.</li>"+
				"<li>Generate a bar graph using Bedrooms and Price/SQ.Ft.</li>"+
				"<li>Generate a countplot and show results regarding their status.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/realestate_data_analysis_visualization");
		} else if (dataName==="analysis5"){
			$("#img1>img").attr('src',dataImg5[0]);
			$("#img2>img").attr('src',dataImg5[1]);
			$("#img3>img").attr('src',dataImg5[2]);
			modalBodyH2.html("E-commerce Purchases Data Analysis");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>CSV</li>"+"<li>Pandas</li>"+"<li>Jupyter Notebook</li>");
			modalBodyP .html(
				"<li>Note: In this analysis we will use Fake Data about some purchases done through Amazon, all the data is fake and made-up for demonstration.</li>"+
				"<li>Import pandas and read in the Ecommerce Purchases csv file and set it to a DataFrame called ecom. Check the head of the DataFrame.</li>"+
				"<li>Check the average Purchase Price, highest and lowest purchase prices.</li>"+
				"<li>How many people have English 'en' as their Language of choice on the website and have the job title of 'Lawyer'.</li>"+
				"<li>How many people made the purchase during the AM and PM.</li>"+
				"<li>Someone made a purchase that came from Lot: '90 WT' , what was the Purchase Price for this transaction?</li>"+
				"<li>Find is the email of the person with the given Credit Card Number.</li>"+
				"<li>How many people have American Express as their Credit Card Provider and made a purchase above the given price e.g '$95'. </li>"+
				"<li>How many people have a credit card that expires in 2025?</li>"+
				"<li>What are the top 5 most popular email providers/hosts (e.g. gmail.com, yahoo.com, etc...).</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/ecommerce_purchases_data_analysis_pandas");
		} else if (dataName==="analysis6"){
			$("#img1>img").attr('src',dataImg6[0]);
			$("#img2>img").attr('src',dataImg6[1]);
			$("#img3>img").attr('src',dataImg6[2]);
			modalBodyH2.html("Data Analysis & Visualization of Sales Dataset.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Pandas</li>"+"<li>Matplotlib</li>"+"<li>Jupyter Notebook</li>"+"<li>CSV</li>");
			modalBodyP .html(
				"<li>Data analysis & visualization sales dataset with Python using Matplotlib, Pandas.</li>"+
				"<li>Read dataset from csv file and generate pandas dataframes. Get information about the dataset using describe() & info().</li>"+
				"<li>Check how much 'Revenue' is being generated by each product. Use groupby() to display all products. Also display sum of their revenue.</li>"+
				"<li>Generate a bar graph of 'Product line', mean of the 'Revenue', 'Product type' & mean of the 'Quantity'.</li>"+
				"<li>Display the sales break down by category.</li>"+
				"<li>Finally bar and pie graph of 'Product line','Product type', 'Quantity'.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/sales_data_analysis_visualization");
		} else if (dataName==="analysis7"){
			$("#img1>img").attr('src',dataImg7[0]);
			$("#img2>img").attr('src',dataImg7[1]);
			$("#img3>img").attr('src',dataImg7[2]);
			modalBodyH2.html("Salaries Data Analysis");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Pandas</li>"+"<li>Jupyter Notebook</li>"+"<li>CSV</li>");
			modalBodyP .html(
				"<li>Import pandas as pd & read Salaries.csv as a dataframe called salary.</li>"+
				"<li>Check the head of the DataFrame & use the .info() method to find out how many entries are there.</li>"+
				"<li>What is the average BasePay & the highest amount of OvertimePay in the dataset?</li>"+
				"<li>Find the job title of any particular person e.g 'GARY JIMENEZ' & How much does any particular person make e.g GARY JIMENEZ (including benefits)?</li>"+
				"<li>What is the name of the highest & lowest paid person (including benefits)?</li>"+
				"<li>What was the average (mean) BasePay of all employees per year? e.g (2011-2014) & How many unique job titles are there?</li>"+
				"<li>What are the top 5 most common jobs? How many people have the word Chief in their job title?</li>"+
				"<li>How many Job Titles were represented by only one person in 2013? (e.g. Job Titles with only one occurence in 2013?)</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/salaries_data_analysis_using_pandas");
		} else if (dataName==="analysis8"){
			$("#img1>img").attr('src',dataImg8[0]);
			$("#img2>img").attr('src',dataImg8[1]);
			$("#img3>img").attr('src',dataImg8[2]);
			modalBodyH2.html("911 Calls Data Analysis & Visualization.");
			modalBodyUl.html(
				"<li>Python</li>"+"<li>Pandas</li>"+"<li>Seaborn</li>"+"<li>Numpy</li>"+"<li>Matplotlib</li>"+"<li>CSV</li>");
			modalBodyP .html(
				"<li>This project demonstrate data analysis and visualization of some 911 call dataset from Kaggle using Pandas, Numpy, Matplotlib and Seaborn.</li>"+
				"<li>Read in the csv file as a dataframe called df and check the info and head of the df.</li>"+
				"<li>What are the top 5 zipcodes and townships (twp) for 911 calls?</li>"+
				"<li>In the titles column there are 'Reasons/Departments' specified before the title code. These are EMS, Fire, and Traffic. Create a new column called 'Reason' that contains this string value.</li>"+
				"<li>What is the most common Reason for a 911 call based off of this new column?</li>"+
				"<li>Now use seaborn to create a countplot of 911 calls by Reason and Township.</li>"+
				"<li>What is the data type of the objects in the timeStamp column? Timestamps are still strings. Use pd.to_datetime to convert the column from strings to DateTime objects.</li>"+
				"<li>Now that the timestamp column are actually DateTime objects, use .apply() to create 3 new columns called Hour, Month, and Day of Week. You will create these columns based off of the timeStamp column.</li>"+
				"<li>Use seaborn to create a countplot of the Day of Week column with the hue based off of the Reason column. Now create a simple plot off of the dataframe indicating the count of calls per month.</li>"+
				"<li>Create a new column called 'Date' that contains the date from the timeStamp column. Groupby this Date column with the count() aggregate and create a plot of counts of 911 calls.</li>"+
				"<li>Creating heatmaps with seaborn and our data. We'll first need to restructure the dataframe so that the columns become the Hours and the Index becomes the Day of the Week.</li>"+
				"<li>Create a HeatMap & Clustermap using this new DataFrame.</li>"
				);
			modalFooterA.attr("href","https://github.com/devbabar/data_analysis_911_calls_dataset");
		}

		// *************** Data Analysis Section Ends ****************

		var duration = (performance.now() - start);
		console.log(duration);
	};


	$(".div-style>a").click(modalFunction);
	// ============modal end ==============

		

});







