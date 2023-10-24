const sizes = {
  mobile: "576px",
  tablet: "768px",
  desktop: "1280px",
};

const devices = {
  mobile: `(max-width: ${sizes.tablet}) and (orientation: portrait)`,
  tablet: `(min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default devices;
