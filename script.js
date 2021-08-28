

// function for filters on small screens    !!!!!!!!
function showFilters(){
    let filter = document.querySelector(".filters-div");
    let filtersX = document.querySelector(".filters-x");
    let filtersList = document.querySelector(".filters");
    let foreground = document.querySelector(".foreground");
    let body = document.querySelector("body");
    let apply = document.querySelector(".apply");

    function filtersToggle(){
        body.style.height = window.screen.height;
        filtersList.classList.toggle("filtersBlock");
        foreground.classList.toggle("foregroundBlock");
        body.classList.toggle("bodyFroze");
        filtersX.classList.toggle("blockdisplay");
        apply.classList.toggle("blockdisplay");
    };
    function filtersOff ( ){
        filtersList.style.animationName = "filters-animation-reverse";
        setTimeout(()=>{
            filtersToggle();
            filtersList.style.animationName = "filters-animation";
        }, 300);
    };
    function filtersApply ( ){
        filtersList.style.animationName = "filters-animation-apply";
        setTimeout(()=>{
            filtersToggle();
            filtersList.style.animationName = "filters-animation";
        }, 300);
    };
    foreground.addEventListener("click", filtersOff);
    apply.addEventListener("click", filtersApply);
    filter.addEventListener("click", filtersToggle);
    filtersX.addEventListener("click", filtersOff);
     
};
showFilters();

//  FUNCTION FOR FAVORITE LIST       !!!!!!!!!!!

function favoriteList () {
    let arr = document.querySelectorAll(".heard");
    heardsArr = [...arr];

    function srcCreator() {
        if(!JSON.parse(localStorage.getItem("data"))){
            let srcObj = {};
            for(let i = 0; i<heardsArr.length; i++){
                let src = "./haypost-imgs/Vector 42.png";
                srcObj[i] = src;
            }
            localStorage.setItem("data", JSON.stringify(srcObj));
        }else{
            srcObj = JSON.parse(localStorage.getItem("data"));
        }
        return srcObj;
    }
    srcCreator();

    function imgRender(){
        heardsArr.forEach((el, index)=>{
            let img = document.createElement("img");
            let data = JSON.parse(localStorage.getItem("data"));
            img.src = data[index];
            el.appendChild(img);

        })  ;
    };
    imgRender();

    function imgChange (){
        heardsArr.forEach((el, i)=>{
            el.addEventListener("click", ()=>{
                let data = JSON.parse(localStorage.getItem("data"));
                if(data[i] === "./haypost-imgs/Vector 42.png"){
                    data[i] = "./haypost-imgs/blueheard.png"
                }else{
                    data[i] = "./haypost-imgs/Vector 42.png"
                }
                localStorage.setItem("data", JSON.stringify(data));
                heardsArr.forEach((e, ind)=>{
                    e.innerHTML = ""
                })
                imgRender()
                el.firstChild.classList.toggle("big-heard-basket");
            })
        })
    }
    imgChange()  
}
favoriteList();


//  FUNCTION FOR BASKET   !!!!!!!!!

function addProductInBasket() {
    let src1 = "./haypost-imgs/Frame 277.png";
    let src2 = "./haypost-imgs/basket.png";
    let basketDivs = [...document.querySelectorAll(".basket")];

    function srcCreate (){
        if(!localStorage.getItem("basketData")){
            let startData = basketDivs.map((el, index)=>{
                el=src1
                return el
            })
            localStorage.setItem("basketData", JSON.stringify(startData))
        }else{
            startData = JSON.parse(localStorage.getItem("basketData"))
        }
        return startData
    }
    srcCreate()

    function drawBaskets(){
        let basketCount = document.querySelector(".basket-count-number")
        let data = JSON.parse(localStorage.getItem("basketData"));
        basketDivs.forEach((el, index)=>{
            let img = document.createElement("img");
            img.src = data[index];
            el.appendChild(img);
        })

        if(!localStorage.getItem("basketNumber")){
            basketCount.innerHTML = "0"
        }else{
            let basketNumber = JSON.parse(localStorage.getItem("basketNumber"));
            basketCount.innerHTML = basketNumber

        }

    }
    drawBaskets()

    function changeBasket(){
        let data = JSON.parse(localStorage.getItem("basketData"))
        basketDivs.forEach((el, index)=>{
            el.addEventListener("click", ()=>{
                if(data[index] === src1){
                    data[index] = src2
                }else{
                    data[index] = src1
                }
                localStorage.setItem("basketData", JSON.stringify(data))
                basketDivs.forEach(e=>{
                    e.innerHTML = ""
                
                let filteredData = data.filter(el =>el === src2)
                localStorage.setItem("basketNumber", JSON.stringify(filteredData.length))
                });
                drawBaskets()
                el.firstChild.classList.toggle("big-heard-basket")
            })
        })
    }
    changeBasket()
}
addProductInBasket()


// FUNCTION FOR RANGE PRICE IN FILTERSLIST!!!!!!!

function rangePrice () {
    let range = document.querySelector(".range-input");
    let price = document.querySelector(".range-price");
    // range.addEventListener("mousemove", ()=>{
    //     price.innerHTML = `${range.value * 500} ֏`
    // });
    range.addEventListener("mousedown", ()=>{
        price.innerHTML = `${range.value * 500} ֏`;
        range.addEventListener("mousemove", ()=>{
            price.innerHTML = `${range.value * 500} ֏`
        });
    });
}
rangePrice()



