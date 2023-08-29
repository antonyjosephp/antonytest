import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('./components/Loading'));

export default Loading;
