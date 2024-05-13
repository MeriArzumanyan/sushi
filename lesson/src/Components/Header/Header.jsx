import "./Header.css";
export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="text-center">
          <img src="./images/Logos/logo.svg" width="92" alt="Суши и пицца" />
          <div className="display-4">Доставка роллов</div>
          <p className="lead">Оперативно и вкусно</p>
        </div>
      </div>
    </header>
  );
};
