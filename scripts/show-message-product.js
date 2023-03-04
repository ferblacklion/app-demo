(() => {
  function onClickLabel() {
    showMessage('');
  }

  function onClickPlus() {
    showMessage('plus');
  }

  function onClickMinus() {
    showMessage('minus');
  }

  function createSpan(messageId, message) {
    const spanElement = document.createElement('span');
    spanElement.id = messageId;
    spanElement.innerHTML = message;
    spanElement.style =
      'color:#000; display:inline-block; padding: 5px; background-color: #B2FCE4;';
    return spanElement;
  }
  function createMessage(quantity) {
    switch (quantity) {
      case 1:
        return 'Add 2 of this product and the third one is free!';

      case 2:
        return 'Add another one free to your cart.';

      case 3:
        return 'Congrats! add to cart now!';

      default:
        return null;
    }
  }

  function removeElement(ele) {
    if (ele) ele.remove();
  }

  function showMessage(type) {
    const activeLabel = document.querySelector(
      '.pdp-variant-select-label-active',
    );

    if (!activeLabel) return;

    if (type === 'plus') {
      quantity = quantity === max ? max : quantity + 1;
    } else if (type === 'minus') {
      quantity = quantity === min ? min : quantity - 1;
    }

    const text = activeLabel?.textContent ?? '';
    const messageSpanId = 'promo-message';
    const messageElement = document.getElementById(messageSpanId);

    if (text.match(REGEX)?.length) {
      const form = document.querySelector('[id^=product_form_]');
      const message = createMessage(quantity);
      const spanElement = createSpan(messageSpanId, message);

      if (!messageElement) {
        if (message) form.previousSibling.previousSibling.after(spanElement);
      } else messageElement.innerHTML = message;

      if (quantity >= 4) removeElement(messageElement);
    } else {
      removeElement(messageElement);
    }
  }

  const REGEX = /(2|3)(t{1})|18-24/gi;
  const labels = document.querySelectorAll('.pdp-variant-select-label');
  const minusButton = document.querySelector('[data-minus="true"]');
  const plusButton = document.querySelector('[data-plus="true"]');
  const max = 10;
  const min = 1;
  let quantity = 1;

  labels.forEach((label) => {
    label.addEventListener('click', onClickLabel, false);
  });

  minusButton.addEventListener('click', onClickMinus, false);
  plusButton.addEventListener('click', onClickPlus, false);
})();
