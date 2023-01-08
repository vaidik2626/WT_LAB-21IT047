<script>
    let now=new Date();
    document.getElementById("nu1").innerHTML =now;
    let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(-4);
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("CHARUSAT","IIT CHANGA");
}
let number = Math.ceil(4.3);
console.log(number); 
console.log(hoist); 

var hoist = 'The variable has been hoisted.';
var hoist;

console.log(hoist); 
hoist = 'The variable has been hoisted.';
</script>