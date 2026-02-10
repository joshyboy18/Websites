
var added = false;
const sel = document.createElement("select");
    sel.id = "dates_selected";
    sel.name = "dates_selected[]";
    sel.multiple = true;
    sel.size = 5;

sel.classList.add("selector-box");

function addDate() {

    const dates = document.getElementById("date_input");
  
    if (dates.value == null) {

        alert("Please select a date to add.");
    }

    
    else {

        if (!added) {

        dates.after(sel);
        added = true;

      }

        sel.innerHTML += '<option value = "' + dates.value + '">' + dates.value + '</option>';
    }

}

function removeEverything() {

    sel.innerHTML = "";
    sel.remove();
    added = false;
}

function addToForm() {

    var datesArray = [];

    for (var i = 0; i < sel.options.length; i++) {

        datesArray.push(sel.options[i].value);
    }
}

function resetDates() {

    sel.innerHTML = "";

}