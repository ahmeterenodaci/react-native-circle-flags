import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ChGrFlagSource = require('./ch-gr.webp');

export default function ChGrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ChGrFlagSource} />;
}
