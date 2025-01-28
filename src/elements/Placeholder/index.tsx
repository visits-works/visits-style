import { HTMLAttributes } from 'react';

export default function Placeholder({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <span className="inline-block h-4 animate-pulse rounded" {...props} />;
}

// import { styled, keyframes } from 'styled-components';

// const setAnimation = ({ theme }: any) => keyframes`
//   0% { background-color: ${theme.greyLighter}; }
//   50% { background-color: ${theme.grey}; }
//   100% { background-color: ${theme.greyLighter}; }
// `;

// export default styled.span`
//   display: inline-block;
//   height: 1rem;
//   width: 100%;
//   animation: ${setAnimation} 3.5s ease infinite;
//   border-radius: ${({ theme }) => theme.radius};
//   opacity: 0.125;
// `;
