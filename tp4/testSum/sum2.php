<?php
    $a = $_POST['num1'];
    $b = $_POST['num2'];

    function add($a, $b) {
        return $a + $b;
    }

    echo add($a, $b);
?> <a href="form2.html">Another Sum</a><?php
?>