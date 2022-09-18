import React from 'react';
import reactDom from 'react-dom'
import PortalDemo from './PortalDemo'

export default function PortalCreater() {
    return reactDom.createPortal(<PortalDemo />, document.getElementById('OtherRoot'))
}
