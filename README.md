# Bone Appetite

This website has several navigation tabs that lead to different pages. The homepage features a logo with a catchy icon and a navigation bar with links to the contact us, about, registration, and order pages. The main body of the page has an image on the left and text on the right, describing the exceptional pizza of the shop. At the bottom of the page is a footer that includes a copyright notice, contact information, and social media icons. 

Clicking on the "Contact" link will take you to a page that displays all the contact information. Clicking on "About" will direct you to an online Italian magazine. The "Register" button allows users to register for various benefits offered by the organization and includes JavaScript validation for the registration process. Clicking on the "Order" button provides users with a simple and uncomplicated way to place their order. Once the order is placed an order summary is displayed.
## output

![Screenshot 2024-05-01 151245](https://github.com/Lincy3777/SaT_assignment/assets/156225992/0b1891db-3e84-4789-9392-e63fd70bc554)
All the hyperlinks and the icons in the logo have some transitions to create smooth and gradual changes in the appearance of elements, this is achieved using css.
##### code snippet for the same are as follows
// Hover affect on social Logo icons <br>
.logo i:hover{<br>
    opacity: 1; <br>
    transition: opacity 0.0s ease; <br>
    opacity: 0;<br>
} 
// Hover affect on links<br>
li a:hover{<br>
    color: pink;<br>
}
// Hover affect on button<br>
button a:hover{<br>
    background-color: rgba(234, 224, 223, 0.7);<br>
}<br>
![Screenshot 2024-05-01 151332](https://github.com/Lincy3777/SaT_assignment/assets/156225992/5b2d09df-55da-4ac1-9d7a-b013b397b845)
<br>// Hover affect on social media icons<br>
.socialIcons a:hover{<br>
    background-color: #111;<br>
    transition: 0.5s;<br>
}<br>
.socialIcons a:hover i{<br>
    color: white;<br>
    transition: 0.5s;<br>
}<br>
.footerNav ul li a:hover{<br>
    opacity: 1;<br>
}<br>
All the social media icons direct the user to my linkedin profile
![Screenshot 2024-05-01 151741](https://github.com/Lincy3777/SaT_assignment/assets/156225992/6db28c68-6d30-434d-b19d-28416b896689)
<br>Using bootstrap I have achieve a proper structure for all the elements. I have used font awesome icons for a smooth visual appearance of elements.

![Screenshot 2024-05-01 163214](https://github.com/Lincy3777/SaT_assignment/assets/156225992/36ba47b2-24e7-4a10-a22e-fee841295037)

The main element used in this page is the &lt; form &gt; tag which helps in making the webpage accessible for people with disability. 
&lt;body onload="document.registration.uname.focus();" &gt; once the page loads this piece of code used to focus on the input field name. It helps in improving the usability and enchance accessibility.
    
![Screenshot 2024-05-01 163444](https://github.com/Lincy3777/SaT_assignment/assets/156225992/365e5f30-f187-4cf1-b75c-8e19534e9b62)

In this, once the order is placed an order summary is displayed using jquery.   
  ##### code snippet for the same is as follows
 <script><br>
        $(document).ready(function(){<br>
            $('#order-button').click(function(){<br>
                var item = $("#items").val();// fetching the value of items via id into the new variable item using .val()<br>
                var itemQuantity = $("#itemQ").val();<br>
                var addOns = $("#add-ons").val();<br>
                var beverage =$("#beverage").val();<br>
                var bevQuantity = $("#bevQuantity").val();<br>
                var summary = "You order "+ itemQuantity + " " + item + " and add-on " + addOns + " with "+ bevQuantity +" "+beverage ;<br>
                $('#orderSummary').text(summary);<br>
            });<br>
        });<br>
    </script>
