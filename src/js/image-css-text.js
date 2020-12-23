let img240CSS = `.img240 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.img240 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img240 {
    max-width: 480px;
  }

  .img240.gap8 {
    max-width: 488px;
  }

  .img240.gap16 {
    max-width: 496px;
  }

  .img240.gap24 {
    max-width: 504px;
  }

  .img240.gap32 {
    max-width: 512px;
  }
}

@media (min-width: 1366px) {
  .img240 {
    max-width: 960px;
  }

  .img240.gap8 {
    max-width: 984px;
  }

  .img240.gap16 {
    max-width: 1008px;
  }

  .img240.gap24 {
    max-width: 1032px;
  }

  .img240.gap32 {
    max-width: 1056px;
  }
}`;

let img320CSS = `.img320 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.img320 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img320 {
    grid-template-columns: repeat(auto-fit, 320px);
    max-width: 640px;
  }

  .img320 img {
    height: 320px;
    width: 320px;
  }

  .img320.gap8 {
    max-width: 648px;
  }

  .img320.gap16 {
    max-width: 656px;
  }

  .img320.gap24 {
    max-width: 664px;
  }

  .img320.gap32 {
    max-width: 672px;
  }
}

@media (min-width: 1366px) {
  .img320 {
    max-width: 960px;
  }

  .img320.gap8 {
    max-width: 976px;
  }

  .img320.gap16 {
    max-width: 992px;
  }

  .img320.gap24 {
    max-width: 1008px;
  }

  .img320.gap32 {
    max-width: 1024px;
  }
}`;

let img560CSS = `.img560 {
  grid-template-columns: repeat(auto-fit, 320px);
  max-width: 240px;
}

.img560 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img560 {
    grid-template-columns: repeat(auto-fit, 560px);
    max-width: 560px;
  }

  .img560 img {
    height: 560px;
    width: 560px;
  }
}

@media (min-width: 1366px) {
  .img560 {
    max-width: 1120px;
  }

  .img560.gap8 {
    max-width: 1128px;
  }

  .img560.gap16 {
    max-width: 1136px;
  }

  .img560.gap24 {
    max-width: 1144px;
  }

  .img560.gap32 {
    max-width: 1152px;
  }
}`;

let img640CSS = `.img640 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.img640 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .img640 {
    grid-template-columns: repeat(auto-fit, 640px);
    max-width: 640px;
  }

  .img640 img {
    height: 640px;
    width: 640px;
  }
}`;

export { img240CSS, img320CSS, img560CSS, img640CSS };
