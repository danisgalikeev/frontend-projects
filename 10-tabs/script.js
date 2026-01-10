const first_tab_btn = document.querySelector('.first');
const second_tab_btn = document.querySelector('.second');
const third_tab_btn = document.querySelector('.third');
const fourth_tab_btn = document.querySelector('.fourth');
const tabs_content = document.querySelector('.tabs-content');

const tabs_content_arr = ['text1', 'text2', 'text3', 'text4'];

first_tab_btn.addEventListener('click', ()=> tabs_content.innerHTML = tabs_content_arr[0]);
second_tab_btn.addEventListener('click', ()=> tabs_content.innerHTML = tabs_content_arr[1]);
third_tab_btn.addEventListener('click', ()=> tabs_content.innerHTML = tabs_content_arr[2]);
fourth_tab_btn.addEventListener('click', ()=> tabs_content.innerHTML = tabs_content_arr[3]);

