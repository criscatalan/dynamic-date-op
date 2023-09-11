<div id="pd3" style="font-size: 35px; text-align: center; color: #44f814; line-height : 25px; font-weight: 900;">
        <del style="font-size: 20px; font-weight: 200;">
        $99.99 USD</del><br>
        $39.99 USD<br>
    <font style="font-size:12px; font-weight: 200;">
        Offer goes here</font>
</div>
<script>
    var precio = 99.99;
    var descuento = 39.99;
    var pd3 = document.querySelector("#pd3");
    fetch("https://ipwhois.app/json/")
  .then((response) => response.json())
  .then((data) =>(pd3.innerHTML='<del style="font-size: 20px; font-weight: 200;">'+ data.currency_symbol + new Intl.NumberFormat("en-US").format((data.currency_rates * precio).toFixed(0)) +' ' + data.currency_code +'</del><br>'+ data.currency_symbol + new Intl.NumberFormat("en-US").format((data.currency_rates * descuento).toFixed(0)) +' ' + data.currency_code +'<br><font style="font-size:12px; font-weight: 200;"><img src="'+ data.country_flag +'" width="17px"> Oferta en  ' + data.city + ',  ' + data.country + '</font>'));
</script>
