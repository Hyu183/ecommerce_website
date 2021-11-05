// import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faChevronDown,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header';

library.add(fab, faSearch, faChevronDown, faChevronUp);

function App() {
    return <Header />;
}

export default App;
