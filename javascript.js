let x = 0;
let array = new Array();

function add_element_by_array() {
    array[x] = document.getElementById("in-num").value;
    alert("Element" + array[x] + "Added at index" + x);
    x++;
    document.getElementById("in-num").value = "";
}

function displayArray() {
    let e = "<hr>";
    for (let i = 0; i <array.length; i++) {
        e += "Element:" + i + "=" + array[i] + "</br>";
    }
    document.getElementById("result").innerHTML = e;
}