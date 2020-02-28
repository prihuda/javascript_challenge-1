const a = "ibu ratna antar ubi"
const b = "kasur ini rusak"
const c = "A nut for a jar of tuna"
const d = "Borrow or rob"
const e = "Was it a car or a cat I saw?"
const f = "Yo, banana boy!"
const g = "UFO tofu?"

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

  console.log(palindrome(a))
  console.log(palindrome(b))
  console.log(palindrome(c))
  console.log(palindrome(d))
  console.log(palindrome(e))
  console.log(palindrome(f))
  console.log(palindrome(g))