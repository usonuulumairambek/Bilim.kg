import "./Header.sass";
import { Link} from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import burgermenuimg from "./burgerimg.png"
function Header() {
  // const [isOpasity, setisOpasity] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setisOpasity(() => location.pathname === "/");
  // }, [location]);
  return (
    <div className="container">
      <div className="header__container">
        <div className="header__container-logo ">
          <div className="header__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header__text">
            <div className="logo__text">
              Центр <br /> Развития <br /> Инновации
            </div>
          </div>
        </div>
        <div className="header__container-menu">
          <div className="header__text2">
            <Link to="/" className="upper__text">
              Главная
            </Link>
          </div>
          <div className="header__text2">
            <Link to="/Course" className="upper__text">
              Обучение
            </Link>
          </div>
          <div className="header__text2">
            <Link to="/News" className="upper__text">
              Новости
            </Link>
          </div>
          <div className="header__text2">
            <Link to="/Contact" className="upper__text">
              Контакты
            </Link>
          </div>
        </div>
     <div className="burger">
       <img src={burgermenuimg} style={{width: '30px', marginRight: '20px'}} alt="" />
     </div>
      </div>
    </div>
  );
}

export default Header;
