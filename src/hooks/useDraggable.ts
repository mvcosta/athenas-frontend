import { useRef } from "react";

export default function useDraggable() {
  const ref = useRef<any>(null);

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    const element = ref.current;

    let l = element.offsetLeft;
    let t = element.offsetTop;

    const startX = e.pageX;
    const startY = e.pageY;

    const drag = (e: any) => {
      const styles = window.getComputedStyle(element);
      const marginLeft = parseInt(styles.marginLeft);
      const marginTop = parseInt(styles.marginTop);

      element.style.left = l + (e.pageX - startX - marginLeft) + "px";
      element.style.top = t + (e.pageY - startY - marginTop) + "px";
    };

    const mouseup = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", mouseup);
    };

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", mouseup);
  }

  return { ref, handleMouseDown };
}
