import Client from '~/models/Client';

export default ({ app }, inject) => {
    app.clientConfig = new Client().config
}
