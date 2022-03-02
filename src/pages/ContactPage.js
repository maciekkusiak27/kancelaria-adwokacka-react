import React from 'react';

const ContaktPage = () => {
    return (
        <>
        <article>
            <h1>Kontakt</h1>
                    <p><i class="fas fa-phone"></i> 660 705 944</p>
                    <p><i class="fas fa-envelope"></i> malgorzata.w.kowalska@gmail.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> 31-526, Kraków ul. Kielecka 2/18</p>
        </article>
             
                <div id="map"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Krak%C3%B3w%20Kielecka%202+(Kancelaria%20Adwokacka%20Ma%C5%82gorzata%20Kowalska)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">fitness tracker</a></iframe></div>
            </>
    );
}

export default ContaktPage;