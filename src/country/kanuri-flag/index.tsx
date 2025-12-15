import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KanuriFlagSource = require('./kanuri.webp');

export default function KanuriFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KanuriFlagSource} />;
}
