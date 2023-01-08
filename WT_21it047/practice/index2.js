// program to generate a multiplication table

// take input from the user
<script>
const number = parseInt(prompt('Enter an integer: '));
const result=0;
//creating a multiplication table
for(let i = 1; i < 11; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
    </script>