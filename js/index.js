/*background*/
$(document).ready(function(){
    var granimInstance = new Granim({
        element: '#background',
        name: 'basic-gradient',
        direction: 'diagonal', // 'diagonal', 'top-bottom', 'radial'
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#536976', '#292E49'],
                    ['#16222A', '#3A6073'],
                    ['#434343', '#000000'],
                ]
            }
        }
    });
})