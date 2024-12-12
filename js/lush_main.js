$(() => {

    // Common Alert 
    $('a[href="#"]').click((e) => {
        e.preventDefault();
        $('#alert').stop().hide();
        $('#alert').stop().fadeIn(1000);
        setInterval(() => {
            $('#alert').fadeOut();
        }, 5000)
    })

    // Show Depth Menu by Hamburg Icon Click
    let isDepthActive = true;
    $('.hamburg_menu').click(()=>{
        isDepthActive = !isDepthActive
        if(isDepthActive) {
            $('.depth_menu_container').stop().fadeIn(500);
            $('.hamburg_menu').css({'background-color': "black", "color": "white"})
        } else {
            $('.depth_menu_container').stop().fadeOut(500);
            $('.hamburg_menu').css({'background-color': "white", "color": "black"})
        }
    })

    // Change Video Source By Section 03 List El
    $('#chrismas').click(() => {
        $('.video').remove()
        $('.video_container').append('<iframe class="video" width="800" height="450" src="https://www.youtube.com/embed/T2fg96QVvqk?si=zU-AyvLYqJHgqQCr&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    })
    $('#minions').click(() => {
        $('.video').remove()
        $('.video_container').append('<iframe class="video" width="800" height="450" src="https://www.youtube.com/embed/u1MbCuwwAYE" title="[노벨귀염상] 혹시 나만 기다렸어? 미니언즈 x 러쉬 전제품 소개! 💛" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    })
    $('#perfume').click(() => {
        $('.video').remove()
        $('.video_container').append('<iframe class="video" width="800" height="450" src="https://www.youtube.com/embed/T0bgcA55-t4?si=JrDgCwJ4Jx0ohtxy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    })
    $('#diwali').click(() => {
        $('.video').remove()
        $('.video_container').append('<iframe class="video" width="800" height="450" src="https://www.youtube.com/embed/q6v-lzeFXls?si=eQnLI_GOlsv-0pYF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    })
    $('#ddlm').click(() => {
        $('.video').remove()
        $('.video_container').append('<iframe class="video" width="800" height="450" src="https://www.youtube.com/embed/6JGG7RoSE-M" title="러쉬에서 제일 신기하고 귀여운 샤워 제품 추천🎁🎀🛁" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
    })
})