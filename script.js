function checkClick() {
  const txtInput = document.getElementById('text-input') 
  if (txtInput.value == "") {
    alert("please input a value");
  }
  if (txtInput.value.length == 1) {
    result.innerHTML = txtInput.value + " is a palindrome."
  }
}