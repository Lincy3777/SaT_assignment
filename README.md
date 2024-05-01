# Bone Appetite

This website has several navigation tabs that lead to different pages. The homepage features a logo with a catchy icon and a navigation bar with links to the contact us, about, registration, and order pages. The main body of the page has an image on the left and text on the right, describing the exceptional pizza of the shop. At the bottom of the page is a footer that includes a copyright notice, contact information, and social media icons. 

Clicking on the "Contact" link will take you to a page that displays all the contact information. Clicking on "About" will direct you to an online Italian magazine. The "Register" button allows users to register for various benefits offered by the organization and includes JavaScript validation for the registration process. Clicking on the "Order" button provides users with a simple and uncomplicated way to place their order. Once the order is placed an order summary is displayed.
## output

![Screenshot 2024-05-01 151245](https://github.com/Lincy3777/SaT_assignment/assets/156225992/0b1891db-3e84-4789-9392-e63fd70bc554)
All the hyperlinks and the icons in the logo have some transitions to create smooth and gradual changes in the appearance of elements, this is achieved using css.
##### code snippet for the same are as follows
// Hover affect on social Logo icons 
.logo i:hover{<br>
    opacity: 1; 
    transition: opacity 0.0s ease; 
    opacity: 0;
} 
/* Hover affect on links */
li a:hover{
    color: pink;
}
/* Hover affect on button */
button a:hover{
    background-color: rgba(234, 224, 223, 0.7);
}
![Screenshot 2024-05-01 151332](https://github.com/Lincy3777/SaT_assignment/assets/156225992/5b2d09df-55da-4ac1-9d7a-b013b397b845)
/* Hover affect on social media icons */
.socialIcons a:hover{
    background-color: #111;
    transition: 0.5s;
}
.socialIcons a:hover i{
    color: white;
    transition: 0.5s;
}
.footerNav ul li a:hover{
    opacity: 1;
}
All the social media icons direct the user to my linkedin profile
![Screenshot 2024-05-01 151741](https://github.com/Lincy3777/SaT_assignment/assets/156225992/6db28c68-6d30-434d-b19d-28416b896689)
Using bootstrap I have achieve a proper structure for all the elements. I have used font awesome icons for a smooth visual appearance of elements.

![Screenshot 2024-05-01 163214](https://github.com/Lincy3777/SaT_assignment/assets/156225992/36ba47b2-24e7-4a10-a22e-fee841295037)

The main element used in this page is the &lt; form &gt; tag which helps in making the webpage accessible for people with disability. 
&lt; body onload="document.registration.uname.focus();" &gt; once the page loads this piece of code used to focus on the input field name. It helps in improving the usability and enchance accessibility.
    
![Screenshot 2024-05-01 163444](https://github.com/Lincy3777/SaT_assignment/assets/156225992/365e5f30-f187-4cf1-b75c-8e19534e9b62)

    
In this, once the order is placed an order summary is displayed using jquery. 
  
  ##### code snippet for the same is as follows
 <script>
        $(document).ready(function(){
            $('#order-button').click(function(){
                var item = $("#items").val();// fetching the value of items via id into the new variable item using .val()
                var itemQuantity = $("#itemQ").val();
                var addOns = $("#add-ons").val();
                var beverage =$("#beverage").val();
                var bevQuantity = $("#bevQuantity").val();
                var summary = "You order "+ itemQuantity + " " + item + " and add-on " + addOns + " with "+ bevQuantity +" "+beverage ;
                $('#orderSummary').text(summary);
            });
        });
    </script>
