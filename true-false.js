/*
false values
0
"" (empty string)
NaN
null
undefined
false
----------
true values
"0"
" " (string with whitespace)
[] (empty array)
{} (empty object)
*/

const name = "0";
if (name){
    console.log("is true");
}
else {
    console.log("is false");
}
