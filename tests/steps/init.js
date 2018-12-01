let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://0y2h20kh6f.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-kotovs"
    process.env.AWS_REGION        = "eu-west-1"
    process.env.order_events_stream = 'orders-dev-kotovs'
    process.env.restaurant_notification_topic = 'restaurants-dev-kotovs'

    initialized = true
}

module.exports = {
    init
}