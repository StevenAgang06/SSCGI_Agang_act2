$(document).ready(function(){
    $(".github").on("mouseover",function(){
        $(".github img").attr("src","../img/github_white.png");
    });
    $(".github").on("mouseout",function(){
        $(".github img").attr("src","../img/github.png");
    });
});
