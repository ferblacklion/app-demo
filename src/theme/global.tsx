import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		min-width: 320px;
		font-size:'16px';
		font-family: 'Roboto Condensed', sans-serif;
	}
	*, *:before, *:after {
		position: relative;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	html {
		height: 100%;
	}
	body {
		margin: 0;
		padding: 0;
		min-height: 100%;
    background-color:#F4EEE5;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	input, select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	select::-ms-expand { display: none; }

	input, select, button {
		font-family: 'Roboto Condensed', sans-serif;
	}

	a {
		color: #000;
	}

	#root {
		position: static;
		min-height:100vh;
		margin:0;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

  .no-transitions {
    * {
      transition: none;
    }
  }
  html, body, *{
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
