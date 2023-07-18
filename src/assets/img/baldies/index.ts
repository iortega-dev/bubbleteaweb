const imageModules = import.meta.globEager('./*.png');

export const images = Object.entries(imageModules).reduce((images, [path, module]) => {
  images[path] = (module as { default: string }).default;
  return images;
}, {} as { [key: string]: string });
