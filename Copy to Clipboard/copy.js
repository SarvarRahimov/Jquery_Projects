$(document).ready(function(){
    function see(){
        $(".copy").addClass("animation-effect")
    }
    function remove(){
        $(".copy").removeClass("animation-effect")
    }

    $(".copybtn").click(function(){
        $("#writearea").select()
        document.execCommand("copy")
        see();
        setTimeout(remove,5000)
    })
})