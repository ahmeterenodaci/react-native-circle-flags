import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnKeFlagSource = require('./en-ke.webp');

export default function EnKeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EnKeFlagSource} />;
}
