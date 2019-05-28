
var checkBut = document.querySelector(".check-but");
var inputForm = document.querySelector(".search-form");
var checkMessage = document.querySelector(".check-message");
var bonusesBlock = document.querySelector(".bonuses");
var page1Select = document.querySelector(".el-1");
var page2Select = document.querySelector(".el-2");
var page3Select = document.querySelector(".el-3");
var page1 = document.querySelector(".page-1");
var page2 = document.querySelector(".page-2");
var page3 = document.querySelector(".page-3");
var downButton = document.querySelector(".down-but");
var pages2 = [page2Select, downButton];
var windowCoords = document.documentElement.clientHeight;

page1Select.onclick = function (event){
    page1.classList.remove("dnone");
    page1Select.style.backgroundColor = 'black';
    page1Select.style.borderColor  = 'white';
    page2.classList.add("dnone");
    page2Select.style.backgroundColor = 'white';
    page2Select.style.borderColor  = 'black';
    page3.classList.add("dnone");
    page3Select.style.backgroundColor = 'white';
    page3Select.style.borderColor  = 'black';
}

page3Select.onclick = function (event){
    page1.classList.add("dnone");
    page1Select.style.backgroundColor = 'white';
    page1Select.style.borderColor  = 'black';
    page2.classList.add("dnone");
    page2Select.style.backgroundColor = 'white';
    page2Select.style.borderColor  = 'white';
    page3.classList.remove("dnone");
    page3Select.style.backgroundColor = 'black';
    page3Select.style.borderColor  = 'white';
}

pages2.forEach(function (v) {
    v.onclick = function (event) {
        page1.classList.add("dnone");
        page1Select.style.backgroundColor = 'white';
        page1Select.style.borderColor  = 'black';
        page2.classList.remove("dnone");
        page2Select.style.backgroundColor = 'black';
        page2Select.style.borderColor  = 'white';
        page3.classList.add("dnone");
        page3Select.style.backgroundColor = 'white';
        page3Select.style.borderColor  = 'black';
    }
})

bonusesBlock.onclick = function (event){
    var current_block = event.target;
    var all_text = document.querySelectorAll(".inlayset-content");

    all_text.forEach(function (v) {
        if(v !== current_block.nextElementSibling){
            v.classList.add("dnone");
        }
    });
    if(current_block.tagName === "A"){

        if (current_block.nextElementSibling.classList.contains('dnone')){
            current_block.nextElementSibling.classList.remove('dnone');
        } else{
            current_block.nextElementSibling.classList.add('dnone');
        }
    }
};

checkBut.onclick = function () {
   if(inputForm.value){
       checkMessage.innerText = '  Домен '+ inputForm.value +' - свободен.';
       checkMessage.nextElementSibling.classList.remove("dnone")
   }else{
       alert("Введите домен для проверки");
   }
}


