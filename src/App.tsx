import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";
import {QueryClient, QueryClientProvider} from 'react-query';

export default function App() {

    return (
      <QueryClientProvider client={new QueryClient()}>
        <div className="App">
            <h1>Pokédex</h1>
            <div id="bandejaDeEntrada">
                <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                    <BuscarPokemon />
                </div>
            </div>
        </div>
      </QueryClientProvider>
    );
}
