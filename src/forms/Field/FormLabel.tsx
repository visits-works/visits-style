import type { LabelHTMLAttributes } from 'react';

import Base from '../../elements/Base';

export default function FormLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <Base as="label" classList={['leading-none peer-disabled:opacity-70']} {...props} />;
}
