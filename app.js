$(document).ready(function() {
    $(".toggleNav").click(function() {
        $(".openNav").toggleClass("hidden");
        $(".closeNav").toggleClass("hidden");
        $(".navList").toggleClass("h-0");
        $(".navList").toggleClass("h-52");
        $(".toggleNav").toggleClass("border-2");
    }) 

    const sections = $('section');
    
    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();
        const windowHeight = $(this).height();
    
        //agar pada saat scrolling tidak membuat hover tampil secara tidak benar
        $(this).css("cursor", "default")
        
        sections.each(function () {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).outerHeight();
            console.log(sectionHeight)
            // Periksa jika bagian ini dominan atau tidak
            const isDominant = (sectionTop <= currentScroll + windowHeight / 2) && (sectionTop + sectionHeight > currentScroll + windowHeight / 2);
    
            // Jika bagian ini dominan, tambahkan kelas 'active'
            if (isDominant) { //jadi setiap section di cek kemudian apabila 
                $('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                $('a[href="#' + $(this).attr('id') + '"]').css("cursor", "default")
            } else {
                // Jika tidak dominan, hapus kelas 'active'
                $('a[href="#' + $(this).attr('id') + '"]').removeClass('active');
                $('a[href="#' + $(this).attr('id') + '"]').css("cursor", "pointer")
            }
        });
    });
})