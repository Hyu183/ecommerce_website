// import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faChevronDown,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

library.add(fab, faSearch, faChevronDown, faChevronUp);

function App() {
    return (
        <div>
            <Header />
            <Home />
        </div>
    );
}

export default App;
