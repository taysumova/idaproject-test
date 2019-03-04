let x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = $(".custom-select");
x.each(function(i) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    $(a).addClass("select-selected").html(selElmnt.options[selElmnt.selectedIndex].innerHTML).on("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        $(this).toggleClass("select-arrow-active");
    });
    $(x[i]).append(a);

    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    $(b).addClass("select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        $(c).on("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            let y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    $(this).addClass("same-as-selected");
                    break;
                }
            }
            h.click();
        });
        $(b).append(c);
    }
    $(x[i]).append(b);
});

function closeAllSelect(el) {
    let $x,
        $y,
        i,
        arrNo = [];
    $x = $(".select-items");
    $y = $(".select-selected");

    for (i = 0; i < $y.length; i++) {
        if (el === $y[i]) {
            arrNo.push(i)
        } else {
            $($y[i]).removeClass("select-arrow-active");
        }
    }
    for (i = 0; i < $x.length; i++) {
        if (arrNo.indexOf(i)) {
            $($x[i]).addClass("select-hide");
        }
    }
}
$("body").on("click", closeAllSelect);