import { useEffect, useRef, useState } from "react";
import style from "./Home.module.sass";

const Landing = () => {
	const [transform, setTransform] = useState(1);
	const [opacity, setOpacity] = useState(1);

	let landingRef = useRef();

	useEffect(() => {
		const backgroundAnimation = () => {
			setTransform(1 + window.scrollY / 8000);
			setOpacity(1 - window.scrollY / 700);
		};

		document.addEventListener("scroll", backgroundAnimation);

		return () => {
			document.removeEventListener("scroll", backgroundAnimation);
		};
	}, []);

	return (
		<section className={style.landing} ref={landingRef}>
			<div className={style.wrapper}>
				<div
					className={style.background}
					style={{
						willChange: "transform, opacity",
						transform: `scale(${transform})`,
						opacity: opacity,
					}}
				></div>
			</div>
			<div className={style.content}>
				<div>
					<h1>One app, all things money</h1>
					<p>
						Open a free account in minutes right from your phone,
						and make your money go further
					</p>
					<a href="/" className="btn btn-black">
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
};

export default Landing;
