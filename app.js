var Form1 = document.getElementById("form_1");
var Form2 = document.getElementById("form_2");
var Form3 = document.getElementById("form_3");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var Next3 = document.getElementById("buttonF3")
var option1 = document.getElementById("option_1");
var option2 = document.getElementById("option_2");
var option3 = document.getElementById("option_3");

var InputName = document.getElementById("input_name");
var InputEmail = document.getElementById("input_email");
let ShowName = document.getElementById("Name_user");
let ShowEmail = document.getElementById("Email_user");
var stepsText = document.getElementById("steps_text");

document.getElementById("step_1").checked = true;

Next1.onclick = function() {
    if (InputName.checkValidity() && InputEmail.checkValidity()) {
        Form1.style.left = '-550px';
        Form2.style.left = '40px';
        ShowName.innerText = InputName.value;
        ShowEmail.innerText = InputEmail.value;
        document.getElementById("step_2").checked = true;
        stepsText.innerText = 'Step 2 of 3';
    } else {
        InputName.reportValidity();
        InputEmail.reportValidity();
    }
};

Next2.onclick = function() {
    const activeOptions = document.querySelectorAll('#form_2 .option.active');
    if (activeOptions.length > 0) {
        Form2.style.left = '-552px';
        Form3.style.left = '40px';
        document.getElementById("step_3").checked = true;
        stepsText.innerText = 'Step 3 of 3';
        CheckActiveClass(activeOptions);
    } else {
        alert("Pick at least one option");
    }
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

Next3.addEventListener("click",() => {
    alert("Success")
});

const CheckActiveClass = (activeOptions) => {
    const thirdFormList = document.getElementById('Options_list');
    thirdFormList.innerHTML = ''; // Clear the existing list

    // Create list items for each active option
    activeOptions.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option.textContent; // Use textContent to get the text inside the option element
        thirdFormList.appendChild(li);
    });
};
