$('.abstract').hide();

// Make sure all the elements with a class of "clickme" are visible and bound
// with a click event to toggle the "box" state
$('.papertitle').each(function() {
    $(this).show(0).on('click', function(e) {
        // This is only needed if your using an anchor to target the "box" elements
        e.preventDefault();

        // Find the next "box" element in the DOM
        $(this).next('.abstract').slideToggle('fast');
    });
});
