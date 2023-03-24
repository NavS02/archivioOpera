<template>
    <div>
        <h2>Environment variable</h2>
        <p>Environment variables are store in <em>.ENV</em> files, and a sample file is available as <em>.ENV.sample</em>.</p>
        <p>The <em>.ENV</em> file contains information that can be used in the app (e.g.: the static access token provided by directus or the base URL of the API).</p>
        <p>The static access token for example, can be accesssed with this statement: <em>import.meta.env.VITE_DIRECTUS_STATIC_TOKEN</em></p>
        <p>Please note the enc variables must be prefixed with 'VITE_' to be available in vite.</p>

        <h2>Authentication in development</h2>
        <p>This app uses a static access token to authenticate within Directus.<br>
            A static access token belongs to a specific Directus user, and can be
            generated in the Directus user directory.
        </p>
        <p>The static token is stored in a <em>.ENV</em> file as <em>VITE_DIRECTUS_STATIC_TOKEN</em></p>
        
        <h2>Authentication in production</h2>
        <p>Once a user is logged in, the refresh token is stored in a cookie (or based on the 'mode in the API').</p>
        
        <h2>Collections</h2>
        <p>Each collection has a metadata file into the <em>settings</em> folder.</p>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>