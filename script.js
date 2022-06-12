const FindOnPage = () => {
    const input = document.getElementById("text_to_find");
    const li_one = document.getElementById("li_one");
    const li_two = document.getElementById("li_two");
    const li_three = document.getElementById("li_three");
    const li_four = document.getElementById("li_four");
    const li_five = document.getElementById("li_five");
    li_five.textContent = li_four.textContent;
    li_four.textContent = li_three.textContent;
    li_three.textContent = li_two.textContent;
    li_two.textContent = li_one.textContent;
    li_one.textContent = input.value;
}