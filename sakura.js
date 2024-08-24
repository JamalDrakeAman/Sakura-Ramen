function DE(){
    document.getElementById('menu').innerHTML = 'SPEISEKARTE'
    document.getElementById('locations').innerHTML = 'STANDORTE'
    document.getElementById('about').innerHTML = 'ÜBER UNS'
    document.getElementById('language').innerHTML = 'DIE BESTEN RAMEN DER STADT'
    document.getElementById('order').innerHTML = 'WIE MAN BESTELLT'
    document.getElementById('noodle').innerHTML = 'Wählen Sie Ihre <br>Nudel'
    document.getElementById('broth').innerHTML = 'Wählen Sie Ihre <br>Brühe'
    document.getElementById('topping').innerHTML = 'Fügen Sie Ihren <br>Belag hinzu'
    document.getElementById('our-menu').innerHTML = 'UNSER MENÜ'
    document.getElementById('chicken').innerHTML = 'HUHN'
    document.getElementById('beef').innerHTML = 'RINDFLEISCH'
    document.getElementById('shrimp').innerHTML = 'GARNELE'
    document.getElementById('chicken2').innerHTML = 'HUHN'
    document.getElementById('beef2').innerHTML = 'RINDFLEISCH'
    document.getElementById('shrimp2').innerHTML = 'GARNELE'
    document.getElementById('chicken3').innerHTML = 'HUHN'
    document.getElementById('beef3').innerHTML = 'RINDFLEISCH'
    document.getElementById('shrimp3').innerHTML = 'GARNELE'
    document.getElementById('find-us').innerHTML = 'SIE FINDEN UNS UNTER'
}

function SP(){
    document.getElementById('menu').innerHTML = 'MENÚ'
    document.getElementById('locations').innerHTML = 'UBICACIONES'
    document.getElementById('about').innerHTML = 'SOBRE NOSOTROS'
    document.getElementById('language').innerHTML = 'EL MEJOR RAMEN DE LA CIUDAD'
    document.getElementById('order').innerHTML = 'COMO ORDENAR'
    document.getElementById('noodle').innerHTML = 'Elige tus fideos favoritos'
    document.getElementById('broth').innerHTML = 'Elige tu caldo'
    document.getElementById('topping').innerHTML = 'Añade tu ingrediente favorito'
    document.getElementById('our-menu').innerHTML = 'NUESTRO MENÚ'
    document.getElementById('chicken').innerHTML = 'POLLO'
    document.getElementById('beef').innerHTML = 'CARNE DE RES'
    document.getElementById('shrimp').innerHTML = 'CAMARÓN'
    document.getElementById('chicken2').innerHTML = 'POLLO'
    document.getElementById('beef2').innerHTML = 'CARNE DE RES'
    document.getElementById('shrimp2').innerHTML = 'CAMARÓN'
    document.getElementById('chicken3').innerHTML = 'POLLO'
    document.getElementById('beef3').innerHTML = 'CARNE DE RES'
    document.getElementById('shrimp3').innerHTML = 'CAMARÓN'
    document.getElementById('find-us').innerHTML = 'PUEDES ENCONTRARNOS EN'
}

function EN(){
    document.getElementById('menu').innerHTML = 'MENU'
    document.getElementById('locations').innerHTML = 'LOCATIONS'
    document.getElementById('about').innerHTML = 'ABOUT'
    document.getElementById('language').innerHTML = 'THE BEST RAMEN IN TOWN'
    document.getElementById('order').innerHTML = 'HOW TO ORDER'
    document.getElementById('noodle').innerHTML = 'Pick your noodle'
    document.getElementById('broth').innerHTML = 'Pick your broth'
    document.getElementById('topping').innerHTML = 'Add your topping'
    document.getElementById('our-menu').innerHTML = 'OUR MENU'
    document.getElementById('chicken').innerHTML = 'CHICKEN'
    document.getElementById('beef').innerHTML = 'BEEF'
    document.getElementById('shrimp').innerHTML = 'SHRIMP'
    document.getElementById('chicken2').innerHTML = 'CHICKEN'
    document.getElementById('beef2').innerHTML = 'BEEF'
    document.getElementById('shrimp2').innerHTML = 'SHRIMP'
    document.getElementById('chicken3').innerHTML = 'CHICKEN'
    document.getElementById('beef3').innerHTML = 'BEEF'
    document.getElementById('shrimp3').innerHTML = 'SHRIMP'
    document.getElementById('find-us').innerHTML = 'FIND US AT'
}

function showMenu(){
    setTimeout(function () {document.getElementById('menu-side').classList.add('show-overlay-menu')},10);
    document.getElementById('menu-side').classList.remove('d-none-overlay');
}

function closeMenu(){
    document.getElementById('menu-side').classList.remove('show-overlay-menu');
    setTimeout(function () {document.getElementById('menu-side').classList.add('d-none-overlay')},255);
}
