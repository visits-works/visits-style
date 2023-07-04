import React from 'react';

export default function wrapEvent(
  child: React.ReactElement,
  handlerName: string,
  ourHandler: React.EventHandler<any>,
) {
  return (event: any) => {
    if (typeof child !== 'string' && child.props[handlerName]) {
      child.props[handlerName](event);
    }

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}
