import Options from "./Options";
import OrderSummarywithButton from "./OrderSummarywithButton";

export default function HowDoYouDrink() {
  return (
    <div>
      <Options
        MainTitle="How do you drink your coffee?"
        option1Title="Capsule"
        option1Para="Compatible with Nespresso systems and similar brewers"
        option2Title="Filter"
        option2Para="For pour over or drip methods like Aeropress, Chemex, and V60"
        option3Title="Espresso"
        option3Para="Dense and finely ground beans for an intense, flavorful experience"
      />
      <Options
        MainTitle="What type of coffee?"
        option1Title="Single origin"
        option1Para="Distinct, high quality coffee from a specific family-owned farm"
        option2Title="Decaf"
        option2Para="Just like regular coffee, except the caffeine has been removed"
        option3Title="Blended"
        option3Para="Combination of two or three dark roasted beans of organic coffees"
      />
      <Options
        MainTitle="How much would you like?"
        option1Title=" 250g"
        option1Para="Perfect for the solo drinker. Yields about 12 delicious cups."
        option2Title="500g"
        option2Para="Perfect option for a couple. Yields about 40 delectable cups."
        option3Title="1000g"
        option3Para="Perfect for offices and events. Yields about 90 delightful cups."
      />
      <Options
        MainTitle="Want us to grind them?"
        option1Title="Wholebean"
        option1Para="Best choice if you cherish the full sensory experience"
        option2Title="Filter"
        option2Para="For drip or pour-over coffee methods such as V60 or Aeropress"
        option3Title="Cafetiére"
        option3Para="Course ground beans specially suited for french press coffee"
      />
      <Options
        MainTitle="How often should we deliver?"
        option1Title="Every week"
        option1Para="$14.00 per shipment. Includes free first-class shipping."
        option2Title="Every 2 weeks"
        option2Para="$17.25 per shipment. Includes free priority shipping."
        option3Title="Every month"
        option3Para="$22.50 per shipment. Includes free priority shipping."
      />
      <OrderSummarywithButton />
    </div>
  );
}
