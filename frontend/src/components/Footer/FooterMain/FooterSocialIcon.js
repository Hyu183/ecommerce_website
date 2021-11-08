import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import classes from './FooterSocialIcon.module.css';

const FooterSocialIcon = () => {
    return (
        <Row className='justify-content-end g-0'>
            <Col>
                <a href='https://twitter.com/'>
                    <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        color='grey'
                        size='lg'
                    />
                </a>
            </Col>
            <Col>
                <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        color='grey'
                        size='lg'
                    />
                </a>
            </Col>
            <Col>
                <a href='https://www.instagram.com/ '>
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        color='grey'
                        size='lg'
                    />
                </a>
            </Col>
        </Row>
    );
};

export default FooterSocialIcon;
