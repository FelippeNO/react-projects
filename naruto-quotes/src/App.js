import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import narutoImg from './images/naruto.png';
import { Quotes } from './components/quotes/Quotes';
import { getQuote } from '../src/services/quotesService/quotesService';
import jutsoSound from './sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    quote: 'loading quote...',
    speaker: 'loading speaker...'
  });

  const onUpdate = async () => {
    const quote = await getQuote();


    audio.play();
    setQuoteState(quote);

  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return <Content>
    <Quotes
      quote={quoteState.quote}
      speaker={quoteState.speaker}
      onUpdate={onUpdate}
    />
    <NarutoImage img src={narutoImg} alt="Naruto with a kunai" />
  </Content>;
}

const Content = styled.div`
height: 100vh;
box-sizing: border-box;
padding: 0 50px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const NarutoImage = styled.img`
max-width: 50vw;
align-self: flex-end;
`