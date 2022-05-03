function anagram(str1,str2) {
   let a = str1.split("");
   let b = str2.split("");
   a.sort();
   b.sort();
   a = a.join();
   b = b.join();
   console.log(a == b)
}

anagram("arms","mars")

// by Cameron with help from Somesh