import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import ObserverWrapper from "../observer-wrapper";
import { ImageContainer, LoadingContainer } from "./image.styles";

interface Props {
  src: string;
  width: number;
  height: number;
  lazy?: boolean;
  loadOnObserve?: boolean;
  preload?: boolean;
  alt: string;
}

const Image: FC<Props> = ({
  height,
  width,
  src,
  alt,
  loadOnObserve = false,
  preload = false,
  lazy = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const LoadableImage = (
    <img
      src={src}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
      alt={alt}
      onLoad={() => setIsLoading(false)}
      // implement better UI for error
      onError={() => setIsLoading(false)}
    />
  );

  const wrapWithObserverWrapper = () => {
    if (loadOnObserve)
      return <ObserverWrapper>{LoadableImage}</ObserverWrapper>;

    return LoadableImage;
  };

  return (
    <ImageContainer width={width} height={height} className="image-container">
      {preload && (
        <Helmet>
          <link rel="preload" as="image" href={src}></link>
        </Helmet>
      )}

      {isLoading && <LoadingContainer />}

      {wrapWithObserverWrapper()}
    </ImageContainer>
  );
};

export default Image;
