import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
// reset everything
*, *::before,*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  border: 0 solid transparent;
}

// prevent iOS font size change
html {
  -webkit-text-size-adjust: 100%;
}

// reset body line-height
body {
  min-height: 100vh;
  line-height: 1;
  text-rendering: optimizeSpeed;
  background-color: #f8e8d1;
}

// all media elements set to block and full width
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  max-width: 100%;
}

// inherit fonts for inputs and buttons
input,
button,
textarea,
select {
  font: inherit;
  line-height: inherit;
  color: inherit;
}

// collapse table
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// assign button hover state
button, [role="button"] {
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
}

// reset anchor style
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
  -webkit-tap-highlight-color: transparent;
}

// reset heading style
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

// reset list style
ol, ul {
  list-style: none;
}

// reset text input style
[type=date],
[type=datetime],
[type=datetime-local],
[type=email],
[type=month],
[type=number],
[type=password],
[type=search],
[type=tel],
[type=text],
[type=time],
[type=url],
[type=week],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  &:focus {
    outline: 0;
  }
}

// reset firefox placeholder opacity
::-moz-placeholder {
  opacity: 1;
}

// reset textarea style
textarea {
  // move the label to the top
  vertical-align: top;

  // turn off scroll bars in IE unless needed
  overflow: auto;
}

// reset checkbox and radio style
[type='checkbox'],
[type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0
  }
}

// remove all animations, transitions and smooth scroll for people that prefer not to see them
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


`