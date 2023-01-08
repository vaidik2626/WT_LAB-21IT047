<script>
var n1= document.getElementbyID("num1");
            var n1 = document.getElementbyID("num2");
            var res = document.getElementbyID("ans");
            document.getElementbyID("sum").addEventListner("click",function() {
                res.value = parseInt(n1.value)+parseInt(n2.value)
            });
            document.getElementbyID("sub").addEventListner("click",function() {
                res.value = parseInt(n1.value)-parseInt(n2.value)
            });
            document.getElementbyID("mul").addEventListner("click",function() {
                res.value = parseInt(n1.value)*parseInt(n2.value)
            });
            document.getElementbyID("div").addEventListner("click",function() {
                res.value = parseInt(n1.value)/parseInt(n2.value);
            });
            alert(res );
</script>