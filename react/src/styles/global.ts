import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body { 
    font-family: Roboto, sans-serif;
    background: white;
}

div#root {
    height: 100vh;
}

button {
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    svg {
        width:24px;
        height:24px;
    }
}

div.App {
    max-width: 80%;
    margin: 0 auto;
    padding-top: 5rem;

    table {
        width: 100%;
        
        tr th,
        tr td {
            border: 1px solid;
            padding: 1rem;
        }

        margin-bottom: 1rem;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        input, select {
            width: 50%;
            padding: 1rem;
            font-size: 1rem;
            margin-top: 1rem ;
        }


        input[type="submit"] {
            cursor: pointer;
        }
    }
}
`;
