<template>
   <!--- <main>
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">Oops, page not found!</h1>
                <p>We're sorry, but the page you're looking for cannot be found. It may have been removed, renamed, or is temporarily unavailable.</p>
                <p>Here are a few things you can try:</p>
                <ul>
                    <li>Check the URL to make sure it's spelled correctly.</li>
                    <li>Go back to the previous page and try again.</li>
                    <li>Use the search bar to look for the content you're after.</li>
                    <li>Visit our homepage to see if you can find what you're looking for.</li>
                    <li>If none of these options work, please don't hesitate to contact us for further assistance.</li>
                </ul>
                <p>We apologize for any inconvenience this may have caused and thank you for your patience.</p>
                <router-link class="btn btn-primary" :to="{name: 'home'}">Tornare a casa</router-link>
            </div>
        </div>
    </main>--->
    <main>
        <div class="container">
    
          <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <br>
            <h2>La pagina che stai cercando non esiste.</h2>
            
            <router-link class="btn" :to="{name: 'home'}">Tornare a casa</router-link>
            <img src="/not-found.svg" class="img-fluid py-5" alt="Page Not Found">
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
              Progettato da <a href="https://www.ambientinarratividigitali.it/" target="_blank">And Srl</a>
            </div>
          </section>
    
        </div>
      </main>
</template>

<script>

export default {
    setup () {

    }
}
</script>

<style scoped>

</style>