import React, { FC, ReactNode, Suspense, useRef } from "react";
import { useObserverEntry } from "../../hooks";

interface IObserverWrapperProps {
  children: ReactNode;
  threshold?: number;
  root?: Element | Document | null | undefined;
  rootMargin?: string;
}

const ObserverWrapper: FC<IObserverWrapperProps> = ({
  children,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  threshold = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useObserverEntry({
    ref,
    options: { threshold, root, rootMargin },
  });
  return (
    <div ref={ref} style={{ height: "80vh" }}>
      {isInViewport && (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      )}
    </div>
  );
};

export default ObserverWrapper;
