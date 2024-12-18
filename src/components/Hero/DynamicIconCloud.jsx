import React, { useState, useEffect } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

const useIcons = (slugs) => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 50,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  "python",
  "c++",
  "javascript",
  "react",
  "stmicroelectronics",
  "arduino",
  "visualstudiocode",
  "mysql",
  "jekyll",
  "figma",
  "dassaultsystemes",
  "autocad",
  "altiumdesigner",
  "comsol",
  "html5",
  "css3",
  "arm",
  "git",
  "espressif",
  "ifttt",
  "ltspice",
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return <Cloud>{icons}</Cloud>;
};

export default DynamicIconCloud;
