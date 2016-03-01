$(document).ready(function () {
    var $botonRojo = $('#botonRojo');
    var $botonNaranja = $('#botonNaranja');
    var $botonAmarillo = $('#botonAmarillo');
    var $botonVerde = $('#botonVerde');
    var $botonTurquesa = $('#botonTurquesa');
    var $botonAzul = $('#botonAzul');
    var $botonGris = $('#botonGris');

    var $pupila = $('#ojo1');

    //hay 219 escamas
    $botonRojo.on("click", function () {
        cambiaRojo();
        mueveOjo();
    })

    function cambiaRojo() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#F2BEB1'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#BB4042'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#F2BEB1"
        });
    }
    $botonNaranja.on("click", function () {
        cambiaNaranja();
        mueveOjo();
    })

    function cambiaNaranja() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#F9B882'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#D14124'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#F9B882"
        });
    }

    $botonAmarillo.on("click", function () {
        cambiaAmarillo();
        mueveOjo();
    })

    function cambiaAmarillo() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#EFC66A'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#BC6C0D'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#EFC66A"
        });
    }

    $botonVerde.on("click", function () {
        cambiaVerde();
        mueveOjo();
    })

    function cambiaVerde() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#DDDA83'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#82842C'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#DDDA83"
        });
    }

    $botonTurquesa.on("click", function () {
        cambiaTurquesa();
        mueveOjo();
    })

    function cambiaTurquesa() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#AFEFBC'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#1D7C70'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#AFEFBC"
        });
    }

    $botonAzul.on("click", function () {
        cambiaAzul();
        mueveOjo();
    })

    function cambiaAzul() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#99C6BE'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#195E63'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#99C6BE"
        });
    }

    $botonGris.on("click", function () {
        cambiaGris();
        mueveOjo();
    })

    function cambiaGris() {

        var tl = new TimelineMax()
        tl.to("#gradiente stop:nth-child(1)", 2, {
            attr: {
                offset: '0%'
            },
            stopColor: '#A8A7A7'
        })
          .to("#gradiente stop:nth-child(2)", 2, {
              attr: {
                  offset: '100%'
              },
              stopColor: '#383845'
          })
        TweenMax.to("body", 1, {
            backgroundColor: "#A8A7A7"
        });
    }

    function mueveOjo() {

        TweenMax.to($pupila, 1, {
            x: 9,
            y: -5,
            yoyo: true
        });
        TweenMax.to($pupila, 1, {
            x: 5,
            y: 5,
            yoyo: true,
            delay: 1
        });
        TweenMax.to($pupila, 1, {
            x: 0,
            y: 0,
            delay: 2
        })
    }

});