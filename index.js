exports.pubsub = async (event, context) => {
    const pubsubMessage = event.data;
    let message = JSON.parse(Buffer.from(pubsubMessage, 'base64').toString());
    console.log(message,'##########')
};