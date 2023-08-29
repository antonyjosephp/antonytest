'use client';
import axios from 'axios';

import styles from './styles/pages/page.module.scss';

export const metadata = {
    title: 'IMS - Boiler Plate Application',
    description: 'Main Layout',
};

const checkTracing = async () => {
    const data = await axios.get('/api/trace');
    const res = await data.data;
    return res;
};

const Home: React.FC = () => {
    return (
        <>
            <div className={styles.main}>
                <div>Homepage</div>
                <div>
                    <button onClick={checkTracing}>Click to test front end tracing</button>
                </div>
            </div>
        </>
    );
};

export default Home;
