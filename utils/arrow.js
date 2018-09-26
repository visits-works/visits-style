export default function Arrow(color, direction) {
  return `
    position: absolute;
    border: 3px solid ${color};
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.625em;
    pointer-events: none;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
  `;
}