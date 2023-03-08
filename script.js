$('.register-link').click(() => { 
    $('.wrapper .form-box.register').css({
        'transform': 'translateX(0px)',
        'display':'block'
    })
    $('#form-box_login').css({
        'display':'none'
    })
})

$('.login-link').click(() => { 
    
    $('.wrapper .form-box.register').css({
        'display':'none'
    })
    $('#form-box_login').css({
        'display':'block'
    })
})