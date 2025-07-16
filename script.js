function checkClick() {
  const txtInput = document.getElementById('text-input') 
  if (txtInput.value == "") {
    alert("please input a value");
  }
  if (txtInput.value.length == 1 || isPallindrome(txtInput)) {
    result.innerHTML = txtInput.value + " is a palindrome."
  } else
  {
    result.innerHTML = txtInput.value + " is NOT a palindrome."
  }
}