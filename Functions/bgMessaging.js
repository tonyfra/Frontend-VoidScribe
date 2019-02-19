/*
import firebase from 'react-native-firebase';
import type { RemoteMessage } from 'react-native-firebase';

export default async (message: RemoteMessage) => {
    console.log("RemoteMessage", message);

    const newNotification = new firebase.notifications.Notification()
        .ios.setSmallIcon(message.data.icon)
        .ios.setChannelId(message.data.channel_id)
        .setNotificationId(message.messageId)
        .setTitle(message.data.title)
        .setBody(message.data.body)
        .setData({
            key1: 'value1',
            key2: 'value2',
        });
    firebase.notifications().displayNotification(newNotification);

    return Promise.resolve();
}
*/