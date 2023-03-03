import { ProductBoxWrapper, ProductInfoWrapper } from './style';

export function ProductBox() {
  return (
    <ProductBoxWrapper className="product-box-wrapper">
      <h2>Best Match</h2>
      <img
        className="best-match-wrapper__image"
        src="/product.jpg"
        alt="Product"
      />
      <ProductInfoWrapper>
        <h3>guatemala coffee</h3>
        <span className="best-match-wrapper__price">$20.50</span>
      </ProductInfoWrapper>
    </ProductBoxWrapper>
  );
}
