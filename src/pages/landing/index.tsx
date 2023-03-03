import { SimpleLayout } from '../../layouts/simple-layout';
import { Button } from '../../components/button';
import { LandingWrapper, ImageWrapper, TextWrapper } from './style';

export function Landing({
  setShowQuestion,
}: {
  setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <SimpleLayout>
      <LandingWrapper>
        <ImageWrapper className="landing__image-wrapper" />
        <TextWrapper className="landing__text-wrapper">
          <h2>
            Find Your
            <br /> Perfect Coffee
          </h2>
          <p>
            Whether you&apos;re looking for the right coffee to jumpstart your
            day, kick off an adventure, or for slow afternoon sipping,
            we&apos;ll help you find your perfect coffee match.
          </p>
          <p>Let&rsquo;s start your coffee journey with a few questions.</p>
          <Button onClick={() => setShowQuestion(true)}>Take the Quiz</Button>
        </TextWrapper>
      </LandingWrapper>
    </SimpleLayout>
  );
}
