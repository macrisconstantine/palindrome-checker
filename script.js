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

function isPallindrome(s) {
  s = s.toString().toLowerCase().replace(/[^a-z0-9]/g, "");
  var left = 0, right = s.length - 1;

  while (left<right) {
    if (s[left]!=s[right]) {
      return false;
    }
  }
  return true;
} // this might be broken