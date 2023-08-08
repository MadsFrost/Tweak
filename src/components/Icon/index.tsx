import React from "react";
import loadable from "@loadable/component";
import { IconBaseProps } from "react-icons";

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

export function Icon({ nameIcon, propsIcon }: typesPropsIcon): JSX.Element {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();

  const LoadableIcon = loadable(() => import(`react-icons/all`), {
    resolveComponent: (el: any) => el[nameIcon as keyof typeof el],
  });

  const WrapperIcon: React.FC = (props: IconBaseProps) => (
    <LoadableIcon {...props} />
  );

  return <WrapperIcon {...propsIcon} />;
}
