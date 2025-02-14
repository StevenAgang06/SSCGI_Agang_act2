$(document).ready(function(){
    // Change the image of the link when hovered
    $(".github").on("mouseover",function(){
        $(".github img").attr("src","../img/github_white.png");
    });
    $(".github").on("mouseout",function(){
        $(".github img").attr("src","../img/github.png");
    });
});
