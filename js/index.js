window.onload = function () {
    audio4Play();
}
document.addEventListener("WeixinJSBridgeReady", function () {
    audio4Play();
}, false);
//检测用户横竖屏
var Width = document.documentElement.clientWidth;
var Height = document.documentElement.clientHeight;
if (Width < Height) {
    $(".shuping").show();
} else {
    $(".shuping").hide();
}
window.addEventListener('orientationchange', function (event) {
    if (window.orientation == 180 || window.orientation == 0) {
        $(".shuping").show();
    }
    if (window.orientation == 90 || window.orientation == -90) {
        setTimeout(function () {
            $(".shuping").hide();
            $('.p-index').show();
            window.location.reload()
        }, 500)
    }
})

var v_h = null,
    direction = 1,
    e, e1, e2,
    pageno = 0,
    out,
    newM = null;
var isok = true;

function init_pageH() {
    var fn_h = function () {
        if (document.compatMode == "BackCompat")
            var Node = document.body;
        else
            var Node = document.documentElement;
        return Math.max(Node.scrollHeight, Node.clientHeight);
    }
    var page_h = fn_h();
    var m_h = $(".m-page").height();
    page_h <= m_h ? v_h = page_h : v_h = m_h;
    $(".m-page").height(v_h);
    $(".p-index").height(v_h);
}

init_pageH();




//audio
var audio1 = document.getElementById("audio1");

function audioPlay() {
    var currentTime = Date.now();
    var protectTime = 100;
    if ((currentTime - lastRunTime) < protectTime) {
        return;
    }
    if (playStatus) {
        audio1.pause();
    } else {
        audio1.play();
    }
    playStatus = !playStatus;
    lastRunTime = Date.now();
}

var audio4 = document.getElementById("audio4");

function audio4Play() {
    audio4.play();
}

function audio4Pause() {
    audio4.pause();
}


var A1 = document.getElementById("audio1");
var A2 = document.getElementById("audio2");
var A4 = document.getElementById("audio4");
document.addEventListener("WeixinJSBridgeReady", function () { 
    A4.play();
}, false);
// content
var number = 0;
// homePage
(function(){
	A4.play();
	$(".startbut").click(function(){
		$(".homePage").hide();
		$(".rule").show();
		$(".rule p:nth-of-type(1)").click(function(){
			$(".rule").hide();
            $(".nav").show();
            setTimeout(function () {
                $(".nav p").show();
            },3500)
		})
	});
	// nav
	$(".nav p").unbind("click").click(function(){
        $(".nav p").hide();
		var dataIden = $(this).attr("data-iden");
		switch(dataIden){
			case "wetpaint":
                wetpaint();
				break;
			case "rubbish":
				rubbish();
				break;
			case "poopee":
				poopee();
				break;
		}
	})
})()

document.ontouchstart=function(){
    A1.src="";
    A2.src="";
    A1.play();
    A2.play();
};
// wetpaint
function wetpaint(){
    $(".nav").addClass("navChange");
    setTimeout(function(){
        $(".nav").hide();
        $(".nav").removeClass("navChange");
    },2000);
	$(".wetpaint").show();
    setTimeout(function(){
        $(".wetpaint .content").show();
        $('.chair').show().addClass('animated bounceInLeft');
        $('.horse1').show().addClass('animated bounceInUp');
    },2800);
    setTimeout(function () {
        $('.action').show().addClass('animated bounceInDown');
    },4000)
   setTimeout(function () {
       A1.src = "audio/2Don't sit on it.mp3";
       A1.play();
       $('.wetpaint .text_left').show().removeClass('animated fadeOutDown').addClass('animated bounceInRight');
       setTimeout(function () {
           $('.wetpaint .text_right').show().removeClass('animated fadeOutUp').addClass('animated bounceInLeft');
           $('.back1').show();
           A1.src = "audio/1sit on it.mp3";
           A1.play();
           $('#audio1').bind('ended',function () {
               //坐了
               $('.wetpaint .text_right').bind('click',function () {
                   $('.back1').hide();
                   $('.wetpaint .text_left').removeClass('animated bounceInRight').addClass('animated fadeOutDown').hide();
                   $('.wetpaint .text_right').removeClass('animated bounceInLeft').addClass('animated fadeOutUp').hide();
                   setTimeout(function () {
                       A1.src = "audio/Watch out.mp3";
                       A1.play();
                       $('.watchout').show().addClass('animated tada');
                   },500)
                   setTimeout(function () {
                       $('.watchout').hide().removeClass('animated tada');
                       setTimeout(function () {
                           $('.horse1').hide();
                           $('.horse2').show();
                           setTimeout(function () {
                               $('.horse2').hide();
                               $('.horse3').show();
                               $(".btnBack").fadeIn();
                               A1.src = "audio/2Don't sit on it.mp3";
                               A1.play();
                           },2000)
                       },1000)
                   },2500)

               })
               //没坐
               $('.wetpaint .text_left').bind('click',function () {
                   $('.back1').hide();
                   $('.wetpaint .text_left').removeClass('animated bounceInUp').addClass('animated fadeOutDown');
                   $('.wetpaint .text_right').removeClass('animated bounceInDown').addClass('animated fadeOutUp');
                   $('.horse1').hide();
                   $('.horse4').show().addClass('horseanimate');
                   setTimeout(function () {
                       $('.horse4').css("right","-400px");
                       $(".btnBack").fadeIn();
                   },3500)
               })
           })
       },3500)
   },6000)
    $(".btnBack").unbind("click").click(function(){
        A1.src = "";
        $(".btnBack").hide();
        $(".wetpaint").hide();
        $(".wetpaint .content").children().hide();
        $(".nav").show();
        $('.wetpaint .text_left').removeClass('animated bounceInUp').removeClass('animated fadeOutDown').hide();
        $('.wetpaint .text_right').removeClass('animated bounceInDown').removeClass('animated fadeOutUp').hide();
        /*元素复原*/
        console.log(1);
        $('.horse4').css("right","").hide().removeClass('horseanimate');
        $('.chair').hide().removeClass('animated bounceInLeft');
        wetpaint();
    })
}

function rubbish(){

    $('.rubbish .ghostrun').show();
    $('.rubbish .ghostrun em').addClass('ghostshake');
    $(".nav").addClass("navChange");
    setTimeout(function(){
        $(".nav").hide();
        $(".nav").removeClass("navChange");
    },2000);
    $(".rubbish").show();
    setTimeout(function(){
        $(".rubbish .content").show();
        $('.chair').show().addClass('animated bounceInLeft');
        $('.rubbishbin').show().addClass('animated bounceInUp');
    },2800);
    setTimeout(function () {
        $('.rubbish .action').show().addClass('animated bounceInDown');
    },4000)
    setTimeout(function () {
    	$('.rubbish .ghostrun em').removeClass('ghostshake');
        A1.src = "audio/4Don't litter.mp3";
        A1.play();
        $('.rubbish .text_left').show().removeClass('animated fadeOutDown').addClass('animated bounceInUp');
        setTimeout(function () {
            $('.rubbish .text_right').show().removeClass('animated fadeOutUp').addClass('animated bounceInDown');
            $('.back2').show();
            A1.src = "audio/3litter.mp3";
            A1.play();
            $('#audio1').bind('ended',function () {
                //扔了
                $('.rubbish .text_right').bind('click', function () {
                    $('.back2').hide();
                    $('.rubbish .text_left').removeClass('animated bounceInUp').addClass('animated fadeOutDown').hide();
                    $('.rubbish .text_right').removeClass('animated bounceInDown').addClass('animated fadeOutUp').hide();
                    setTimeout(function () {
                        $('.ghostrun').hide();
                        $('.droprubbish').show().addClass('rengrubbish');
                        setTimeout(function () {
                            $('.flyrubbish').show();
                            setTimeout(function () {
                                $('.dishangrubbish').show()
                                setTimeout(function () {
                                    $('.watchout').show().addClass('animated tada');
                                    A1.src = "audio/Watch out.mp3";
                                    A1.play();
                                    setTimeout(function () {
                                        $('.watchout').hide().removeClass('animated tada');
                                    }, 1500)
                                    $('.feng').show();
                                    A2.src = "audio/guafeng.mp3";
                                    A2.play();
                                    setTimeout(function () {
                                        A1.src = "audio/suliaodaipailian.mp3";
                                        A1.play();
                                    }, 2000)
                                    $('.flyrubbish').hide();
                                    $('.bird').show().addClass('birdfly')
                                    $('.birdrubbish').show();
                                    setTimeout(function () {
                                        $('.feng').hide();
                                        $('.birdrubbish').hide();
                                        $('.bird').hide().removeClass('birdfly');
                                        $('.birdandrubbish').show();
                                        setTimeout(function () {
                                            $('.xingxing').show();
                                            $(".btnBack").fadeIn();
                                            A1.src = "audio/4Don't litter.mp3";
                                            A1.play();
                                        }, 2000)
                                    }, 2000)
                                }, 1500)
                            }, 2000)
                        }, 3000)
                    }, 1000)
                })
                //没扔
                $('.rubbish .text_left').bind('click', function () {
                    $('.back2').hide();
                    $('.rubbish .text_left').removeClass('animated bounceInUp').addClass('animated fadeOutDown');
                    $('.rubbish .text_right').removeClass('animated bounceInDown').addClass('animated fadeOutUp');
                    setTimeout(function () {
                        $('.ghostrun').hide();
                        $('.droprubbish').show().addClass('rengrubbishbin');
                        setTimeout(function () {
                            $('.flyrubbish').show().addClass('intorubbishbin');
                            $(".btnBack").fadeIn();
                        }, 3000)
                    }, 1000)
                })
            })
        },3500)
    },11000)
    $(".btnBack").unbind("click").click(function(){
        $(".btnBack").unbind("click")
        A1.src = "";
        $(".btnBack").hide();
        $(".rubbish").hide();
        $(".rubbish .content").children().hide();
        $(".nav").show();
        $('.rubbish .text_left').removeClass('animated bounceInUp').removeClass('animated fadeOutDown').hide();
        $('.rubbish .text_right').removeClass('animated bounceInDown').removeClass('animated fadeOutUp').hide();
        /*元素复原*/
        $('.flyrubbish').removeClass('intorubbishbin');
        $('.droprubbish').removeClass('rengrubbish');
        $('.droprubbish').removeClass('rengrubbishbin');
        $('.xingxing').hide();
        $('.chair').hide().removeClass('animated bounceInLeft');
        rubbish();
    })
}

function poopee(){
    /*////////////////////////*/
    $('.poopee .ghostrun').show();
    $('.poopee .ghostrun em').addClass('poopeemove');
    $(".nav").addClass("navChange");
    setTimeout(function(){
        $(".nav").hide();
        $(".nav").removeClass("navChange");
    },2000);
    $(".poopee").show();
    setTimeout(function(){
        $(".poopee .content").show();
        $('.poopee .chair').show().addClass('animated bounceInLeft');
    },2800);
    setTimeout(function () {
        $('.poopee .action').show().addClass('animated bounceInDown');
    },4000)
    setTimeout(function () {
        $('.poopee .ghostrun em').removeClass('poopeemove');
        $('.poopee .ghostrun').hide();
        $('.poopee .ghostthinking').show();
        setTimeout(function () {
            A1.src = "audio/6Don't pee or poo in the park.mp3";
            A1.play();
            $('.poopee .text_left').show().removeClass('animated fadeOutDown').addClass('animated bounceInUp');
            setTimeout(function () {
                $('.poopee .text_right').show().removeClass('animated fadeOutUp').addClass('animated bounceInDown');
                $('.back3').show();
                A1.src = "audio/5pee or poo in the park.mp3";
                A1.play();
                $('#audio1').bind('ended',function () {
                    //拉了
                    $('.poopee .text_right').bind('click', function () {
                        $('.back3').hide();
                        $('.poopee .text_left').removeClass('animated bounceInUp').addClass('animated fadeOutDown').hide();
                        $('.poopee .text_right').removeClass('animated bounceInDown').addClass('animated fadeOutUp').hide();
                        setTimeout(function () {
                            $('.ghostrun').hide();
                            $('.poopee .ghostthinking').hide();
                            $('.madeshake').show();
                            setTimeout(function () {
                                $('.madeshake').hide();
                                $('.lashi').show().addClass('lashiing');
                                setTimeout(function () {
                                    $('.shit').show().addClass('shitanimate');
                                    setTimeout(function () {
                                        $('.pig em').addClass('pigfoot');
                                        $('.pig').show();
                                        setTimeout(function () {
                                            $('.watchout').show().addClass('animated tada');
                                            A1.src = "audio/Watch out.mp3";
                                            A1.play();
                                        }, 2800)
                                        setTimeout(function () {
                                            $('.watchout').hide().removeClass('animated tada');
                                        }, 4000);
                                        setTimeout(function () {
                                            $('.pig em').removeClass('pigfoot');
                                            A1.src = "audio/caishi.mp3";
                                            A1.play();
                                            setTimeout(function () {
                                                $('.pig').hide();
                                                $('.pigdown').show();
                                                $('.xingxing').show();
                                                $(".btnBack").fadeIn();
                                                setTimeout(function () {
                                                    A1.src = "audio/6Don't pee or poo in the park.mp3";
                                                    A1.play();
                                                }, 1500)
                                            }, 1000)
                                        }, 6000)
                                        $('.lashi').hide().removeClass('lashiing');
                                        $('.ghostout').show();
                                    }, 2000)
                                }, 2000)
                            }, 1500)
                        }, 1000)
                    })
                    //没拉
                    $('.poopee .text_left').bind('click', function () {
                        $('.back3').hide();
                        $('.poopee .text_left').removeClass('animated bounceInUp').addClass('animated fadeOutDown');
                        $('.poopee .text_right').removeClass('animated bounceInDown').addClass('animated fadeOutUp');
                        setTimeout(function () {
                            $('.ghostrun').hide();
                            $('.poopee .ghostthinking').hide();
                            $('.ghostrunright').show();
                            $(".btnBack").fadeIn();
                        }, 1000)
                    })
                })
            },5000)
        },1500)
    },11000)
    $(".btnBack").unbind("click").click(function(){
        $(".btnBack").unbind("click")
        A1.src = "";
        $(".btnBack").hide();
        $(".poopee").hide();
        $(".poopee .content").children().hide();
        $(".nav").show();
        $('.poopee .text_left').removeClass('animated bounceInUp').removeClass('animated fadeOutDown').hide();
        $('.poopee .text_right').removeClass('animated bounceInDown').removeClass('animated fadeOutUp').hide();
        /*元素复原*/
        $('.shit').removeClass('shitanimate');
        $('.chair').hide().removeClass('animated bounceInLeft');
        $('.xingxing').hide();
        poopee();
    })
}


$('.back1').bind('click',function () {
    A1.src = "";
    $(".btnBack").hide();
    $(".wetpaint").hide();
    $(".wetpaint .content").children().hide();
    $(".nav").show();
    $('.wetpaint .text_left').removeClass('animated bounceInUp').removeClass('animated fadeOutDown').hide();
    $('.wetpaint .text_right').removeClass('animated bounceInDown').removeClass('animated fadeOutUp').hide();
    setTimeout(function () {
        $(".nav p").fadeIn();
    },3500)
    /*元素复原*/
    $('.horse4').css("top","67.96%").hide().removeClass('horseanimate');
    $('.chair').hide().removeClass('animated bounceInLeft');
})

$('.back2').bind('click',function () {
    $(".btnBack").unbind("click")
    A1.src = "";
    $(".btnBack").hide();
    $(".rubbish").hide();
    $(".rubbish .content").children().hide();
    $(".nav").show();
    $('.rubbish .text_left').removeClass('animated bounceInUp').removeClass('animated fadeOutDown').hide();
    $('.rubbish .text_right').removeClass('animated bounceInDown').removeClass('animated fadeOutUp').hide();
    setTimeout(function () {
        $(".nav p").fadeIn();
    },3500)
    /*元素复原*/
    $('.flyrubbish').removeClass('intorubbishbin');
    $('.droprubbish').removeClass('rengrubbish');
    $('.droprubbish').removeClass('rengrubbishbin');
    $('.xingxing').hide();
    $('.chair').hide().removeClass('animated bounceInLeft');
})

$('.back3').bind('click',function () {
    $(".btnBack").unbind("click")
    A1.src = "";
    $(".btnBack").hide();
    $(".poopee").hide();
    $(".poopee .content").children().hide();
    $(".nav").show();
    $('.poopee .text_left').removeClass('animated bounceInUp').removeClass('animated fadeOutDown').hide();
    $('.poopee .text_right').removeClass('animated bounceInDown').removeClass('animated fadeOutUp').hide();
    setTimeout(function () {
        $(".nav p").fadeIn();
    },3500)
    /*元素复原*/
    $('.shit').removeClass('shitanimate');
    $('.chair').hide().removeClass('animated bounceInLeft');
    $('.xingxing').hide();
})


//再来一次
$(".playangin").click(function () {
    window.location.href = window.location.href + "?id=" + 10000 * Math.random();
});
//预加载
var num = 0;
var the_images = [
"images/111.png",
"images/again.png",
"images/bg.jpg",
"images/bg_left.jpg",
"images/bg_right.jpg",
"images/bird1.png",
"images/bird2.png",
"images/birdandrubbish.png",
"images/btn_back.png",
"images/btn_go.png",
"images/btn_play.png",
"images/chair.png",
"images/chair2.png",
"images/dishangrubbish.png",
"images/dont_litter.png",
"images/dont_poopee.png",
"images/dont_sit_on_it.png",
"images/dragrubbish.png",
"images/droprubbish1.png",
"images/droprubbish2.png",
"images/droprubbish3.png",
"images/droprubbishbin1.png",
"images/droprubbishbin2.png",
"images/droprubbishbin3.png",
"images/end_bg.png",
"images/feng.png",
"images/flyrubbish.png",
"images/ghostout1.png",
"images/ghostout2.png",
"images/ghostpoopee1.png",
"images/ghostpoopee2.png",
"images/ghostrrun1.png",
"images/ghostrrun2.png",
"images/hengping.png",
"images/homePage.jpg",
"images/horse1.png",
"images/horse2.png",
"images/horse3.png",
"images/horse4.png",
"images/horse5.png",
"images/horse6.png",
"images/horse7.png",
"images/horseanimate.png",
"images/lashi1.png",
"images/lashi2.png",
"images/litter.png",
"images/logo.png",
"images/madeshake.png",
"images/nav_bg.jpg",
"images/nav_cloud.png",
"images/nav_poopee.png",
"images/nav_rubbish.png",
"images/nav_wetpaint.png",
"images/navbook_left.png",
"images/navbook_right.png",
"images/pigrun1.png",
"images/pigrun2.png",
"images/pigrun3.png",
"images/poopee.png",
"images/poopeeaction.png",
"images/poopeemove1.png",
"images/poopeemove2.png",
"images/rubbish.png",
"images/rubbishbin.png",
"images/rule.jpg",
"images/shit.png",
"images/sit_on_it.png",
"images/title.png",
"images/watch_out.png",
"images/watch_out2.png",
"images/wetpaint.png",
"images/xingxing.png",
"audio/1sit on it.mp3",
"audio/2Don't sit on it.mp3",
"audio/3litter.mp3",
"audio/4Don't litter.mp3",
"audio/5pee or poo in the park.mp3",
"audio/6Don't pee or poo in the park.mp3",
"audio/caishi.mp3",
"audio/caishiBGM.mp3",
"audio/guafeng.mp3",
"audio/suliaodaipailian.mp3",
"audio/Watch out.mp3"

];
jQuery.imgpreload(the_images, {
    each: function () {
        var status = $(this).data('loaded') ? 'success' : 'error';
        if (status == "success") {
            ++num;
            $("#lodingnum").html((num / the_images.length * 100).toFixed(0) + "%");
        }
    },
    all: function () {
        $("#lodingnum").html("100%");
        setTimeout(function () {
            document.getElementById('loading').style.display = "none";
            $(".p-index").css("display", "block");
        }, 300)
    }
})