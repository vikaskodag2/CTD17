(function ($) {
    $(function () {

        $(document).ready(function () {
            $('.parallax').parallax();
            $('.dropdown-button').dropdown({
                constrain_width: false,
                belowOrigin: true,
            });
            $('.scrollspy').scrollSpy();
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space