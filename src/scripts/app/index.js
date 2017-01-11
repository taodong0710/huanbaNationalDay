//每个的行走的时间
var second = 100;
//行走一次圆圈的个数
var length = 7;
//记录圆圈走的状态
var state = { grounp: 0, index: 1, move: true };
var timer;
//顺时针走的定时器
function change() {
    if (state.index == 1) {
        $("body.step .slice:eq(" + state.grounp + ")").addClass("run");
        if (state.grounp > 0) {
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("run");
            $("body.step .slice:eq(" + state.grounp + ")").removeClass("next").addClass("run");
        }
        $("body.step .slice:eq(" + (state.grounp) + ") .big-round").removeClass("active");
    } else if (state.index == length) {
        $("body.step .slice:eq(" + state.grounp + ")").addClass("active");
        state.grounp++;
        $("body.step .slice:eq(" + state.grounp + ")").addClass("next");
        $("body.step .slice:eq(" + (state.grounp) + ") .big-round").addClass("active");

    } else {
        $("body.step .run .small-round:eq(" + (state.index - 2) + ")").addClass("active");
    }
    state.index++;
    if (state.index == 8) {
        clearInterval(timer);
        state.index = 1;
    }
}
//逆时针走的定时器
function rechange() {
    if (state.index == length) {
        if (state.grounp > 0) {
            $("body.step .slice:eq(" + (state.grounp) + ")").addClass("pre");
            $("body.step .slice:eq(" + (state.grounp) + ") .big-round").addClass("pre");
            $("body.step .slice:eq(" + (state.grounp) + ") .big-round").removeClass("active");
            $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("next");
        }
    } else if (state.index == 1) {
        if (state.grounp > 0) {
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("pre");
            $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round").removeClass("pre");
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("active");
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("run").addClass("next");
            $("body.step .slice:eq(" + (state.grounp - 1) + ") .big-round").addClass("active");
        }
        state.grounp--;
        if (state.grounp == 0) {
            $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("next");
        }
    } else {
        $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("pre");
        $("body.step .slice:eq(" + (state.grounp) + ") .big-round").removeClass("pre");
        $("body.step .slice:eq(" + (state.grounp - 1) + ")").addClass("pre");
        if (state.index <= 4) {
            $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round:eq(" + (state.index) + ")").removeClass("pre");
        }
        $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round:eq(" + (state.index - 2) + ")").addClass("pre");
        $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round:eq(" + (state.index - 2) + ")").removeClass("active");
    }
    state.index--;
    if (state.index == 0) {
        clearInterval(timer);
        state.index = 7;
    }
}

function rechangeAll() {
    if (state.index == length) {
        if (state.grounp > 0) {
            $("body.step .slice:eq(" + (state.grounp) + ")").addClass("pre");
            $("body.step .slice:eq(" + (state.grounp) + ") .big-round").addClass("pre");
            $("body.step .slice:eq(" + (state.grounp) + ") .big-round").removeClass("active");

        }
        $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("next");
    } else if (state.index == 1) {
        if (state.grounp == 5) {
            $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("run");
            $("body.step .slice:eq(" + (state.grounp) + ") .big-round").removeClass("active");
            $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("next");
        }
        if (state.grounp > 0) {

            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("pre");
            $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round").removeClass("pre");
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("active");
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").removeClass("run").addClass("next");
            $("body.step .slice:eq(" + (state.grounp - 1) + ") .big-round").addClass("active");
        }
        state.grounp--;
        if (state.grounp < 0) {
            $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("next");
            clearInterval(timer);
            state.grounp = 0;
        }
    } else {
        if (state.grounp > 0) {
            $("body.step .slice:eq(" + (state.grounp) + ")").removeClass("pre");
            $("body.step .slice:eq(" + (state.grounp) + ") .big-round").removeClass("pre");
            $("body.step .slice:eq(" + (state.grounp - 1) + ")").addClass("pre");
            if (state.index <= 4) {
                $("body.step .slice:eq(" + (state.grounp) + ") .small-round:eq(" + (state.index) + ")").removeClass("pre");
            }
            $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round:eq(" + (state.index - 2) + ")").addClass("pre");
            $("body.step .slice:eq(" + (state.grounp) + ") .small-round:eq(" + (state.index - 2) + ")").removeClass("active");
        }
        $("body.step .slice:eq(" + (state.grounp - 1) + ") .small-round:eq(" + (state.index - 2) + ")").removeClass("active");
    }
    state.index--;
    if (state.index == 0) {
        state.index = 7;
    }
}

function animation() {
    var startX, startY, endX, endY;
    $('body.step').on('touchmove', function(e) {
        e.preventDefault();
    })
    $('body.step').on('touchstart', function(e) {
        // e.preventDefault();
        var _touch = e.originalEvent.targetTouches[0];
        startX = parseFloat(_touch.pageX);
    });
    $('body.step').on('touchend', function(e) {
        // e.preventDefault();
        var me = this;
        var _touch = e.originalEvent.changedTouches[0];
        endX = parseFloat(_touch.pageX);
        var X = endX - startX;
        if (!state.move) {
            X = 0;
        }
        //顺时针动画
        function clockwise(i) {
            state.move = false;
            if (i == 5) {
                $("body.step .main-pic img:eq(" + i + ")").animate({ opacity: 0 }, 500, function() {
                    $(this).removeClass("active");
                    $("body.step .main-pic img:eq(" + (i - 5) + ")").addClass("active");
                    $(me).removeClass("step" + i + "").addClass("step" + (i - 5) + "");
                    $("body.step .slice:eq(" + i + ")").addClass("run");
                    //给文字添加class
                    $("body.step .title .txt" + (i) + "").removeClass("active one");
                    $("body.step .title .txt" + (i - 5) + "").addClass("active one");
                    //给内容添加class
                    $("body.step .content .txt" + (i) + "").removeClass("active one");
                    $("body.step .content .txt" + (i - 5) + "").addClass("active one");
                    //给指示点增减class
                    $("body.step .points .point" + (i) + "").removeClass("active");
                    $("body.step .points .point" + (i - 5) + "").addClass("active");
                    timer = setInterval('rechangeAll()', second / 3);
                });
                $("body.step .main-pic img:eq(" + (i - 5) + ")").animate({ opacity: 1 }, {
                    duration: 2000,
                    queue: false,
                    complete: function() {
                        state.move = true;
                    }
                });
            } else {
                $("body.step .main-pic img:eq(" + i + ")").animate({ opacity: 0 }, 500, function() {
                    $(this).removeClass("active");
                    $("body.step .main-pic img:eq(" + (i + 1) + ")").addClass("active");
                    $(me).removeClass("step" + i + "").addClass("step" + (i + 1) + "");
                    $("body.step .slice:eq(" + i + ")").addClass("run");
                    //给文字添加class
                    $("body.step .title .txt" + (i) + "").removeClass("active one");
                    $("body.step .title .txt" + (i + 1) + "").addClass("active one");
                    //给内容添加class
                    $("body.step .content .txt" + (i) + "").removeClass("active one");
                    $("body.step .content .txt" + (i + 1) + "").addClass("active one");
                    //给指示点增减class
                    $("body.step .points .point" + (i) + "").removeClass("active");
                    $("body.step .points .point" + (i + 1) + "").addClass("active");
                    timer = setInterval('change()', second);
                });
                $("body.step .main-pic img:eq(" + (i + 1) + ")").animate({ opacity: 1 }, { duration: 2000, queue: false, complete: function() { state.move = true; } });
            }
        }
        //逆时针动画
        function anticlockwise(i) {
            state.move = false;
            $("body.step .main-pic img:eq(" + i + ")").animate({ opacity: 0 }, 500, function() {
                $(this).removeClass("active");
                $("body.step .main-pic img:eq(" + (i - 1) + ")").addClass("active");
                $(me).removeClass("step" + i + "").addClass("step" + (i - 1) + "");
                //给文字添加class
                $("body.step .title .txt" + (i) + "").removeClass("active one");
                $("body.step .title .txt" + (i - 1) + "").addClass("active one");
                //给内容增减class
                $("body.step .content .txt" + (i) + "").removeClass("active one");
                $("body.step .content .txt" + (i - 1) + "").addClass("active one");
                //给指示点增减class
                $("body.step .points .point" + (i) + "").removeClass("active");
                $("body.step .points .point" + (i - 1) + "").addClass("active");
                timer = setInterval('rechange()', second);
            });
            $("body.step .main-pic img:eq(" + (i - 1) + ")").animate({ opacity: 1 }, { duration: 2000, queue: false, complete: function() { state.move = true; } });

        }

        //上滑的添加触发事件
        if (X < -50) {
            state.index = 1;
            if ($(this).hasClass("step0")) {
                $("body.step .main-pic img:eq(0)").removeClass("one");
                $("body.step .title .txt").removeClass("one");
                $("body.step .content .txt").removeClass("one");
                clockwise(0);
            } else if ($(this).hasClass("step1")) {
                clockwise(1);
            } else if ($(this).hasClass("step2")) {
                clockwise(2);
            } else if ($(this).hasClass("step3")) {
                clockwise(3);
            } else if ($(this).hasClass("step4")) {
                clockwise(4);
            } else if ($(this).hasClass("step5")) {
                clockwise(5);
            }
            //增加下滑的触发动画
        } else if (X > 50) {
            state.index = 7;
            if ($(this).hasClass("step5")) {
                anticlockwise(5);
            } else if ($(this).hasClass("step4")) {
                anticlockwise(4);
            } else if ($(this).hasClass("step3")) {
                anticlockwise(3);
            } else if ($(this).hasClass("step2")) {
                anticlockwise(2);
            } else if ($(this).hasClass("step1")) {
                anticlockwise(1);
            }
        }
    });
}

$(document).ready(function() {
    $("#sharebtn").bind('click tap', function() { $("body.step .cover").addClass("active");
        $("body.step .box").addClass("active"); });
    $("body.step .cover").bind('click tap', function() { $("body.step .cover").removeClass("active") });
    animation();
})
