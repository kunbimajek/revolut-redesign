import Landing from "./Landing";
import Payments from "./Payments";
import style from './Home.module.sass';

const Home = () => {
	return (
		<main className={style.container}>
			<Landing/>
            <Payments/>
		</main>
	);
};

export default Home;
