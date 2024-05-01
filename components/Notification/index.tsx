import { Alert as Notification, Button } from 'react-bootstrap';
import r2wc from '@r2wc/react-to-web-component';
import './notification.scss';

export default Notification;
export { Notification, Button };

const TdsNotification = r2wc(Notification);
customElements.define('tds-notification', TdsNotification);
