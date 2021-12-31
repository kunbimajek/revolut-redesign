import { ArrowRight } from "../Icons";
import style from "./Home.module.sass";

const Payments = () => {
	return (
		<section className={style.payments}>
			<div className={style.mainText}>
				<span>Everyday Needs</span>
				<h3>Free your money</h3>
				<p>
					Get free in-network ATM withdrawals, 10 free overseas
					transfers per month, crypto without fees up to $200,000 per
					month and more
				</p>
			</div>
			<div className={style.wrapper}>
				<div className={style.background}></div>
				<div className={style.content}>
					<h4>Pay and get paid hassle-free</h4>
					<p>
						Make payments in seconds in 30+ countries. Split and
						settle bills without stress
					</p>
					<a href="/">
						Payments <ArrowRight />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Payments;
