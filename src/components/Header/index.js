import logo from "../../logo.svg";
import style from "./Header.module.sass";

const menuList = [
	{ title: "Personal", link: "/" },
	{ title: "Business", link: "/" },
	{ title: "Compaany", link: "/" },
];

const Header = () => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.navigation}>
					<a href="/" className={style.logo}>
						<img src={logo} alt="logo" />
					</a>
					<ul className={style.menu}>
						{menuList.map(({ title, link }) => (
							<li className={style.menuItem} key={title}>
								<a href={link}>{title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className={style.btnGroup}>
					<a className="btn btn-white" href="/">
						Login
					</a>
					<a className="btn btn-black" href="/">
						Sign up
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
