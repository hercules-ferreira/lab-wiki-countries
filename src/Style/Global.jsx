import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f8f2f5;
    --shape: #FFFFFF;
    
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop) é a padrão para Desktop
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  
  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
   
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px
  }

  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 900;
    color: var(--text-body);
    /* background: var(--background); */
    text-align: justify
  }


  h2, strong {
    font-weight: 600;
    color: var(--text-title);
    background: var(--background);
    padding: 1.5rem;
  }

  h3,  strong {
    font-weight: 600;
    color: var(--text-title);
    text-align: justify;
    padding: 0.5rem;
    
  }



  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    margin: 1rem;
    padding: 0 4rem;
    border-radius: 0.65rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }


   /* Estilos do Modal */
   .react-modal-overlay {
     background: rgba(0,0,0,0.5);

     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;

     display: flex;
     align-items: center;
     justify-content: center;
   }

   .react-modal-content {
     width: 100%;
     max-width: 576px;
     background: var(--background);
     padding: 3rem;
     position: relative;
     border-radius: 0.24rem;
   }
   
   .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top: 1.5rem;
     border: 0;
     background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

   }


  div {
    background: var(--shape);
    margin-top: -0.9rem;
    padding: 1rem 2rem;
    
    color: var(--text-title);
    font-weight: 600px,

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
        display: block; 
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
&.highlight-background{
    background: var(--green);
    color: #fff;
}

  }

 #divTitle
   {
    text-align: center;
    color: var(--text-title);
    font-weight: 600px;
  
    font-size: 3rem
  }


  #Formulary
{  text-align: justify;
    font-weight: 500px;
    font-size: 1.5rem;
    box-sizing: border-box;
    display: block;
  
    
  }

 
`;
