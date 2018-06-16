import Loadable from 'react-loadable';
import Loader from './loader';

const Wrapper = options =>
	Loadable({
		...options,
		loading: Loader
	});

export default Wrapper;
