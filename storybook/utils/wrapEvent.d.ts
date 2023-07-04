import React from 'react';
export default function wrapEvent(child: React.ReactElement, handlerName: string, ourHandler: React.EventHandler<any>): (event: any) => void;
