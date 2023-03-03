import { StepNumber } from '../../components/step-number';
import { SimpleLayout } from '../../layouts/simple-layout';
import {
  ResultWrapper,
  BestMatchWrapper,
  QualitiesWrapper,
  CoffeeWrapper,
  CoffeesWrapper,
  BannerWrapper,
  BannerImageWrapper,
  Footer,
} from './style';
import { AnchorStyled } from '../../components/anchor';
import { Button } from '../../components/button';
import {
  coffeesData,
  coffeesSetTwoData,
  qualities,
  questions,
} from '../../data';
import { CoffeeBox } from './coffee-box';
import { ProductBox } from './product-box';
import { QualityBox } from './quality-box';

export function BestMatch({ onReset }: { onReset: () => void }) {
  return (
    <SimpleLayout>
      <ResultWrapper>
        <StepNumber steps={questions.length} activeIndex={questions.length} />
        <h2>meet your new favorite coffee.</h2>
        <p>
          Here’s what we recommend for your busy days, quiet moments, and
          upcoming adventures.
        </p>
        <div className="result-wrapper__links">
          <AnchorStyled>Email my results</AnchorStyled>
          <AnchorStyled onClick={onReset}>Retake the quiz</AnchorStyled>
        </div>
        <BestMatchWrapper>
          <ProductBox />
          <QualitiesWrapper>
            {qualities.map((q) => (
              <QualityBox
                key={q.title}
                variant={!q?.img ? 'no-image' : ''}
                title={q.title}
                text={q.text}
                img={q.img}
              />
            ))}
          </QualitiesWrapper>
        </BestMatchWrapper>
        <CoffeeWrapper>
          <h3>Try these coffees too</h3>
          <p>
            Based on your brewing method and tasting note preferences,
            you&rsquo;ll enjoy these coffees too.
          </p>
          <CoffeesWrapper>
            {coffeesData.map((coffee) => (
              <CoffeeBox key={coffee.title} {...coffee} />
            ))}
          </CoffeesWrapper>
        </CoffeeWrapper>
      </ResultWrapper>
      <BannerWrapper>
        <BannerImageWrapper />
        <div className="banner-wrapper__text">
          <p>Always enjoy free coffee delivery with our coffee subscription.</p>
          <Button>get started</Button>
        </div>
      </BannerWrapper>
      <ResultWrapper>
        <CoffeeWrapper variant="big-text">
          <h3>enhance your daily cup</h3>
          <p>
            We want you to enjoy the full aroma of your coffee from the brewing
            process to what you use to store and drink your coffee. Try these
            products.
          </p>
          <CoffeesWrapper>
            {coffeesSetTwoData.map((coffee) => (
              <CoffeeBox key={coffee.title} {...coffee} />
            ))}
          </CoffeesWrapper>
        </CoffeeWrapper>
      </ResultWrapper>
      <Footer></Footer>
    </SimpleLayout>
  );
}
