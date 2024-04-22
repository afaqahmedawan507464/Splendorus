let slidernumber = 1;
slidermovedata(slidernumber);

function nextandprevious(n){
    slidermovedata(slidernumber+=n);
}

function slidermovedata(n){
    let sliderdata = document.getElementsByClassName("sliderdata");
    if(n > sliderdata.length){
       slidernumber = 1
    }
    if(n < 1){
        slidernumber = sliderdata.length
    }
    let i;
    for(i = 0; i < sliderdata.length; i++){
        sliderdata[i].style.display = "none";
    }
    sliderdata[slidernumber-1].style.display = "flex";

    // animation slider autochange images
    // slidernumber++;
    // if(slidernumber>sliderdata.length){
    //     slidernumber = 1
    // }
    // sliderdata[slidernumber-1].style.display = "flex";
    // setTimeout(slidermovedata,3000);

    //settimeout(functionname,settimeinmiliseconds);
}