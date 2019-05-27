
var check_but = document.querySelector(".check-but");
var input_form = document.querySelector(".search-form");
var check_message = document.querySelector(".check-message");
var bonuses_block = document.querySelector(".bonuses");
var page1_select = document.querySelector(".el-1");
var page2_select = document.querySelector(".el-2");
var page3_select = document.querySelector(".el-3");
var page1 = document.querySelector(".page-1");
var page2 = document.querySelector(".page-2");
var page3 = document.querySelector(".page-3");
var down_button = document.querySelector(".down");

page1_select.onclick = function (event){
    page1.classList.remove("dnone");
    page1_select.style.backgroundColor = 'black';
    page2.classList.add("dnone");
    page2_select.style.backgroundColor = 'white';
    page3.classList.add("dnone");
    page3_select.style.backgroundColor = 'white';

}
page2_select.onclick = function (event){
    page1.classList.add("dnone");
    page1_select.style.backgroundColor = 'white';
    page2.classList.remove("dnone");
    page2_select.style.backgroundColor = 'black';
    page3.classList.add("dnone");
    page3_select.style.backgroundColor = 'white';
}
page3_select.onclick = function (event){
    page1.classList.add("dnone");
    page1_select.style.backgroundColor = 'white';
    page2.classList.add("dnone");
    page2_select.style.backgroundColor = 'white';
    page3.classList.remove("dnone");
    page3_select.style.backgroundColor = 'black';
}

down_button.onclick = function (event){
    page1.classList.add("dnone");
    page1_select.style.backgroundColor = 'white';
    page2.classList.remove("dnone");
    page2_select.style.backgroundColor = 'black';
    page3.classList.add("dnone");
    page3_select.style.backgroundColor = 'white';
}

bonuses_block.onclick = function (event){

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

check_but.onclick = function () {
   if(input_form.value){
       check_message.innerText = '  Домен '+ input_form.value +' - свободен.';
       check_message.nextElementSibling.classList.remove("dnone")
   }else{
       alert("Введите домен для проверки");
   }
}

