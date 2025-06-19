// Select the output display
const output = document.getElementById("output");

// Select all buttons
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "=") {
            try {
                output.value = eval(output.value.replace("×", "*").replace("%", "/100"));
            } catch {
                output.value = "Error";
            }
        } else if (value === "AC") {
            output.value = "";
        } else if (value === "Del") {
            output.value = output.value.slice(0, -1);
        } else {
            output.value += value;
        }
    });
});
