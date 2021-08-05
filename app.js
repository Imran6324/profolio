// type.js cdn link
    var type = new Typed('.typing-text',{
        strings : [ 'web designer', 'front end developer', 'codder', 'web developer' ],
        typeSpeed: 120,
        loop:true
    });

    let themeColor = document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('body').style.background = background;
    }));
