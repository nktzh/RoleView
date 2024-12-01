const hierarchyContent = document.querySelector('.hierarchy_content');
let isMouseDown = false;

hierarchyContent.addEventListener('mousedown', function(e) {
    isMouseDown = true;
    hierarchyContent.style.cursor = 'grabbing';
});

hierarchyContent.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
        const deltaX = e.movementX;
        const deltaY = e.movementY;

        hierarchyContent.scrollLeft -= deltaX;
        hierarchyContent.scrollTop -= deltaY;
      }
});

hierarchyContent.addEventListener('mouseup', function() {
    isMouseDown = false;
    hierarchyContent.style.cursor = 'grab';
});

hierarchyContent.addEventListener('mouseleave', function() {
    isMouseDown = false;
    hierarchyContent.style.cursor = 'grab';
});

let main_b = document.querySelector('.main_b').offsetWidth;
let main = ($( ".main_b" ));
let mainX = main.left + 
console.log(' ' + main_b);