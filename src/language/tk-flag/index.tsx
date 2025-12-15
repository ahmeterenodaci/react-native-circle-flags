import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TkFlagSource = require('./tk.webp');

export default function TkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TkFlagSource} />;
}
