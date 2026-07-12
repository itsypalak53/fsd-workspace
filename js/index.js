<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics & Arrays</title>
</head>
<body>

    <h1>Array</h1>
    
    <script>
        // --- Setup and Basics ---
        console.log("hello palak");

        /* multi line comment */

        // let , var , const
        // var - global scope - redeclare✅ , update✅
        // let - block scope -   redeclare❎ , update✅
        // const - block scope - redeclare❎ , update❎

        // ------------ var ------------
        // var a = 10;
        // console.log(a);
        // var a = 20;
        // console.log(a);
        // a = 30;
        // console.log(a);

        // ------------ let ------------
        // let a = 33;
        // console.log(a);
        // a = 44;
        // console.log(a);

        // --------- const ----------
        // const a = 55;
        // console.log(a);


        // --------- data types--------
        // 1) primitive types
        // 2) non-primitive types

        // ********* primitive types **********
        // a. number(10)
        // b. string("vishal")
        // c. boolean(true)
        // d. null
        // e. undefined
        // f. symbol
        // g. bigint

        // ********* non-primitive types **********
        // a) Array  b) object 

        // let arrSample = [1, 2, 3, 4, "palak", true]

        // const obj = {
        //     // key:value
        //     age: 34,
        //     name: "palak",
        // }
        // console.log(obj["age"]);

        // --------- naming convention -----
        // camel case -
        // const myName = "palak"

        // snake case -
        // const my_name = "palak"

        let name = "palak";
        console.log(typeof name);
        document.write(typeof name + " " + name); // Added spacing so it prints clearly on screen


        // --------- Array Operations ---------
        // Index:    0, 1  2  3     4           5     6
        let arr = [1, 2, 3, true, [12, 4, 6], null, "palak"]; // mixed type datatype
        // console.log(arr[6]);
        // console.log(arr.length);
        // console.log(arr[3]);
        // console.log(arr[4][0]);

        arr.push("hello guys"); // add element at last
        console.log("After push:", arr);

        arr.pop(); // remove last element
        console.log("After pop:", arr);

        arr.unshift("hi vishal"); // add element at first
        console.log("After unshift:", arr);

        arr.shift(); // remove first element
        console.log("After shift:", arr);

        arr[0] = "hello"; // update element at index 0
        console.log("After modifying index 0:", arr);

        arr[10] = "last 10 index"; // add element at index 10 (creates empty slots in between)
        console.log("After adding index 10:", arr);
        
    </script>
</body>
</html>