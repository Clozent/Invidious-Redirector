# Invidious-Redirector
A userscript to redirect from YouTube to an Invidious instance.

Install it <a href="https://github.com/ndvarn/Invidious-Redirector/raw/main/Invidious%20Redirector.user.js">here</a>.

<h2>Instructions</h2>
<h3>Installation</h3>
<p>
  Install a userscript extention if you don't have one installed already, and open <a href="https://github.com/ndvarn/Invidious-Redirector/raw/main/Invidious%20Redirector.user.js">this link</a> (also referenced above). If this does not work, simply copy the code into the userscript extention, or import the .js file to it.
</p>

<h3>Choose a different invidious instance</h3>
<p>
  Replace the value of the variable <code>invidiousURL</code> in the userscript with the hostname URL of the desired Invidious instance.</br>
</p>
   <h4>Note:</h4> <p>The value of <code>invidiousURL</code> should ONLY include the hostname of the instance. Do not include the protocol or a trailing backslash.</p>
<p>
   <b>Example:</b></br>
   <code>const invidiousURL = "yewtu.be";</code> - This is fine.</br>
   <code>const invidiousURL = "https://yewtu.be/";</code> - This is not fine.
</p>
