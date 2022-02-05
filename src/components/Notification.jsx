import 'rsuite/dist/rsuite.min.css';

import { React, useState } from 'react';
import { Placeholder,  Notification, toaster, Progress } from "rsuite";


const SimpleNotification = () => {
    return (
        <Notification>
            <Placeholder.Paragraph width={30} rows={3}></Placeholder.Paragraph>
        </Notification>
    )
}

const SimpleProgress = () => {
    return (
        <div>
            <Progress.Circle percent={100} status="success" StrokeColor="yellow"></Progress.Circle>
        </div>
    )
}


export default SimpleProgress;
