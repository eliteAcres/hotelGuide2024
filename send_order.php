<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST['product'];
    $quantity = $_POST['quantity'];
    $customer_name = $_POST['customer_name'];

    // Set up email parameters
    $to = "seaviewmanage@gmail.com";
    $subject = "New Order";
    $message = "Product: $product\n";
    $message .= "Quantity: $quantity\n";
    $message .= "Customer Name: $customer_name\n";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "<p>Thank you for your order. We will contact you shortly.</p>";
    } else {
        echo "<p>Failed to send order. Please try again later.</p>";
    }
}
?>
