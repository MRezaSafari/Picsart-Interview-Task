import React, {
  FC,
  useEffect,
  useState,
  useRef,
  ReactNode,
  ForwardedRef,
  RefObject,
  MutableRefObject,
} from "react";

interface IUseObserveEntryProps {
  ref: RefObject<HTMLDivElement>;
  options: IntersectionObserverInit | undefined;
}

const useObserverEntry = ({ ref, options }: IUseObserveEntryProps) => {
  const [isInViewport, setIsInViewport] = useState(false);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      options
    )
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;

    if (isInViewport) {
      ob.disconnect();
      return;
    }

    if (element && !isInViewport) ob.observe(element);

    return () => ob.disconnect();
  }, [isInViewport, ref]);

  return isInViewport;
};

export default useObserverEntry;
