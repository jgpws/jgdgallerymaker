let img240CSS = `.square.gap8 {
  grid-gap: 8px;
}

.square.gap16 {
  grid-gap: 16px;
}

.square.gap24 {
  grid-gap: 24px;
}

.square.gap32 {
  grid-gap: 32px;
}

.square.img240 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.square.img240 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .square.img240 {
    max-width: 480px;
  }

  .square.img240.gap8 {
    max-width: 488px;
  }

  .square.img240.gap16 {
    max-width: 496px;
  }

  .square.img240.gap24 {
    max-width: 504px;
  }

  .square.img240.gap32 {
    max-width: 512px;
  }
}

@media (min-width: 1366px) {
  .square.img240 {
    max-width: 960px;
  }

  .square.img240.gap8 {
    max-width: 984px;
  }

  .square.img240.gap16 {
    max-width: 1008px;
  }

  .square.img240.gap24 {
    max-width: 1032px;
  }

  .square.img240.gap32 {
    max-width: 1056px;
  }
}`;

let img320CSS = `.square.gap8 {
  grid-gap: 8px;
}

.square.gap16 {
  grid-gap: 16px;
}

.square.gap24 {
  grid-gap: 24px;
}

.square.gap32 {
  grid-gap: 32px;
}

.square.img320 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.square.img320 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .square.img320 {
    grid-template-columns: repeat(auto-fit, 320px);
    max-width: 640px;
  }

  .square.img320 img {
    height: 320px;
    width: 320px;
  }

  .square.img320.gap8 {
    max-width: 648px;
  }

  .square.img320.gap16 {
    max-width: 656px;
  }

  .square.img320.gap24 {
    max-width: 664px;
  }

  .square.img320.gap32 {
    max-width: 672px;
  }
}

@media (min-width: 1366px) {
  .square.img320 {
    max-width: 960px;
  }

  .square.img320.gap8 {
    max-width: 976px;
  }

  .square.img320.gap16 {
    max-width: 992px;
  }

  .square.img320.gap24 {
    max-width: 1008px;
  }

  .square.img320.gap32 {
    max-width: 1024px;
  }
}`;

let img560CSS = `.square.gap8 {
  grid-gap: 8px;
}

.square.gap16 {
  grid-gap: 16px;
}

.square.gap24 {
  grid-gap: 24px;
}

.square.gap32 {
  grid-gap: 32px;
}

.square.img560 {
  grid-template-columns: repeat(auto-fit, 320px);
  max-width: 240px;
}

.square.img560 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .square.img560 {
    grid-template-columns: repeat(auto-fit, 560px);
    max-width: 560px;
  }

  .square.img560 img {
    height: 560px;
    width: 560px;
  }
}

@media (min-width: 1366px) {
  .square.img560 {
    max-width: 1120px;
  }

  .square.img560.gap8 {
    max-width: 1128px;
  }

  .square.img560.gap16 {
    max-width: 1136px;
  }

  .square.img560.gap24 {
    max-width: 1144px;
  }

  .square.img560.gap32 {
    max-width: 1152px;
  }
}`;

let img640CSS = `.square.gap8 {
  grid-gap: 8px;
}

.square.gap16 {
  grid-gap: 16px;
}

.square.gap24 {
  grid-gap: 24px;
}

.square.gap32 {
  grid-gap: 32px;
}

.square.img640 {
  grid-template-columns: repeat(auto-fit, 240px);
  max-width: 240px;
}

.square.img640 img {
  height: 240px;
  width: 240px;
}

@media (min-width: 768px) {
  .square.img640 {
    grid-template-columns: repeat(auto-fit, 640px);
    max-width: 640px;
  }

  .square.img640 img {
    height: 640px;
    width: 640px;
  }
}`;

let vertCol240CSS = `.vert-masonry {
  column-gap: 0px;
}

.vert-masonry.gap8 {
  column-gap: 8px;
}

.vert-masonry.gap8 .jgd-gallery__image-tile {
  margin-bottom: 8px;
}

.vert-masonry.gap16 {
  column-gap: 16px;
}

.vert-masonry.gap16 .jgd-gallery__image-tile {
  margin-bottom: 16px;
}

.vert-masonry.gap24 {
  column-gap: 24px;
}

.vert-masonry.gap24 .jgd-gallery__image-tile {
  margin-bottom: 24px;
}

.vert-masonry.gap32 {
  column-gap: 32px;
}

.vert-masonry.gap32 .jgd-gallery__image-tile {
  margin-bottom: 32px;
}

.vert-masonry {
  margin: 0 auto;
}

.vert-masonry.img240 {
  columns: 1 240px;
  max-width: 240px !important;
}

.vert-masonry.img240 .jgd-gallery__image-tile {
  min-width: 240px;
}

.vert-masonry .jgd-gallery__image {
  width: 100%;
}

.vert-masonry.img240 .jgd-gallery__image-tile:nth-of-type(4n + 1) img {
  height: 240px;
}

.vert-masonry.img240 .jgd-gallery__image-tile:nth-of-type(4n + 2) img {
  height: 480px;
}

.vert-masonry.img240 .jgd-gallery__image-tile:nth-of-type(4n + 3) img {
  height: 480px;
}

.vert-masonry.img240 .jgd-gallery__image-tile:nth-of-type(4n + 4) img {
  height: 240px;
}

@media (min-width: 768px) {
  .vert-masonry.img240 {
    columns: 2 240px;
    max-width: 480px !important;
  }

  .vert-masonry.img240.gap8 {
    max-width: 488px !important;
  }

  .vert-masonry.img240.gap16 {
    max-width: 496px !important;
  }

  .vert-masonry.img240.gap24 {
    max-width: 504px !important;
  }

  .vert-masonry.img240.gap32 {
    max-width: 512px !important;
  }
}

@media (min-width: 1366px) {
  .vert-masonry.img240 {
    columns: 4 240px;
    max-width: 960px !important;
  }

  .vert-masonry.img240.gap8 {
    max-width: 984px !important;
  }

  .vert-masonry.img240.gap16 {
    max-width: 1008px !important;
  }

  .vert-masonry.img240.gap24 {
    max-width: 1032px !important;
  }

  .vert-masonry.img240.gap32 {
    max-width: 1056px !important;
  }
}`;

let vertCol320CSS = `.vert-masonry {
  column-gap: 0px;
}

.vert-masonry.gap8 {
  column-gap: 8px;
}

.vert-masonry.gap8 .jgd-gallery__image-tile {
  margin-bottom: 8px;
}

.vert-masonry.gap16 {
  column-gap: 16px;
}

.vert-masonry.gap16 .jgd-gallery__image-tile {
  margin-bottom: 16px;
}

.vert-masonry.gap24 {
  column-gap: 24px;
}

.vert-masonry.gap24 .jgd-gallery__image-tile {
  margin-bottom: 24px;
}

.vert-masonry.gap32 {
  column-gap: 32px;
}

.vert-masonry.gap32 .jgd-gallery__image-tile {
  margin-bottom: 32px;
}

.vert-masonry {
  margin: 0 auto;
}

.vert-masonry.img320 {
  columns: 1 240px;
  max-width: 240px !important;
}

.vert-masonry .jgd-gallery__image {
  width: 100%;
}

.vert-masonry .jgd-gallery__image-tile:nth-of-type(2n + 1) img {
  height: 240px;
}

.vert-masonry .jgd-gallery__image-tile:nth-of-type(2n + 2) img {
  height: 480px;
}

@media (min-width: 768px) {
  .vert-masonry.img320 {
    columns: 2 320px;
    max-width: 640px !important;
  }

  .vert-masonry.img320 .jgd-gallery__image-tile {
    min-width: 320px;
  }

  .vert-masonry.img320.gap8 {
    max-width: 648px !important;
  }

  .vert-masonry.img320.gap16 {
    max-width: 656px !important;
  }

  .vert-masonry.img320.gap24 {
    max-width: 664px !important;
  }

  .vert-masonry.img320.gap32 {
    max-width: 672px !important;
  }
}

@media (min-width: 1366px) {
  .vert-masonry.img320 {
    columns: 3 320px;
    max-width: 960px !important;
  }

  .vert-masonry.img320.gap8 {
    max-width: 976px !important;
  }

  .vert-masonry.img320.gap16 {
    max-width: 992px !important;
  }

  .vert-masonry.img320.gap24 {
    max-width: 1008px !important;
  }

  .vert-masonry.img320.gap32 {
    max-width: 1024px !important;
  }
}`;

let vertCol560CSS = `.vert-masonry {
  column-gap: 0px;
}

.vert-masonry.gap8 {
  column-gap: 8px;
}

.vert-masonry.gap8 .jgd-gallery__image-tile {
  margin-bottom: 8px;
}

.vert-masonry.gap16 {
  column-gap: 16px;
}

.vert-masonry.gap16 .jgd-gallery__image-tile {
  margin-bottom: 16px;
}

.vert-masonry.gap24 {
  column-gap: 24px;
}

.vert-masonry.gap24 .jgd-gallery__image-tile {
  margin-bottom: 24px;
}

.vert-masonry.gap32 {
  column-gap: 32px;
}

.vert-masonry.gap32 .jgd-gallery__image-tile {
  margin-bottom: 32px;
}

.vert-masonry {
  margin: 0 auto;
}

.vert-masonry .jgd-gallery__image {
  width: 100%;
}

.vert-masonry.img560 .jgd-gallery__image-tile:nth-of-type(2n + 1) img {
  height: 280px;
}

.vert-masonry.img560 .jgd-gallery__image-tile:nth-of-type(2n + 2) img {
  height: 560px;
}

@media (min-width: 768px) {
  .vert-masonry.img560 {
    max-width: 560px;
  }

  .vert-masonry.img560 .jgd-gallery__image-tile {
    min-width: 560px;
  }
}

@media (min-width: 1366px) {
  .vert-masonry.img560 {
    columns: 2 560px;
    max-width: 1120px !important;
  }

  .vert-masonry.img560.gap8 {
    max-width: 1128px !important;
  }

  .vert-masonry.img560.gap16 {
    max-width: 1136px !important;
  }

  .vert-masonry.img560.gap24 {
    max-width: 1144px !important;
  }

  .vert-masonry.img560.gap32 {
    max-width: 1152px !important;
  }
}`;

let vertCol640CSS = `.vert-masonry {
  column-gap: 0px;
}

.vert-masonry.gap8 {
  column-gap: 8px;
}

.vert-masonry.gap8 .jgd-gallery__image-tile {
  margin-bottom: 8px;
}

.vert-masonry.gap16 {
  column-gap: 16px;
}

.vert-masonry.gap16 .jgd-gallery__image-tile {
  margin-bottom: 16px;
}

.vert-masonry.gap24 {
  column-gap: 24px;
}

.vert-masonry.gap24 .jgd-gallery__image-tile {
  margin-bottom: 24px;
}

.vert-masonry.gap32 {
  column-gap: 32px;
}

.vert-masonry.gap32 .jgd-gallery__image-tile {
  margin-bottom: 32px;
}

.vert-masonry {
  margin: 0 auto;
}

.vert-masonry .jgd-gallery__image {
  width: 100%;
}

.vert-masonry.img640 .jgd-gallery__image-tile:nth-of-type(2n + 1) img {
  height: 320px;
}

.vert-masonry.img640 .jgd-gallery__image-tile:nth-of-type(2n + 2) img {
  height: 640px;
}

@media (min-width: 768px) {
  .vert-masonry.img640 {
    max-width: 640px !important;
  }

  .vert-masonry.img640 .jgd-gallery__image-tile {
    min-width: 640px;
  }
}`;

export { img240CSS, img320CSS, img560CSS, img640CSS, vertCol240CSS, vertCol320CSS, vertCol560CSS, vertCol640CSS };
