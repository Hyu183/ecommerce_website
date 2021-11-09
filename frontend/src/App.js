import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faChevronDown,
    faChevronUp,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

// import { Row, Col, Container } from 'react-bootstrap';
import Homepage from './pages/Homepage';
import ProductListPage from './pages/ProductListPage';
import Modal from './components/Modal/Modal';

library.add(fab, faSearch, faChevronDown, faChevronUp, faTimes);

function App() {
    return (
        <div>
            <Homepage />
            {/* <ProductListPage /> */}
        </div>
    );
}

export default App;
