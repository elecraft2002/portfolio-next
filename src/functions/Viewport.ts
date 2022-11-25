import { useEffect, useState, useMemo, RefObject } from "react";
interface IViewport {
  ref: React.MutableRefObject<HTMLElement>;
}
export function useIsInViewport(ref: React.MutableRefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
