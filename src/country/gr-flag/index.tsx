import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GrFlagSource = require('./gr.webp');

export default function GrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GrFlagSource} />;
}
