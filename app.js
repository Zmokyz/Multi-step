var Form1 = document.getElementById("form_1");
var Form2 = document.getElementById("form_2");
var Form3 = document.getElementById("form_3");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var option1 = document.getElementById("option_1");
var option2 = document.getElementById("option_2");
var option3 = document.getElementById("option_3");

var InputName = document.getElementById("input_name");
var InputEmail = document.getElementById("input_email");
var ShowName = document.getElementById("Name_user");
var ShowEmail = document.getElementById("Email_user");
var stepsText = document.getElementById("steps_text");

document.getElementById("step_1").checked = true;

Next1.onclick = function() {
    Form1.style.left = '-550px';
    Form2.style.left = '40px';
    ShowName.innerText = InputName.value;
    ShowEmail.innerText = InputEmail.value;
    document.getElementById("step_2").checked = true;
    stepsText.innerText = 'Step 2 of 3';
};

Next2.onclick = function() {
    Form2.style.left = '-552px';
    Form3.style.left = '40px';
    document.getElementById("step_3").checked = true;
    stepsText.innerText = 'Step 3 of 3';
    CheckActiveClass();
};

option1.addEventListener('click', () => {
    option1.classList.toggle('active');
});

option2.addEventListener('click', () => {
    option2.classList.toggle('active');
});

option3.addEventListener('click', () => {
    option3.classList.toggle('active');
});

const CheckActiveClass = () => {
    const activeOptions = document.querySelectorAll('#form_2 .option.active');
    const thirdFormList = document.getElementById('Options_list');
    thirdFormList.innerHTML = '';

    // Create list items for each active option
    activeOptions.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option.textContent;
        li.classList.add("option_list") 
        thirdFormList.appendChild(li);
    });
};
