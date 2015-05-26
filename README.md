# Purl.js

<p>Purl.js is an easy way to personalized a website to the visitor.  Here&#8217;s how it works&#8230;</p>
<p><strong>1) Use Personalized URLs to send visitors to your website. </strong></p>
<p>Personalized URLs or “PURLs” are simply a URL that is personalized to each recipient. (For example: <strong>mysite.com/Sally.Anderson</strong> or <strong>mysite.com/John.Smith</strong>).</p>
<p>The PURLs are used to tell your website who is visiting.  This technique requires that you have a list of knows customers/prospects that you want to personalize your website to.  With that list in hand, you can create PURLs for each recipient with Purlem.</p>
<p><strong>2) Use Hashtags to Personalize your page.  </strong></p>
<p>When a recipient visits their “PURL,&#8221; they will be taken to a website that is personalized to them.  You can personalize the page by placing variable Hashtags directly into the HTML.  For example, if you wanted to pull in the visitor&#8217;s first name into your website header, you would simply use <strong>#firstName</strong>.</p>
<p>In this example, #firstName is replaced with John.</p>
<p><img class="alignnone size-full wp-image-3026" src="http://purlem.com/blog/wp-content/uploads//2015/05/purljs_example.jpg" alt="purljs_example" width="600" height="217" /></p>
<h3>Here is how to set it up&#8230;</h3>
<p><strong>1) Upload purl.js</strong><br />
Download <a href="https://github.com/purlem/Purl.js/archive/master.zip">purl.js</a>, and upload the file to your server.</p>
<p><strong>2) Add code to HTML</strong><br />
Add the follow code into just above the &lt;/head&gt; section of your HTML.</p>
<blockquote><p>&lt;script src="/path/to/purl.js"&gt;&lt;/script&gt;</p></blockquote>
<p><strong>3) Add jQuery<br />
</strong>Purl.js requires jQuery.  If you don&#8217;t have jQuery on your site, you&#8217;ll want to include it as well. Below is the Google hosted library for jQuery.</p>
<blockquote><p>&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">&lt;/script&gt;</p></blockquote>
<p><strong>4) Add Hashtags</strong><br />
Add the variable hashtags into the HTML.  You can see <a href="http://support.purlem.com/entries/21546673-Variable-Hashtags">Purlem's variable hashtags here.</a></p>
