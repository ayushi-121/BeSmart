const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
<div class="footer" style="display:flex; height:300px ; background-color:black">
    
    <div class="footer_content">
        <div class="footer_menu">
            <h3>Services</h3>
            <ul>
                <li><a href="#">Ordering & Payment</a></li>
                <li><a href="#">Shipment</a></li>
                <li><a href="#">Return/Cancellation</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
                <li><a href="#">Terms&Conditions</a></li>
            </ul>
        </div>
        <div class="footer_menu">
            <h3>Payment Methods</h3>
            <ul>
                <li><a href="#">Paytm</a></li>
                <li><a href="#">Banking</a></li>
                <li><a href="#">Paypal</a></li>
                <li><a href="#">Credit Card</a></li>
            </ul>
        </div>
        <div class="footer_menu">
            <h3>Contact</h3>
            <ul class="contact">
                <div><li><a href="#">abc@gmail.com</a></li></div>
                <div class="icons" style="margin-top: 30px;">
                    <div class="social-menu">
                      <ul>
                          <li><a href="#" target="blank"><i class="fa fa-github"></i></a></li>
                          <li><a href="#" target="blank"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#" target="blank"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#" target="blank"><i class="fa fa-linkedin"></i></a></li>
                          <li><a href="#" target="blank"><i class="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>
                  </div>
            </ul>
        </div><br>
        <div class="clear"></div>
    </div>
    
</div>
<div class="copyright">
    <div class="content">
        <p>&#169;Copyright</p>
        </div>
        <div class="clear"></div>
    </div>
`;
}
createFooter();
