import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* Added to Fix Footer to bottom of viewport */
  html {
    height: 100%;
  }

  body {
    min-height: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: white;
    line-height: 1;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  * {
  margin: 0;
  padding: 0;
}

html {
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	color: #333;
	-webkit-font-smooting: antialiased;
  font-size: 20px;
}

.img-responsive {
  max-width: 100%;
  height: auto;
  display: block;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

h3 {
  font-size: 24px
}

h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1.2;
}

.textCenter {
  text-align: center;
}

p {
  line-height: 1.5em;
}


/* Super Form Reset */
input,
label,
select,
button,
textarea
{
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	background:none;
	line-height:1;
}

/* Remove the stupid outer glow in Webkit */
input:focus
{
	outline:0;
}

/* Box Sizing Reset
-----------------------------------------------*/

/* All of our custom controls should be what we expect them to be */
input,
textarea
{
	-webkit-box-sizing:content-box;
	-moz-box-sizing:content-box;
	box-sizing:content-box;
}

/* These elements are usually rendered a certain way by the browser */
button,
input[type=reset],
input[type=button],
input[type=submit],
input[type=checkbox],
input[type=radio],
select
{
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
}

/* Text Inputs
-----------------------------------------------*/

input[type=date],
input[type=datetime],
input[type=datetime-local],
input[type=email],
input[type=month],
input[type=number],
input[type=password],
input[type=range],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url],
input[type=week]
{
}

/* Button Controls
-----------------------------------------------*/

input[type=checkbox],
input[type=radio]
{
	width:13px;
	height:13px;
}

/* File Uploads
-----------------------------------------------*/

input[type=file]
{

}

/* Search Input
-----------------------------------------------*/

/* Make webkit render the search input like a normal text field */
input[type=search]
{
	-webkit-appearance:textfield;
	-webkit-box-sizing:content-box;
}

/* Turn off the recent search for webkit. It adds about 15px padding on the left */
::-webkit-search-decoration
{
	display:none;
}

/* Buttons
-----------------------------------------------*/

button,
input[type="reset"],
input[type="button"],
input[type="submit"]
{
	/* Fix IE7 display bug */
	overflow:visible;
	width:auto;
}

/* IE8 and FF freak out if this rule is within another selector */
::-webkit-file-upload-button
{
	padding:0;
	border:0;
	background:none;
}

/* Textarea
-----------------------------------------------*/

textarea
{
	/* Move the label to the top */
	vertical-align:top;

	/* Turn off scroll bars in IE unless needed */
	overflow:auto;
}

/* Selects
-----------------------------------------------*/

select[multiple]
{
	/* Move the label to the top */
	vertical-align:top;
}

section {
	margin-top: 20px;
}

.react-reveal {
	height: 100%;
}
`
export default GlobalStyle
