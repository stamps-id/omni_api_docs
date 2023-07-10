<!-- ---
title: Omni Ordering System
---

# Omni Ordering System -->

## JSON
All POST requests to Stamps’ API must be JSON encoded, having “application/json” as Content-Type. JSON is a language independent, standards based [(RFC 4627)](http://tools.ietf.org/html/rfc4627) data interchange format that’s supported in practically every modern programming language.

If you’re not yet familiar with JSON, [Wikipedia](https://en.wikipedia.org/wiki/JSON) has a nice primer on the data interchange format.

## Making a HTTP Request
Here’s an example on how to specify an extra content type header in request using the widely supported cURL - it’s freely available on Mac, Linux and Windows. You can get cURL from [http://curl.haxx.se/](http://curl.haxx.se/)

```
> $ curl –X POST –H "Content-Type: application/json"
```
Testing tip: we recommend the use of httpbin for testing purposes. It’s a simple service that simply echoes back your HTTP request so you can easily debug whether your application is sending the right data. For example:

```
$ curl http://httpbin.org/get
{
   "args": {},
   "headers": {
      "Accept": "*/*",
      "Connection": "close",
      "Content-Length": "",
      "Content-Type": "",
      "Host": "httpbin.org",
      "User-Agent": "curl/7.19.7 (universal-apple-darwin10.0) libcurl/7.19.7 OpenSSL/0.9.8l zlib/1.2.3"
   },
   "origin": "24.127.96.129",
   "url": "http://httpbin.org/get"
}
```
<!-- ## Prerequisites
- Basic Git and markdown knowledge
- Node and yarn installed
- A text editor or IDE (we like VS Code)
- [Setup the developer portal](setup.md)

## Training exercises

Follow the training exercises sequentially.
Or cherry-pick them independently if you're limited on time.

- [Plain markdown pages](markdown.md)
- [Changing the url paths](awesome/folders.md)
- [Markdown with a mermaid diagram](mermaid.md)
- [The page table of contents](page-table-of-contents.md)
- [Adding a page to the sidebar navigation](sidebar-nav.md)
- [Disabling the search box](search.md)
- [Changing nav and footer links](nav-footer.md)
- [Change your logo](logo.md)
- [Change metadata](metadata.md)
- [Change your colors](colors.md)
- [Change your typography](typography.md)
- [Enable Google Analytics](analytics.md)
- [Modify the homepage](home-page.md)
- [Modify the OAS definitions](oas-definitions.md)
- [Adding a response object to an MDX page](mdx.mdx)
- [Upgrade to a different version of the developer portal](upgrade.md)

Upon completion, you may have questions, or you may be ready to start building your content out.
Learn how to [deploy the developer portal](https://docs.redoc.ly/ci-cd-workflows/) to our global CDN or contact us about purchasing an enterprise license key.

## Asking for help

Don't be shy... we're here to help. -->
