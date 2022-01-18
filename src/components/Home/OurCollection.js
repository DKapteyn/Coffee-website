export default function OurCollection() {
  return (
    <div className="home--collectionContainer">
      <div className="collectionTitleContainer">
      <h1 className="collectionTitle">our collection</h1> 
      </div> 
      <div className="coffeeTypeContainer">
      <div className="coffeeType">
        <img
          className="desktopBeanBagPic"
          src="/mainAssets/assets/home/desktop/image-gran-espresso.png"
          alt="Coffee bean bag"
        />
        <h4 className="beanName"> Gran Espresso</h4>
        <p className="beanDescription">
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </p>
      </div>
      <div className="coffeeType">
        <img
          className="desktopBeanBagPic"
          src="/mainAssets/assets/home/desktop/image-planalto.png"
          alt="Coffee bean bag"
        />
        <h4 className="beanName"> Planalto</h4>
        <p className="beanDescription">
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts
        </p>
      </div>
      <div className="coffeeType">
        <img
          className="desktopBeanBagPic"
          src="/mainAssets/assets/home/desktop/image-piccollo.png"
          alt="Coffee bean bag"
        />
        <h4 className="beanName">Piccollo</h4>
        <p className="beanDescription">
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </p>
      </div>
      <div className="coffeeType">
        <img
          className="desktopBeanBagPic"
          src="/mainAssets/assets/home/desktop/image-danche.png"
          alt="Coffee bean bag"
        />
        <h4 className="beanName">Danche</h4>
        <p className="beanDescription">
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
      </div>
      </div>
    </div>
  );
}
