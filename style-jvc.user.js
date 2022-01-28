// ==UserScript==
// @name         style jvc style corrigé
// @version      1.0.0
// @description  Revision du style des pages de jvc
// @author       kateblolo
// @match        https://www.jeuxvideo.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.1/js/all.min.js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==


(function() {
	/* Remplissage des dossiers devant chaque topic */
    $('.icon-topic-folder').addClass('fas fa-folder').removeClass('icon-topic-folder').css("font-size", "1.4em");
    $('.icon-topic-pin').addClass('fas fa-thumbtack').removeClass('icon-topic-pin').css("font-size", "1.4em");
	
	/* Le reste */
    $('.card-header').css('background-color', 'rgba(48, 148, 227,0.5');
    $('.contenu-spoil').css('background-color', '#deeafc');
	
	$('a.topic-title:visited').css('background-color', '#757575');


    if($('body').css('background-color') == 'rgb(34, 37, 42)'){
        $('.layout').css('background-color', '#1d1f24');
        $('.layout__row').css('background-color', '#22252a');
        $('.headerAccount__dropdownItemLabel').css('background-color', '#22252a');
        $('.headerAccount__dropdownItem--unread').css('background-color', 'red');

        $('.topic-head>span,label').css('background-color', '#1d1f24');

        $('.topic-title').css('color', '#4e9cd7');
        $('.topic-title').hover(
            function() {
                $(this).css('color', '#d47e63');
            }, function() {
                $( this ).css('color', '#4e9cd7');
            }
        );


        $('.btn-actualiser-forum,.btn-actu-new-list-forum').css('background-color', '#2e3238').css('border-color', '#636569').css('color', 'white');
        $('.btn-actualiser-forum,.btn-actu-new-list-forum').hover(
                function() {
                    $(this).css('background-color', '#0160ee').css('border-color', '#0160ee').css('color', 'white');
                }, function() {
                    $( this ).css('background-color', '#2e3238').css('border-color', '#636569').css('color', 'white');
                }
            );
    }else{
        $('.layout').css('background-color', '#E0E0E0');
        $('.layout__row').css('background-color', '#f2f2f2');
        $('.topic-head>span,label').css('background-color', '#E0E0E0');

        $('.topic-title').css('color', '#2D80BF');
        $('.topic-title').hover(
            function() {
                $(this).css('color', '#d47e63');
            }, function() {
                $( this ).css('color', '#2D80BF');
            }
        );



        $('.btn-actualiser-forum,.btn-actu-new-list-forum').css('border-color', '#e0e0e0').css('background-color', '#fff').css('color', 'black').css('font-weight', 'bold');
        $('.btn-actualiser-forum,.btn-actu-new-list-forum').hover(
            function() {
                $(this).css('background-color', '#0160ee').css('border-color', '#0160ee').css('color', 'white');
            }, function() {
                $( this ).css('background', 'white').css('border-color', '#e0e0e0').css('color', 'black');
            }
        );
    }

    $(document).on('click', '.toggleTheme', function(){
        if($('body').css('background-color') == 'rgb(34, 37, 42)'){
            $('.layout').css('background-color', '#1d1f24');
            $('.layout__row').css('background-color', '#22252a');
            $('.topic-head>span,label').css('background-color', '#1d1f24');


            $('.topic-title').css('color', '#4e9cd7');
            $('.topic-title').hover(
                function() {
                    $(this).css('color', '#d47e63');
                }, function() {
                    $( this ).css('color', '#4e9cd7');
                }
            );


            $('.btn-actualiser-forum,.btn-actu-new-list-forum').css('background-color', '#2e3238').css('border-color', '#636569').css('color', 'white');
            $('.btn-actualiser-forum,.btn-actu-new-list-forum').hover(
                function() {
                    $(this).css('background-color', '#0160ee').css('border-color', '#0160ee').css('color', 'white');
                }, function() {
                    $( this ).css('background-color', '#2e3238').css('border-color', '#636569').css('color', 'white');
                }
            );
        }else{
            $('.layout').css('background-color', '#E0E0E0');
            $('.layout__row').css('background-color', '#f2f2f2');
            $('.topic-head>span,label').css('background-color', '#E0E0E0');
            $('.topic-title').css('color', '#2D80BF');
            $('.topic-title').hover(
                function() {
                    $(this).css('color', '#d47e63');
                }, function() {
                    $( this ).css('color', '#2D80BF');
                }
            );



            $('.btn-actualiser-forum,.btn-actu-new-list-forum').css('border-color', '#e0e0e0').css('background-color', '#fff').css('color', 'black').css('font-weight', 'bold');
            $('.btn-actualiser-forum,.btn-actu-new-list-forum').hover(
                function() {
                    $(this).css('background-color', '#0160ee').css('border-color', '#0160ee').css('color', 'white');
                }, function() {
                    $( this ).css('background', 'white').css('border-color', '#e0e0e0').css('color', 'black');
                }
            );
        }
    });
})();