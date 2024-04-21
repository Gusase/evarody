<script lang="ts">
  import data from "@/site-data";

  const { siteName, siteUrl } = data;
  const path = window.location.pathname;

  export let title: string = "";
  export let desc: string = data.desc;
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/meta/favicons/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/meta/favicons/apple-touch-icon.png" />
  <link rel="icon" type="image/png" href="/meta/favicons/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/meta/favicons/favicon-16x16.png" sizes="16x16" />
  <link rel="manifest" href="/meta/site.webmanifest" />
  <meta name="theme-color" content="#000000" />
  <meta name="color-scheme" content="dark light">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content={desc} />
  <meta name="language" content="English" />
  <meta name="author" content={data.author} />
  <meta name="keywords" content={data.keyword.join(", ")} />
  <meta name="robots" content="index,follow" />
  <meta name="copyright" content={data.author} />

  <!-- Twitter -->
  <meta property="twitter:title" content={title || siteName} />
  <meta property="twitter:description" content={desc} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={data.x} />
  <meta name="twitter:creator" content={data.x} />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content={title || siteName} />
  <meta property="og:description" content={desc} />
  <meta property="og:url" content={siteUrl + path} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{siteUrl}/meta/banner.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1946" />
  <meta property="og:image:height" content="1217" />

  <title>{title} | {siteName}</title>

  <slot />
</svelte:head>
