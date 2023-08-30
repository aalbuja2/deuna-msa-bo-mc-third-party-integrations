export default () => ({
  service: {
    port: process.env.SERVICE_PORT,
    node_env: process.env.NODE_ENV,
  },
});
