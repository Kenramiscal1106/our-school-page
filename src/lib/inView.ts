export const inView = (
  node: HTMLElement,
  options?: IntersectionObserverInit
) => {
  if (!(typeof IntersectionObserver === "undefined") && !node) {
    throw new Error(
      "intersection observer not supported 😭\n please use newer browsers 🙏"
    );
  }
  const observer = new IntersectionObserver((entries, _observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        return;
      }
      entry.target.classList.remove("visible");
    });
  }, options);
  return {
    destroy() {
      console.log("component is destroyed");
    },
  };
};
/*
const defaultOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 1,
		unobserveOnEnter:false
	}
	function inView(node, options = defaultOptions) {
		if (!typeof IntersectionObserver === 'undefined' && !node) {
			throw new Error("intersectionobserver not supported 😢")
		}
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => console.log(entry))
		}, options)
		console.log(node)
		observer.observe(node)
		return {
			destroy() {
				console.log("component is destroyed")
			}
		}
	}
*/
