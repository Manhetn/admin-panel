const toggleBodyScroll = (enableScroll: boolean | null = null) => {
  if (enableScroll === null) {
    document.querySelector('.body')?.classList.toggle('body__no-scroll');
  } else {
    document
      .querySelector('.body')
      ?.classList.toggle('body__no-scroll', enableScroll);
  }
};

export default toggleBodyScroll;
