import './App.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
    return (
        <div className='App'>
            <Layout>
                <BurgerBuilder />
            </Layout>
        </div>
    );
}

export default App;
