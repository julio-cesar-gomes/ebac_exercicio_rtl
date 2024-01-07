import styled from 'styled-components'
import Post from "./components/Post";
import EstiloGlobal from './styles';

const AppStyles = styled.div`
  max-width: 480px;
    margin: 120px auto;
`

function App() {
  return (
    <>
    <EstiloGlobal></EstiloGlobal>
    <AppStyles>
      <Post imageUrl="https://http2.mlstatic.com/D_NQ_NP_869155-MLB31173769080_062019-O.webp">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </AppStyles>
    </>
  );
}

export default App;
