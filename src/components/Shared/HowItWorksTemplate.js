export default function HowItWorksTemplate({ classPrefix }) {
  return (
    <div className={`${classPrefix}Container`}>
      <h4 className={`${classPrefix}Title`}>How it works</h4>
      <div className={`${classPrefix}Circles`}>
        <div className={`${classPrefix}Circle`}></div>
        <div className={`${classPrefix}Line`}></div>
        <div className={`${classPrefix}Circle`}></div>

        <div className={`${classPrefix}Circle`}></div>
      </div>

      <div className={`${classPrefix}SectionContainer`}>
        <div className={`${classPrefix}Section`}>
          <h1 className={`${classPrefix}Number`}>01</h1>
          <h3 className={`${classPrefix}SectionTitle`}>Pick your coffee</h3>
          <p className={`${classPrefix}Para`}>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className={`${classPrefix}Section`}>
          <h1 className={`${classPrefix}Number`}>02</h1>
          <h3 className={`${classPrefix}SectionTitle`}>Choose the frequency</h3>
          <p className={`${classPrefix}Para`}>
            Choose the frequency Customize your order frequency, quantity, even
            your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>
        <div className={`${classPrefix}Section`}>
          <h1 className={`${classPrefix}Number`}>03</h1>
          <h3 className={`${classPrefix}SectionTitle`}>Receive and enjoy!</h3>
          <p className={`${classPrefix}Para`}>
            Receive and enjoy! We ship your package within 48 hours, freshly
            roasted. Sit back and enjoy award-winning world-class coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
      </div>
    </div>
  );
}
